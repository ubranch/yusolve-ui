'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from '@radix-ui/react-icons';
import NumberTicker from '@/components/ui/number-ticker';
import Container from '@/components/ui/container';

const plans = [
  {
    name: 'Basic',
    desc: 'Basic package for small trucking businesses.',
    price: 500,
    isMostPop: false,
    features: ['HR / Hiring', 'Safety', 'Insurance', 'Equipment'],
  },
  {
    name: 'Advanced',
    desc: 'Advanced package for growing companies.',
    price: 1000,
    isMostPop: true,
    features: [
      'HR / Hiring',
      'Safety',
      'Insurance',
      'Equipment',
      '24/7 Support',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Premium package for large trucking fleets.',
    price: 'Custom',
    isMostPop: false,
    features: [
      'All features from Subscription 2',
      'Additional customized solution',
      'Dedicated account manager',
      'Priority support',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id='pricing' className='relative overflow-hidden bg-[#18344a] py-16'>
      {/* <div className='-z-1 absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 backdrop-blur-[1px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_70%,transparent_110%)]'></div> */}

      <Container>
        <div className='relative mx-auto max-w-xl text-center'>
          <h3 className='text-4xl font-semibold tracking-tighter text-gray-300 sm:text-6xl'>
            Price plans
          </h3>
          <div className='mt-3 text-2xl font-normal text-white/40'>
            <p>
              We handle all your compliance requirements, allowing you to
              concentrate on expanding your business.
            </p>
          </div>
        </div>
        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {plans.map((item, idx) => (
            <div
              key={item.name}
              className={cn(
                'relative flex transform-gpu flex-col rounded-xl',
                'bg-white/5 backdrop-blur-md',
                'shadow-lg transition-all duration-300',
                'relative transform-gpu rounded-2xl border border-white/30 bg-white/5 p-6 shadow-xl backdrop-blur-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
                item.isMostPop && 'border-2 border-white/50',
                idx === plans.length - 1 && 'overflow-hidden'
              )}
            >
              {item.isMostPop ? (
                <span className='absolute -top-5 left-0 right-0 mx-auto w-auto max-w-[200px] animate-shimmer rounded-full border-2 border-white/30 bg-[linear-gradient(110deg,rgba(255,255,255,0.3),45%,rgba(255,255,255,0.6),55%,rgba(255,255,255,0.3))] bg-[length:200%_100%] px-3 py-2 text-center text-sm font-semibold text-white shadow-md [--shimmer-width:50%] lg:backdrop-blur-3xl'>
                  ✨ Most popular
                </span>
              ) : null}
              <div className='space-y-4 p-8'>
                <div
                  className={cn(
                    'space-y-4 border-b-2 border-white/10 pb-8',
                    idx === plans.length - 1 && 'relative z-10'
                  )}
                >
                  <span className='font-geist text-4xl font-black tracking-normal text-blue-300/50'>
                    {item.name}
                  </span>
                  <div className='text-3xl font-semibold text-gray-200'>
                    {typeof item.price === 'number' ? (
                      <NumberTicker
                        value={item.price}
                        type='currency'
                        delay={0.1}
                        className='text-3xl font-semibold text-gray-200'
                      />
                    ) : (
                      item.price
                    )}{' '}
                    <span className='text-xl font-normal text-gray-600'>
                      /mo
                    </span>
                  </div>
                  <p className='text-gray-400'>{item.desc}</p>
                  <button
                    className={cn(
                      'font-geist text-md w-full rounded-md px-4 py-2 text-center text-lg tracking-tighter',
                      'bg-white/10 text-white hover:bg-white/20',
                      'shadow-lg transition-all duration-300',
                      'border border-white/50',
                      'lg:backdrop-blur-md',
                      'hover:border-white/70',
                      'flex items-center justify-center gap-2'
                    )}
                  >
                    Get Started
                  </button>
                </div>
                <ul className='relative z-10 space-y-3'>
                  <li className='pb-2 font-medium text-gray-200'>
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem) => (
                    <li
                      key={`${item.name}-${featureItem}`}
                      className='flex items-center gap-5 text-gray-400'
                    >
                      <CheckIcon className='h-5 w-5 text-blue-300' />
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
