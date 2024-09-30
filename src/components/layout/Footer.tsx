import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/container';

import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#18344a] py-12 text-white sm:py-16 md:py-20'>
      <Container>
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
                Contact Us
              </h5>
              <p className='mt-6 text-base text-white/80 sm:text-lg md:text-xl lg:max-w-xl'>
                128 Sunset Blvd
                <br />
                New Castle, DE 19720
                <br />
                Phone:{' '}
                <a href='tel:+15136533364' className='hover:underline'>
                  (513) 653-3364
                </a>
                <br />
                <a
                  href='mailto:billing@yusolve.com'
                  className='hover:underline'
                >
                  billing@yusolve.com
                </a>
              </p>
            </div>

            {/* <div className='flex flex-col space-y-4'>
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
            </div> */}
          </div>
        </div>
      </Container>
      <Container className='mt-10 border-t border-white/20 pt-8 sm:mt-12 md:mt-16'>
        <div className='flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0'>
          <div className='flex items-center justify-center space-x-4'>
            <Link
              href='#'
              className='rounded-lg border-2 border-white/30 p-2 text-white shadow-2xl transition-colors hover:bg-white/10 sm:p-3'
            >
              <Instagram className='h-5 w-5 sm:h-6 sm:w-6' />
            </Link>
            <Link
              href='#'
              className='max-w-20 rounded-lg border-2 border-white/30 p-2 text-white shadow-2xl transition-colors hover:bg-white/10 sm:p-3'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-5 w-5 sm:h-6 sm:w-6'
                id='telegram'
                fill='white'
              >
                <path d='M16.114 9.291c.552-.552 1.1-1.84-1.2-.276a395.806 395.806 0 0 1-6.489 4.372 2.7 2.7 0 0 1-2.117.046c-1.38-.414-2.991-.966-2.991-.966s-1.1-.691.783-1.427c0 0 7.961-3.267 10.722-4.418 1.058-.46 4.647-1.932 4.647-1.932s1.657-.645 1.519.92c-.046.644-.414 2.9-.782 5.338-.553 3.451-1.151 7.225-1.151 7.225s-.092 1.058-.874 1.242a3.787 3.787 0 0 1-2.3-.828c-.184-.138-3.451-2.209-4.648-3.221a.872.872 0 0 1 .046-1.473 169.31 169.31 0 0 0 4.835-4.602Z'></path>
              </svg>
            </Link>
            <Link
              href='#'
              className='rounded-lg border-2 border-white/30 p-2 text-white shadow-2xl transition-colors hover:bg-white/10 sm:p-3'
            >
              <Facebook className='h-5 w-5 sm:h-6 sm:w-6' />
            </Link>
          </div>
          <p className='text-center text-sm text-white/80 sm:text-base md:text-lg'>
            © YuSolve LLC. All rights reserved. {new Date().getFullYear()} -
            present.
          </p>
        </div>
      </Container>
    </footer>
  );
}
