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
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { AuthDialog } from '@/components/AuthDialog';
import { Button } from "@/components/ui/button";

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
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30 w-[95%] max-w-[1400px] font-sans font-medium">
      <div className="transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 rounded-2xl border bg-white/5 backdrop-blur-md border-white/10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-light.png"
                alt="Simplex Group"
                width={188}
                height={55}
                className="w-auto h-8"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ color: 'transparent' }}
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden lg:flex space-x-8">
            <DropdownMenu onOpenChange={setIsDesktopSolutionsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="linkHover2" className="text-white hover:text-gray-300">
                  Solutions
                  <ChevronDownIcon className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-200",
                    isDesktopSolutionsOpen ? "rotate-180" : ""
                  )} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#18344a]/70 backdrop-blur-lg border border-white/30 rounded-md">
                <DropdownMenuItem className="text-base text-white hover:bg-white/30">
                  <Link href="/safety-compliance" className="w-full">Safety Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base text-white hover:bg-white/30">
                  <Link href="/trucking-factoring" className="w-full">Trucking Factoring</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base text-white hover:bg-white/30">
                  <Link href="/administrative" className="w-full">Administrative</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base text-white hover:bg-white/30">
                  <Link href="/trucking-insurance" className="w-full">Trucking Insurance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base text-white hover:bg-white/30">
                  <Link href="/freight-planning" className="w-full">Freight Planning</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="linkHover2" asChild className="text-white hover:text-gray-300">
              <Link href="/about-us">About Us</Link>
            </Button>
            <Button variant="linkHover2" asChild className="text-white hover:text-gray-300">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
            <Button variant="linkHover2" asChild className="text-white hover:text-gray-300">
              <Link href="/blog">Blog</Link>
            </Button>
          </nav>

          {/* Sign In Button for desktop */}
          <div className="hidden lg:block">
            <AuthDialog isScrolled={false} buttonType="signin" />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              ref={mobileMenuButtonRef}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white hover:text-gray-300 hover:bg-white/10"
              onClick={isMenuOpen ? closeMobileMenu : openMobileMenu}
            >
              <span className="sr-only">
                {isMenuOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "lg:hidden mt-2 rounded-xl bg-[#18344a]/70 backdrop-blur-lg shadow-lg border border-white/10",
          "transition-all duration-300 ease-in-out origin-top",
          isMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <DropdownMenu onOpenChange={setIsMobileSolutionsOpen}>
            <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/30 flex justify-between items-center">
              Solutions
              <ChevronDownIcon className={cn(
                "ml-2 h-4 w-4 transition-transform duration-200",
                isMobileSolutionsOpen ? "rotate-180" : ""
              )} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#18344a]/90 backdrop-blur-lg border border-white/20 rounded-md w-full">
              <DropdownMenuItem className="text-sm text-white hover:bg-white/30">
                <Link href="/safety-compliance" className="w-full">Safety Compliance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm text-white hover:bg-white/30">
                <Link href="/trucking-factoring" className="w-full">Trucking Factoring</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm text-white hover:bg-white/30">
                <Link href="/administrative" className="w-full">Administrative</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm text-white hover:bg-white/30">
                <Link href="/trucking-insurance" className="w-full">Trucking Insurance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm text-white hover:bg-white/30">
                <Link href="/freight-planning" className="w-full">Freight Planning</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/30">About Us</Link>
          <Link href="/contact-us" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/30">Contact Us</Link>
          <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/30">Blog</Link>

          {/* Auth buttons container */}
          <div className="flex justify-around items-center mt-4 px-3 py-2">
            <AuthDialog isScrolled={false} buttonType="signin" className="flex-1 mr-2" />
            <AuthDialog isScrolled={false} buttonType="signup" className="flex-1 ml-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
