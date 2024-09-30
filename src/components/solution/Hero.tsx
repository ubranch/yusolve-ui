import React from 'react';
import Image from 'next/image';
import { ConsultationModalTrigger } from '@/components/common/ConsultationModalTrigger';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

const Hero: React.FC<PageHeroProps> = ({ title, description, className }) => {
  return (
    <div className={cn('relative h-[70vh] w-full overflow-hidden', className)}>
      {/* Background container */}
      <div className='absolute inset-0 flex'>
        {/* Gradient overlay */}
        <div className='absolute inset-y-0 left-0 right-1/3 z-10 bg-gradient-to-r from-[#18344a] to-transparent'></div>

        {/* Image background */}
        <div className='absolute inset-y-0 right-0 aspect-[1/1] h-full'>
          <Image
            src='/images/solutions/service-permits.jpg'
            alt='Trucking Permits Banner'
            className='object-cover'
            quality={100}
            priority
            fill
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-20 flex h-full items-end pb-10'>
        <div className='mx-auto w-[95%] max-w-[1400px] px-4 sm:px-6 lg:px-8'>
          <div className='max-w-xl'>
            <h1 className='mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
              {title}
            </h1>
            <p className='mb-8 text-xl text-white/70 sm:text-2xl'>
              {description}
            </p>
            <ConsultationModalTrigger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
