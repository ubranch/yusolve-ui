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
    // TODO: Implement form submission logic
    console.log('Form submitted', { country: selectedCountry, phoneNumber });
  };

  const inputClasses =
    'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20';

  const dialogContent = (title: string, isSignIn: boolean) => (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-bold text-white sm:text-2xl'>{title}</h2>
        <DialogClose />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='space-y-4'>
          {!isSignIn && (
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-white'>
                Name
              </Label>
              <Input
                id='name'
                placeholder='Enter your name'
                className={inputClasses}
              />
            </div>
          )}
          <div className='space-y-2'>
            <Label htmlFor='email' className='text-white'>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              className={inputClasses}
            />
          </div>
          {!isSignIn && (
            <>
              <div className='space-y-2'>
                <Label htmlFor='country' className='text-white'>
                  Country
                </Label>
                <Select
                  onValueChange={handleCountryChange}
                  defaultValue={selectedCountry.code}
                >
                  <SelectTrigger className={inputClasses}>
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
              <div className='space-y-2'>
                <Label htmlFor='phone' className='text-white'>
                  Phone Number
                </Label>
                <div className='flex'>
                  <span
                    className={cn(
                      inputClasses,
                      'flex items-center rounded-r-none border-r-0 px-3'
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
                    className={cn(inputClasses, 'rounded-l-none')}
                  />
                </div>
              </div>
            </>
          )}
          <div className='space-y-2'>
            <Label htmlFor='password' className='text-white'>
              Password
            </Label>
            <Input
              id='password'
              type='password'
              placeholder={
                isSignIn ? 'Enter your password' : 'Create a password'
              }
              className={inputClasses}
            />
          </div>
          <Button
            type='submit'
            className='w-full bg-white text-[#18344a] hover:bg-white/90'
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>
      </form>
      <div className='mt-6 text-center'>
        <Button
          variant='linkHover2'
          className='p-0 text-blue-400 hover:text-blue-300'
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={isScrolled ? 'default' : 'outline'}
          size='default'
          className={cn(
            'transition duration-300',
            isScrolled
              ? 'bg-[#18344a] text-white hover:bg-[#224b6b]'
              : 'border-white/30 text-white hover:bg-white/20',
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
          'w-[90%] max-w-[400px] rounded-xl border border-white/30 bg-[#18344a]/60 p-4 shadow-xl backdrop-blur-xl sm:p-6',
          'transition-all duration-150', // Reduced from 300ms to 150ms
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
