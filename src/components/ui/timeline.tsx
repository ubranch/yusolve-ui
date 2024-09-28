'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import SectionContainer from '@/components/SectionContainer';
import { RadiobuttonIcon } from '@radix-ui/react-icons';

interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full bg-white font-sans' ref={containerRef}>
      <SectionContainer>
        <div ref={ref} className='relative mx-auto pb-20 pt-16 md:pt-0'>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`${index === 0 ? 'md:pt-40' : 'pt-20 md:pt-40'}`}
            >
              <div className='sticky top-32 z-40 inline-block rounded-2xl border border-[#18344a]/20 bg-white/5 py-2 pl-3 pr-4 shadow-lg backdrop-blur-md transition-all duration-300 md:top-40'>
                <div className='flex items-center'>
                  <RadiobuttonIcon className='h-10 w-10 text-[#18344a]' />
                  <h3 className='ml-4 text-xl font-bold text-[#18344a] md:text-xl lg:text-2xl'>
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className='mt-6 flex flex-col lg:flex-row'>
                <div className='pl-20 pr-4 md:pl-20 lg:w-1/2 lg:pr-8'></div>
                <div className='md: mt-4 pl-20 pr-4 md:pl-20 lg:mt-0 lg:w-2/3 lg:pl-8'>
                  <div className='text-lg text-[#18344a]/80 lg:text-xl'>
                    {typeof item.content === 'string'
                      ? item.content
                      : React.Children.toArray(item.content)[0]}
                  </div>
                  <div className='mt-4 text-base text-[#18344a]/60 lg:text-lg'>
                    {typeof item.content === 'string'
                      ? null
                      : React.Children.toArray(item.content)[1]}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + 'px',
            }}
            className='absolute left-8 top-16 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-300 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,white_10%,white_90%,transparent_100%)] md:left-8 md:top-0'
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#18344a] from-[0%] via-[#18344a] via-[10%] to-transparent'
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
