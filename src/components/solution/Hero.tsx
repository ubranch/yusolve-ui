import React from 'react';
import Image from 'next/image';
import { ConsultationModalTrigger } from '@/components/common/ConsultationModalTrigger';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/container';

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

const Hero: React.FC<PageHeroProps> = ({ title, description, className }) => {
  return (
    <div
      className={cn(
        'lg:pb-22 relative w-full overflow-hidden pb-10 pt-24 lg:pt-28',
        className
      )}
    >
      <div className='-z-1 absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 backdrop-blur-[1px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_70%,transparent_110%)]'></div>

      <div className='relative z-20'>
        <Container>
          <div className='mt-10 flex flex-col-reverse items-center justify-between lg:flex-row'>
            <div className='mb-4 max-w-xl text-center lg:mb-0 lg:pl-0 lg:text-left'>
              <h1 className='mb-4 text-4xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl'>
                {title}
              </h1>
              <p className='mb-8 text-lg text-white/70 sm:text-xl md:text-2xl'>
                {description}
              </p>
              <ConsultationModalTrigger />
            </div>
            <div className='relative mb-10 h-64 w-full max-w-md lg:h-96 lg:w-1/2'>
              <Image
                className='rounded-[2rem] object-cover'
                src='/images/solutions/service-permits.jpg'
                alt='Trucking Permits Banner'
                quality={100}
                priority
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
