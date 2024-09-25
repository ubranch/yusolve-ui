'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const LampContainer = ({
  children,
  className,
  bgColor = 'bg-[#18344a]',
}: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}) => {
  return (
    <div
      className={cn(
        'relative z-0 flex min-h-[40vh] w-full flex-col items-center justify-center overflow-hidden rounded-md',
        className,
        bgColor
      )}
    >
      {/* Grid effect background */}
      <div className='absolute inset-0 z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#18344a_1px,transparent_1px),linear-gradient(to_bottom,#18344a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 backdrop-blur-[1px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_150%)] lg:bg-[#1e3344]/30 lg:bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)]'></div>

      <div className='relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center pt-20 sm:pt-32 md:pt-10 lg:pt-20'>
        <motion.div
          initial={{ opacity: 0.5, width: '10%' }}
          whileInView={{ opacity: 1, width: '85%' }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: 'easeInOut',
          }}
          className='bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[80%] max-w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
          style={
            {
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              '--initial-width': '10%',
              '--final-width': '100%',
            } as React.CSSProperties
          }
        >
          <div
            className={`absolute left-0 w-[100%] ${bgColor} bottom-0 z-20 h-40 [mask-image:linear-gradient(to_top,white,transparent)]`}
          />
          <div
            className={`absolute left-0 h-[100%] w-[20%] ${bgColor} bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: '10%' }}
          whileInView={{ opacity: 1, width: '85%' }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: 'easeInOut',
          }}
          className='bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[80%] max-w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]'
          style={
            {
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              '--initial-width': '10%',
              '--final-width': '85%',
            } as React.CSSProperties
          }
        >
          <div
            className={`absolute right-0 h-[100%] w-[20%] ${bgColor} bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]`}
          />
          <div
            className={`absolute right-0 w-[100%] ${bgColor} bottom-0 z-20 h-40 [mask-image:linear-gradient(to_top,white,transparent)]`}
          />
        </motion.div>

        <div
          className={`absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 ${bgColor} blur-2xl`}
        ></div>
        <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
        <div className='absolute inset-auto z-50 h-36 w-[80%] max-w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl'></div>

        <motion.div
          initial={{ width: '10%' }}
          whileInView={{ width: '85%' }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: 'easeInOut',
          }}
          className='absolute inset-auto z-30 h-36 max-w-[16rem] -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl'
        ></motion.div>

        <motion.div
          initial={{ width: '10%' }}
          whileInView={{ width: '85%' }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: 'easeInOut',
          }}
          className='absolute inset-auto z-50 h-0.5 max-w-[30rem] -translate-y-[7rem] bg-cyan-400'
        ></motion.div>

        <div
          className={`absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] ${bgColor}`}
        ></div>
      </div>

      <div className='relative z-50 flex w-full -translate-y-28 flex-col items-center pt-20'>
        {children}
      </div>
    </div>
  );
};
