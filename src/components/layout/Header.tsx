'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { AuthDialog } from '@/components/common/AuthDialog';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isDesktopSolutionsOpen, setIsDesktopSolutionsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(true);
  };

  const closeMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <header className='fixed left-1/2 top-6 z-50 w-full -translate-x-1/2 transform font-sans font-medium'>
      <Container>
        <div className='rounded-2xl border border-white/30 bg-white/5 px-4 py-4 shadow-lg backdrop-blur-md transition-all duration-300 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link href='/'>
                <Image
                  src='/images/logo-light.png'
                  alt='Simplex Group'
                  width={188}
                  height={55}
                  className='h-8 w-auto'
                  priority
                  quality={85}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  style={{ color: 'transparent' }}
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <nav className='hidden space-x-8 lg:flex'>
              <DropdownMenu onOpenChange={setIsDesktopSolutionsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='linkHover2'
                    className='text-white hover:text-gray-300'
                  >
                    Solutions
                    <ChevronDownIcon
                      className={cn(
                        'ml-1 h-4 w-4 transition-transform duration-200',
                        isDesktopSolutionsOpen ? 'rotate-180' : ''
                      )}
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='rounded-md border border-white/30 bg-[#18344a]/70 backdrop-blur-lg'>
                  <DropdownMenuItem className='text-base text-white hover:bg-white/30'>
                    <Link href='/safety-compliance' className='w-full'>
                      Safety Compliance
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-base text-white hover:bg-white/30'>
                    <Link href='/trucking-factoring' className='w-full'>
                      Trucking Factoring
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-base text-white hover:bg-white/30'>
                    <Link href='/administrative' className='w-full'>
                      Administrative
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-base text-white hover:bg-white/30'>
                    <Link href='/trucking-insurance' className='w-full'>
                      Trucking Insurance
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='text-base text-white hover:bg-white/30'>
                    <Link href='/freight-planning' className='w-full'>
                      Freight Planning
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant='linkHover2'
                asChild
                className='text-white hover:text-gray-300'
              >
                <Link href='/about-us'>About Us</Link>
              </Button>
              <Button
                variant='linkHover2'
                asChild
                className='text-white hover:text-gray-300'
              >
                <Link href='/contact-us'>Contact Us</Link>
              </Button>
            </nav>

            {/* Sign In Button for desktop */}
            <div className='hidden lg:block'>
              <AuthDialog isScrolled={false} buttonType='signin' />
            </div>

            {/* Mobile menu button */}
            <div className='lg:hidden'>
              <button
                ref={mobileMenuButtonRef}
                type='button'
                className='inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30'
                onClick={isMenuOpen ? closeMobileMenu : openMobileMenu}
              >
                <span className='sr-only'>
                  {isMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                {isMenuOpen ? (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <Container className='lg:hidden'>
        <div
          ref={mobileMenuRef}
          className={cn(
            'mt-2 rounded-xl border border-white/10 bg-[#18344a]/70 shadow-lg backdrop-blur-lg',
            'origin-top transition-all duration-300 ease-in-out',
            isMenuOpen
              ? 'translate-y-0 scale-y-100 opacity-100'
              : 'pointer-events-none -translate-y-2 scale-y-95 opacity-0'
          )}
        >
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <DropdownMenu onOpenChange={setIsMobileSolutionsOpen}>
              <DropdownMenuTrigger className='flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-medium text-white hover:bg-white/30'>
                Solutions
                <ChevronDownIcon
                  className={cn(
                    'ml-2 h-4 w-4 transition-transform duration-200',
                    isMobileSolutionsOpen ? 'rotate-180' : ''
                  )}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-full rounded-md border border-white/20 bg-[#18344a]/90 backdrop-blur-lg'>
                <DropdownMenuItem className='text-sm text-white hover:bg-white/30'>
                  <Link href='/safety-compliance' className='w-full'>
                    Safety Compliance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-sm text-white hover:bg-white/30'>
                  <Link href='/trucking-factoring' className='w-full'>
                    Trucking Factoring
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-sm text-white hover:bg-white/30'>
                  <Link href='/administrative' className='w-full'>
                    Administrative
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-sm text-white hover:bg-white/30'>
                  <Link href='/trucking-insurance' className='w-full'>
                    Trucking Insurance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-sm text-white hover:bg-white/30'>
                  <Link href='/freight-planning' className='w-full'>
                    Freight Planning
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href='/about-us'
              className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/30'
            >
              About Us
            </Link>
            <Link
              href='/contact-us'
              className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/30'
            >
              Contact Us
            </Link>

            {/* Auth buttons container */}
            <div className='mt-4 flex items-center justify-around px-2 py-2'>
              <AuthDialog
                isScrolled={false}
                buttonType='signin'
                className='mr-2 flex-1'
              />
              <AuthDialog
                isScrolled={false}
                buttonType='signup'
                className='ml-2 flex-1'
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
