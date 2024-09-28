import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from '@/components/SectionContainer';

import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#18344a] py-12 text-white sm:py-16 md:py-20'>
      <SectionContainer>
        <div className='flex flex-col justify-between space-y-10 md:flex-row md:space-y-0'>
          <div className='flex flex-col space-y-6 md:w-1/2 lg:pr-12'>
            <Link href='/'>
              <h3 className='sr-only'>YUSOLVE</h3>
              <Image
                src='/images/logo-light.png'
                alt='YUSOLVE Logo'
                width={200}
                height={58}
                className='h-auto w-auto max-w-[200px] transition-opacity hover:opacity-75 sm:max-w-[250px]'
              />
            </Link>
            <p className='text-base text-white/80 sm:text-lg md:text-xl lg:max-w-xl'>
              YUSOLVE is your trusted partner in trucking business solutions,
              providing comprehensive services to help you navigate the
              complexities of the industry.
            </p>
          </div>
          <div className='flex justify-between md:w-1/2 md:justify-end md:space-x-16 lg:space-x-24'>
            <div className='flex flex-col space-y-4'>
              <h5 className='mb-2 text-lg font-semibold sm:text-xl md:text-2xl'>
                Company
              </h5>
              <Link
                href='/about-us'
                className='relative text-sm text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full focus:text-white focus:after:w-full sm:text-base md:text-lg'
              >
                About Us
              </Link>
              <Link
                href='/contact-us'
                className='relative text-sm text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full focus:text-white focus:after:w-full sm:text-base md:text-lg'
              >
                Contact Us
              </Link>
              <Link
                href='/blog'
                className='relative text-sm text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full focus:text-white focus:after:w-full sm:text-base md:text-lg'
              >
                Blog
              </Link>
            </div>
            <div className='flex flex-col space-y-4'>
              <h5 className='mb-2 text-lg font-semibold sm:text-xl md:text-2xl'>
                Legal
              </h5>
              <Link
                href='/privacy-policy'
                className='relative text-sm text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full focus:text-white focus:after:w-full sm:text-base md:text-lg'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms-of-service'
                className='relative text-sm text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full focus:text-white focus:after:w-full sm:text-base md:text-lg'
              >
                Terms of Service
              </Link>
              <Link
                href='/cookie-policy'
                className='relative text-sm text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full focus:text-white focus:after:w-full sm:text-base md:text-lg'
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className='mt-10 border-t border-white/20 pt-8 sm:mt-12 md:mt-16'>
        <div className='flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0'>
          <div className='flex space-x-4'>
            <Link
              href='#'
              className='rounded-lg border-2 border-white/30 p-2 text-white shadow-2xl transition-colors hover:bg-white/10 sm:p-3'
            >
              <Instagram className='h-5 w-5 sm:h-6 sm:w-6' />
            </Link>
            <Link
              href='#'
              className='rounded-lg border-2 border-white/30 p-2 text-white shadow-2xl transition-colors hover:bg-white/10 sm:p-3'
            >
              <Twitter className='h-5 w-5 sm:h-6 sm:w-6' />
            </Link>
            <Link
              href='#'
              className='rounded-lg border-2 border-white/30 p-2 text-white shadow-2xl transition-colors hover:bg-white/10 sm:p-3'
            >
              <Facebook className='h-5 w-5 sm:h-6 sm:w-6' />
            </Link>
          </div>
          <p className='text-center text-sm text-white/80 sm:text-base md:text-lg'>
            © YUSOLVE. All rights reserved. {new Date().getFullYear()} -
            present.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
