import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from '@/components/SectionContainer';

import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#18344a] py-20 text-white'>
      <SectionContainer>
        <div className='flex flex-col justify-between md:flex-row'>
          <div className='grid gap-8 md:w-1/2'>
            <Link href='/'>
              <h3 className='sr-only'>YUSOLVE</h3>
              <Image
                src='/images/logo-light.png'
                alt='YUSOLVE Logo'
                width={250}
                height={73}
                className='h-auto max-h-16 w-auto transition-opacity hover:opacity-75'
              />
            </Link>
            <p className='text-xl font-medium text-white/80'>
              YUSOLVE is your trusted partner in trucking business solutions,
              providing comprehensive services to help you navigate the
              complexities of the industry.
            </p>
          </div>
          <div className='mt-8 flex justify-end md:mt-0 md:w-1/2'>
            <div className='flex gap-16'>
              <div className='flex flex-col items-end gap-4'>
                <h5 className='mb-2 text-2xl font-semibold'>Company</h5>
                <Link
                  href='/about-us'
                  className='relative text-right text-xl text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-0 focus:text-white focus:after:w-0'
                >
                  About Us
                </Link>
                <Link
                  href='/contact-us'
                  className='relative text-right text-xl text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-0 focus:text-white focus:after:w-0'
                >
                  Contact Us
                </Link>
                <Link
                  href='/blog'
                  className='relative text-right text-xl text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-0 focus:text-white focus:after:w-0'
                >
                  Blog
                </Link>
              </div>
              <div className='flex flex-col items-end gap-4'>
                <h5 className='mb-2 text-2xl font-semibold'>Legal</h5>
                <Link
                  href='/privacy-policy'
                  className='relative text-right text-xl text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-0 focus:text-white focus:after:w-0'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms-of-service'
                  className='relative text-right text-xl text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-0 focus:text-white focus:after:w-0'
                >
                  Terms of Service
                </Link>
                <Link
                  href='/cookie-policy'
                  className='relative text-right text-xl text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-0 focus:text-white focus:after:w-0'
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className='mt-16 border-t border-white/20 pt-8'>
        <div className='flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-2'>
          <div className='flex gap-4'>
            <Link
              href='#'
              className='rounded-lg border-2 border-white/30 p-3 text-white shadow-2xl transition-colors hover:bg-white/10'
            >
              <Instagram />
            </Link>
            <Link
              href='#'
              className='rounded-lg border-2 border-white/30 p-3 text-white shadow-2xl transition-colors hover:bg-white/10'
            >
              <Twitter />
            </Link>
            <Link
              href='#'
              className='rounded-lg border-2 border-white/30 p-3 text-white shadow-2xl transition-colors hover:bg-white/10'
            >
              <Facebook />
            </Link>
          </div>
          <p className='text-xl font-medium text-white/80'>
            © YUSOLVE. All rights reserved. {new Date().getFullYear()} -
            present.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
