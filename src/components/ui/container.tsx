import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<SectionContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-[95%] max-w-[1400px] px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
