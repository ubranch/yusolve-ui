'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type TickerType = 'number' | 'currency';

export default function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  baseClass = 'inline-block tabular-nums tracking-wider text-black dark:text-white',
  type = 'number',
}: Readonly<{
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  delay?: number; // delay in s
  baseClass?: string;
  type?: TickerType;
}>) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          let formattedValue: string;
          if (type === 'currency') {
            formattedValue = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(Number(latest.toFixed(0)));
          } else {
            formattedValue = Intl.NumberFormat('en-US').format(
              Number(latest.toFixed(0))
            );
          }
          ref.current.textContent = formattedValue;
        }
      }),
    [springValue, type]
  );

  return <span className={cn(baseClass, className)} ref={ref} />;
}
