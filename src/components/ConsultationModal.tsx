import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    role: '',
    interests: [] as string[],
    fullName: '',
    email: '',
    phone: '',
    additionalInfo: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const inputClasses =
    'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20';

  const steps = [
    {
      title: 'Let us know who you are so we can better \n assist you:',
      content: (
        <RadioGroup
          value={formData.role}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, role: value }))
          }
        >
          {[
            'I own a trucking company',
            'I work for a trucking company',
            'I am an owner operator',
            'I want to start my own trucking business',
            'I am a truck driver',
            'Other',
          ].map((option) => (
            <div
              key={option}
              className='mb-2 flex flex-row items-center space-x-3 space-y-0'
            >
              <RadioGroupItem value={option} id={option} className='ml-auto' />
              <Label
                htmlFor={option}
                className='flex-grow text-base font-normal text-white'
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ),
    },
    {
      title: 'What are you interested in?',
      content: (
        <div className='space-y-2'>
          {[
            'DOT/FMCSA Compliance',
            'Trucking Insurance',
            'Tax Preparation and Permitting',
            'Factoring',
            'ELD Device',
            'Freight Planning',
            'Fuel Card',
            'All of the above',
            'Other',
          ].map((interest) => (
            <div
              key={interest}
              className='flex flex-row items-center space-x-3 space-y-0'
            >
              <Checkbox
                id={interest}
                checked={formData.interests.includes(interest)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleCheckboxChange(interest);
                  } else handleCheckboxChange(interest);
                }}
                className='ml-auto'
              />
              <Label
                htmlFor={interest}
                className='flex-grow text-base font-normal text-white'
              >
                {interest}
              </Label>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Contact Information',
      content: (
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='fullName' className='text-white'>
              Full Name
            </Label>
            <Input
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder='Enter your name'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email' className='text-white'>
              Email
            </Label>
            <Input
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder='Enter your email'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='phone' className='text-white'>
              Phone
            </Label>
            <Input
              id='phone'
              name='phone'
              type='tel'
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={inputClasses}
              placeholder='Enter your phone number'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Additional Information',
      content: (
        <div className='space-y-2'>
          <Label htmlFor='additionalInfo' className='text-white'>
            Is there anything else you want to say?
          </Label>
          <Textarea
            id='additionalInfo'
            name='additionalInfo'
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
            className={inputClasses}
            placeholder='Enter any additional information'
          />
        </div>
      ),
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
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
        <div className='mb-2 flex items-center justify-between'>
          <h2 className='text-lg font-bold text-white sm:text-xl'>
            Get A Free Consultation
          </h2>
          <DialogClose className='rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
            <X className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </DialogClose>
        </div>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className='space-y-3'>
            <div className='text-sm font-medium text-white'>
              {steps[currentStep].title}
            </div>
            {steps[currentStep].content}
            <div
              className={`flex ${
                currentStep === 0 ? 'justify-center' : 'justify-between'
              } mt-4`}
            >
              {currentStep > 0 && (
                <Button
                  type='button'
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  variant='outline'
                  className='flex items-center text-sm'
                >
                  <ChevronLeft className='mr-2 h-4 w-4' /> Previous
                </Button>
              )}
              {currentStep < steps.length - 1 ? (
                <Button
                  type='button'
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className={`flex items-center text-sm ${
                    currentStep === 0 ? '' : 'ml-auto'
                  }`}
                >
                  Next <ChevronRight className='ml-2 h-4 w-4' />
                </Button>
              ) : (
                <Button
                  type='submit'
                  className={`text-sm ${currentStep === 0 ? '' : 'ml-auto'}`}
                >
                  Submit
                </Button>
              )}
            </div>
          </form>
        ) : (
          <div className='py-4 text-center'>
            <div className='mb-3 text-4xl text-green-400'>✓</div>
            <h3 className='mb-2 text-lg font-bold text-white'>Thank You!</h3>
            <p className='text-sm text-white'>
              Your request has been successfully submitted. We will get in touch
              with you soon.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
