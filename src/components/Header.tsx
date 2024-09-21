'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30 w-11/12 max-w-7xl">
      <div className={cn(
        "transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 rounded-2xl",
        isScrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-white/5 backdrop-blur-md"
      )}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={isScrolled ? "/images/logo.png" : "/images/logo-light.png"}
                alt="Simplex Group"
                width={188}
                height={55}
                className="w-auto h-8"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden lg:flex space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "text-base font-medium flex items-center px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30",
                isScrolled ? "text-[#18344a] hover:text-[#224b6b]" : "text-white hover:text-gray-300"
              )}>
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#18344a]/70 backdrop-blur-lg border border-white/30 rounded-md">
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/safety-compliance" className="w-full">Safety Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/trucking-factoring" className="w-full">Trucking Factoring</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/administrative" className="w-full">Administrative</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/trucking-insurance" className="w-full">Trucking Insurance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/freight-planning" className="w-full">Freight Planning</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about-us" className={cn(
              "text-base font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30",
              isScrolled ? "text-[#18344a] hover:text-[#224b6b]" : "text-white hover:text-gray-300"
            )}>About Us</Link>
            <Link href="/contact-us" className={cn(
              "text-base font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30",
              isScrolled ? "text-[#18344a] hover:text-[#224b6b]" : "text-white hover:text-gray-300"
            )}>Contact Us</Link>
            <Link href="/blog" className={cn(
              "text-base font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30",
              isScrolled ? "text-[#18344a] hover:text-[#224b6b]" : "text-white hover:text-gray-300"
            )}>Blog</Link>
          </nav>

          {/* Sign In Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant={isScrolled ? "default" : "outline"}
              size="default"
              className={cn(
                "transition duration-300",
                isScrolled
                  ? "bg-[#18344a] text-white hover:bg-[#224b6b]"
                  : "border-white/30 text-white hover:bg-white/20"
              )}
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30",
                isScrolled
                  ? "text-[#18344a] hover:text-[#224b6b] hover:bg-gray-100"
                  : "text-white hover:text-gray-300 hover:bg-white/10"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
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
      {isMenuOpen && (
        <div className="lg:hidden mt-2 rounded-xl bg-[#18344a]/70 backdrop-blur-lg shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/30">
                Solutions
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#18344a]/70 backdrop-blur-lg border border-white/30 rounded-md">
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/safety-compliance" className="w-full">Safety Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/trucking-factoring" className="w-full">Trucking Factoring</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/administrative" className="w-full">Administrative</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/trucking-insurance" className="w-full">Trucking Insurance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/30">
                  <Link href="/freight-planning" className="w-full">Freight Planning</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/30">About Us</Link>
            <Link href="/contact-us" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/30">Contact Us</Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/30">Blog</Link>
            <Button
              asChild
              variant="outline"
              size="default"
              className="w-full justify-start bg-white/10 text-white hover:bg-white/20 rounded-md"
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
