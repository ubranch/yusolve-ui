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
                  className='text-right text-xl text-white/70 transition-colors hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                >
                  About Us
                </Link>
                <Link
                  href='/contact-us'
                  className='text-right text-xl text-white/70 transition-colors hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                >
                  Contact Us
                </Link>
                <Link
                  href='/blog'
                  className='text-right text-xl text-white/70 transition-colors hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                >
                  Blog
                </Link>
              </div>
              <div className='flex flex-col items-end gap-4'>
                <h5 className='mb-2 text-2xl font-semibold'>Legal</h5>
                <Link
                  href='/privacy-policy'
                  className='text-right text-xl text-white/70 transition-colors hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                >
                  Privacy Policy
                </Link>
                <Link
                  href='/terms-of-service'
                  className='text-right text-xl text-white/70 transition-colors hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                >
                  Terms of Service
                </Link>
                <Link
                  href='/cookie-policy'
                  className='text-right text-xl text-white/70 transition-colors hover:text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
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
              className='rounded-lg border border-white/30 p-3 text-white transition-colors hover:bg-white/10'
            >
              <Instagram />
            </Link>
            <Link
              href='#'
              className='rounded-lg border border-white/30 p-3 text-white transition-colors hover:bg-white/10'
            >
              <Twitter />
            </Link>
            <Link
              href='#'
              className='rounded-lg border border-white/30 p-3 text-white transition-colors hover:bg-white/10'
            >
              <Facebook />
            </Link>
          </div>
          <p className='text-xl font-medium text-white/80'>
            © {new Date().getFullYear()} YUSOLVE. All rights reserved.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
