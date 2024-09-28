'use client';
import React from 'react';
import Header from '@/components/Header';
import SolutionPageHero from '@/components/SolutionPageHero';
import { Timeline } from '@/components/ui/timeline';
import { ConsultationModalTrigger } from '@/components/ConsultationModalTrigger';
import SectionContainer from '@/components/SectionContainer';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'framer-motion';

const timelineData = [
  {
    id: '1',
    title: 'Overweight Permits',
    content: (
      <p>
        If your truck-trailer-load combination exceeds the federal gross vehicle
        weight limit of 80,000 lbs., you are officially in the &ldquo;overweight&rdquo;
        category. Beyond the weight, the load must also be non-divisible, i.e.,
        you cannot reduce its weight within an eight-hour period without causing
        damage to it. Our team at YUSOLVE will help you determine if your load
        falls into the overweight category and also guide you through the permit
        process, which varies from state to state. We will handle the paperwork
        with utmost personal attention, coordinate with state agencies, and
        provide you with pre-approved routes that comply with all legal
        mandates.
      </p>
    ),
  },
  {
    id: '2',
    title: 'Oversized Permits',
    content: (
      <p>
        A freight load is considered oversized if it surpasses standard
        dimensions: 8.5 feet in width, 13.5 feet in height, or 53 feet in
        length. That said, each state has its own set of regulations regarding
        oversized permits. But do not worry, we will check the dimensions and
        gross weight of your load to identify the type of permit you will need.
        Some states require pilot cars for loads exceeding certain dimensions,
        while others may have restricted travel times. We will handle all these
        details and help you plan the most efficient route to avoid low bridges
        or narrow roads.
      </p>
    ),
  },
  {
    id: '3',
    title: 'Temporary Fuel Permits (IFTA)',
    content: (
      <p>
        Every carrier that operates a truck across state lines knows about the
        International Fuel Tax Agreement (IFTA). If your trucking business is
        based in one of the IFTA member states and you drive through other
        member states, you need to be IFTA-licensed. Otherwise, you will need to
        buy temporary permits for fueling for each state you pass through. If
        you operate one or more vehicles that meet the following guidelines and
        you drive in multiple IFTA member states, you need to apply for IFTA
        credentials: Two axles and weighs over 26,000 pounds Three or more
        axles, no matter the weight Combined weight over 26,000 pounds when used
        with a trailer
      </p>
    ),
  },
  {
    id: '4',
    title: 'Temporary Trip Permits (IRP)',
    content: (
      <p>
        When your trucks cross state lines, they have to comply with the states&apos;
        regulations. This is why the International Registration Plan (IRP) was
        created; it is a pact between the U.S., Canada, and the District of
        Columbia that lets commercial vehicles use a single license plate to
        travel through multiple jurisdictions. However, if your truck is not
        registered under IRP and you need to operate outside your home state,
        you will need a temporary IRP trip permit for that specific journey. It
        will allow your vehicle to operate in that jurisdiction for a limited
        time. The duration of the permit can be anywhere from 72 hours to 10
        days, depending on the state or province.
      </p>
    ),
  },
  {
    id: '5',
    title: 'Special Permits',
    content: (
      <p>
        Trucking is not a one-size-fits-all industry, and neither are the
        permits you will need. In California, for example, you need to comply
        with California&apos;s Biennial Inspection of Terminals (BIT) Program. If you
        are operating in New York, you will need an H or Z endorsement for
        hazardous materials. You might need an &ldquo;Overplanting Permit&rdquo; in Florida
        if you are transporting extra-heavy loads of agricultural products
        during harvest season. These are not every day permits, but they are
        important for trucking companies. If you move across state lines, you
        may also need to register for the Unified Carrier Registration (UCR) – a
        mandatory annual program for commercial carriers – and pay fees based on
        your fleet size. Our team is well-versed in the ins and outs of these
        special trucking permits so you are always in compliance. Whether you
        are hauling high-risk materials, oversized equipment, or operating in
        unique conditions, we at YUSOLVE have the expertise to get you the right
        permit, fast.
      </p>
    ),
  },
  {
    id: '6',
    title: 'The YUSOLVE Difference: Get Your Permit With Us',
    content: (
      <p>
        At YUSOLVE Group, we have honed our methods with over two decades of
        experience. We will provide you with a dedicated permitting manager to
        help you with anything you need. You can also visit one of our offices
        to discuss your issues with an experienced permitting manager. We are
        the go-to experts for all county, city, and state permits you will ever
        need. Interstate transportation regulations are always changing, and we
        stay on top of them so you do not have to. Our goal goes beyond
        compliance – we want to optimize your routes and operations for maximum
        efficiency.Our YUSOLVEHub Client Portal and YUSOLVE2Go Mobile App make
        it extremely easy to request permits online. But if you have any
        questions, our experienced agents are here to guide you through the
        process, step-by-step. Once you have made your first order, we save all
        your details to make future orders even faster. Trust YUSOLVE to keep
        you on the right side of all federal and state regulations. To learn
        more, give us a call at 1-866-931-7990 or contact us online.
      </p>
    ),
  },
];

export default function NewPage() {
  return (
    <main className='flex min-h-screen flex-col bg-[#18344a]'>
      <Header />

      <SolutionPageHero
        title='Trucking Permits'
        description='Our experts take care of licensing, permitting, and tax reporting, while you focus on growing your business'
      />

      <Timeline data={timelineData} />

      <section className='relative bg-[#18344a]'>
        <LampContainer className='md:pt-30 pb-20 pt-40 sm:pt-44 md:pb-40'>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: -10 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className='mx-auto mt-0 max-w-[90%] bg-gradient-to-br from-slate-100 to-cyan-600 bg-clip-text pb-4 text-center text-4xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl'
          >
            Ready to Optimize <br /> Your Trucking Business?
          </motion.h2>
        </LampContainer>

        <SectionContainer className='relative z-10 pb-20 sm:pb-24 md:pb-28 lg:pb-32'>
          <div className='-mt-40 w-full text-center sm:-mt-40 md:-mt-60 lg:-mt-64'>
            <p className='mb-8 text-lg text-white/70 sm:text-xl md:text-2xl'>
              Take the first step towards a more efficient and profitable
              operation with YUSOLVE.
            </p>
            <ConsultationModalTrigger />
          </div>
        </SectionContainer>
      </section>
    </main>
  );
}
