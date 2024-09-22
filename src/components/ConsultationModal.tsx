import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    role: '',
    interests: [] as string[],
    fullName: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const inputClasses = "bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20";

  const steps = [
    {
      title: "Let us know who you are so we can better assist you:",
      content: (
        <RadioGroup value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
          {["I own a trucking company", "I work for a trucking company", "I am an owner operator", "I want to start my own trucking business", "I am a truck driver", "Other"].map((option) => (
            <div key={option} className="flex flex-row items-center space-x-3 space-y-0 mb-2">
              <RadioGroupItem value={option} id={option} className="ml-auto" />
              <Label htmlFor={option} className="text-base font-normal flex-grow text-white">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )
    },
    {
      title: "What are you interested in?",
      content: (
        <div className="space-y-2">
          {["DOT/FMCSA Compliance", "Trucking Insurance", "Tax Preparation and Permitting", "Factoring", "ELD Device", "Freight Planning", "Fuel Card", "All of the above", "Other"].map((interest) => (
            <div key={interest} className="flex flex-row items-center space-x-3 space-y-0">
              <Checkbox
                id={interest}
                checked={formData.interests.includes(interest)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleCheckboxChange(interest);
                  } else {
                    handleCheckboxChange(interest);
                  }
                }}
                className="ml-auto"
              />
              <Label htmlFor={interest} className="text-base font-normal flex-grow text-white">
                {interest}
              </Label>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Contact Information",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-white">Full Name</Label>
            <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className={inputClasses} placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className={inputClasses} placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone</Label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required className={inputClasses} placeholder="Enter your phone number" />
          </div>
        </div>
      )
    },
    {
      title: "Additional Information",
      content: (
        <div className="space-y-2">
          <Label htmlFor="additionalInfo" className="text-white">Is there anything else you want to say?</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
            className={inputClasses}
            placeholder="Enter any additional information"
          />
        </div>
      )
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "w-[90%] sm:max-w-[450px] p-5 sm:p-6 bg-[#18344a]/60 backdrop-blur-xl border border-white/30 rounded-xl shadow-xl",
          "transition-all duration-150",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base sm:text-lg font-bold text-white">Get A Free Consultation</h2>
          <DialogClose className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white hover:text-gray-300 hover:bg-white/10">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-base font-semibold mb-4 text-white">{steps[currentStep].title}</div>
            {steps[currentStep].content}
            <div className={`flex ${currentStep === 0 ? 'justify-center' : 'justify-between'} mt-6`}>
              {currentStep > 0 && (
                <Button type="button" onClick={() => setCurrentStep(prev => prev - 1)} variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              )}
              {currentStep < steps.length - 2 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className={`flex items-center ${currentStep === 0 ? '' : 'ml-auto'}`}
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" className={`${currentStep === 0 ? '' : 'ml-auto'}`}>
                  Submit
                </Button>
              )}
            </div>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="text-green-400 text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-white">Thank You!</h3>
            <p className="text-base text-white">Your request has been successfully submitted. We will get in touch with you soon.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
