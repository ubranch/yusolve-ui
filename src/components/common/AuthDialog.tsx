import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PersonIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface AuthDialogProps {
  isScrolled: boolean;
  buttonType: 'signin' | 'signup';
  className?: string;
}

const topCountries = [
  {
    code: 'US',
    name: 'United States',
    phoneCode: '+1',
    template: '(###) ###-####',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    phoneCode: '+44',
    template: '#### ######',
  },
  { code: 'CA', name: 'Canada', phoneCode: '+1', template: '(###) ###-####' },
  { code: 'AU', name: 'Australia', phoneCode: '+61', template: '### ### ###' },
  { code: 'DE', name: 'Germany', phoneCode: '+49', template: '### #######' },
  { code: 'FR', name: 'France', phoneCode: '+33', template: '# ## ## ## ##' },
  { code: 'JP', name: 'Japan', phoneCode: '+81', template: '## #### ####' },
  { code: 'IN', name: 'India', phoneCode: '+91', template: '##### #####' },
  { code: 'CN', name: 'China', phoneCode: '+86', template: '### #### ####' },
  { code: 'BR', name: 'Brazil', phoneCode: '+55', template: '## #####-####' },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    phoneCode: '+998',
    template: '## ### ## ##',
  },
];

export function AuthDialog({
  isScrolled,
  buttonType,
  className,
}: Readonly<AuthDialogProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState<'signin' | 'signup'>(
    buttonType
  );
  const [selectedCountry, setSelectedCountry] = useState(topCountries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [key, setKey] = useState(0);

  const openDialog = () => {
    setActiveDialog(buttonType);
    setIsOpen(true);
  };

  const switchDialog = () => {
    setIsOpen(false);
    setTimeout(() => {
      setActiveDialog((prev) => (prev === 'signin' ? 'signup' : 'signin'));
      setKey((prevKey) => prevKey + 1);
      setIsOpen(true);
    }, 150);
  };

  const handleCountryChange = (value: string) => {
    const country = topCountries.find((c) => c.code === value);
    if (country) {
      setSelectedCountry(country);
      setPhoneNumber('');
    }
  };

  const formatPhoneNumber = (value: string, template: string) => {
    let result = '';
    let index = 0;
    for (let i = 0; i < template.length && index < value.length; i++) {
      if (template[i] === '#') {
        result += value[index++];
      } else {
        result += template[i];
      }
    }
    return result;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    const formattedValue = formatPhoneNumber(value, selectedCountry.template);
    setPhoneNumber(formattedValue);
  };

  const isValidPhoneNumber = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    return (
      digitsOnly.length === selectedCountry.template.replace(/\D/g, '').length
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeDialog === 'signup' && !isValidPhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number');
      return;
    }
    // TODO: Implement actual form submission logic
    console.log('Form submitted', { country: selectedCountry, phoneNumber });

    toast.success(`${activeDialog === 'signin' ? 'Signed in' : 'Signed up'} successfully!`, {
      style: {
        backgroundColor: 'rgba(24, 52, 74, 0.6)',
        color: 'white',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      },
    });

    setIsOpen(false);
  };

  const inputClasses =
    'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20';

  const dialogContent = (title: string, isSignIn: boolean) => (
    <>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-white sm:text-2xl'>{title}</h2>
        <DialogClose />
      </div>
      <form onSubmit={handleSubmit} className='space-y-3'>
        {!isSignIn && (
          <div>
            <Label htmlFor='name' className='text-sm text-white'>
              Name
            </Label>
            <Input
              id='name'
              placeholder='Enter your name'
              className={cn(inputClasses, 'mt-1')}
            />
          </div>
        )}
        <div>
          <Label htmlFor='email' className='text-sm text-white'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='Enter your email'
            className={cn(inputClasses, 'mt-1')}
          />
        </div>
        {!isSignIn && (
          <>
            <div>
              <Label htmlFor='country' className='text-sm text-white'>
                Country
              </Label>
              <Select
                onValueChange={handleCountryChange}
                defaultValue={selectedCountry.code}
              >
                <SelectTrigger className={cn(inputClasses, 'mt-1')}>
                  <SelectValue placeholder='Select country' />
                </SelectTrigger>
                <SelectContent>
                  {topCountries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name} ({country.phoneCode})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor='phone' className='text-sm text-white'>
                Phone Number
              </Label>
              <div className='mt-1 flex'>
                <span
                  className={cn(
                    inputClasses,
                    'flex items-center rounded-r-none border-r-0 px-2 text-sm'
                  )}
                >
                  {selectedCountry.phoneCode}
                </span>
                <Input
                  id='phone'
                  type='tel'
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder={selectedCountry.template.replace(/#/g, '0')}
                  className={cn(inputClasses, 'rounded-l-none text-sm')}
                />
              </div>
            </div>
          </>
        )}
        <div>
          <Label htmlFor='password' className='text-sm text-white'>
            Password
          </Label>
          <Input
            id='password'
            type='password'
            placeholder={isSignIn ? 'Enter your password' : 'Create a password'}
            className={cn(inputClasses, 'mt-1')}
          />
        </div>
        <Button
          type='submit'
          className={cn(
            'mt-2 w-full',
            buttonClasses
          )}
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>
      <div className='mt-2 text-center'>
        <Button
          variant='linkHover2'
          className='p-0 text-sm text-white hover:text-white/80'
          onClick={switchDialog}
        >
          {isSignIn
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Sign In'}
        </Button>
      </div>
    </>
  );

  const buttonText = buttonType === 'signin' ? 'Sign In' : 'Sign Up';

  const buttonClasses = `
    border border-white/30
    bg-[#18344a]/60 text-white
    shadow-lg
    hover:bg-white/10 hover:backdrop-blur-md
    transition-all duration-300 ease-in-out
  `;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            buttonClasses,
            className
          )}
          onClick={openDialog}
        >
          <PersonIcon className='mr-2 h-4 w-4' />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent
        key={key}
        className={cn(
          'w-[90%] max-w-[400px] rounded-xl border border-white/30 bg-[#18344a]/60 p-6 shadow-xl backdrop-blur-xl sm:p-4',
          'max-h-[90vh] overflow-y-auto',
          'transition-all duration-150',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
          'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
        )}
      >
        {dialogContent(
          activeDialog === 'signin' ? 'Sign In' : 'Sign Up',
          activeDialog === 'signin'
        )}
      </DialogContent>
    </Dialog>
  );
}
