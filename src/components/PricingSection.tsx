'use client'

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { CheckIcon } from '@radix-ui/react-icons'

const plans = [
  {
    name: "SUBSCRIPTION 1",
    desc: "Basic package for small trucking businesses.",
    price: 500,
    isMostPop: false,
    features: ["HR / Hiring", "Safety", "Insurance", "Equipment"],
  },
  {
    name: "SUBSCRIPTION 2",
    desc: "Advanced package for growing companies.",
    price: 1000,
    isMostPop: true,
    features: ["HR / Hiring", "Safety", "Insurance", "Equipment", "24/7 Support"],
  },
  {
    name: "SUBSCRIPTION 3",
    desc: "Premium package for large trucking fleets.",
    price: "Custom",
    isMostPop: false,
    features: ["All features from Subscription 2", "Additional customized solutions", "Dedicated account manager", "Priority support"],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-14 relative bg-[#18344a] overflow-hidden">
      {/* Grid effect background */}
      <div className="absolute inset-0 -z-1 h-full w-full bg-transparent opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] backdrop-blur-[1px]"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 min-h-screen">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 font-geist tracking-tighter text-3xl font-semibold sm:text-5xl"
          >
            Price plans
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-xl text-white/40 font-geist font-normal text-2xl"
          >
            <p>
              We handle all your compliance requirements, allowing you to concentrate on expanding your business.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3"
        >
          {plans.map((item, idx) => (
            <div
              key={item.name}
              className={cn(
                "relative flex flex-col rounded-xl mt-6 sm:mt-0 transform-gpu",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "transition-all duration-300 shadow-lg",
                idx === plans.length - 1 && "overflow-hidden"
              )}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border border-white/40 shadow-md bg-[#18344a]/90 text-white/90 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(24,52,74,0.3),rgba(255,255,255,0))] animate-background-shine text-center text-sm font-semibold">
                  Most popular
                </span>
              ) : null}
              <div className="p-8 space-y-4">
                <div className={cn(
                  "space-y-4 border-b border-white/10 pb-8",
                  idx === plans.length - 1 && "relative z-10"
                )}>
                  <span className="text-3xl text-blue-300/50 font-normal font-geist tracking-tight">{item.name}</span>
                  <div className="text-gray-200 text-3xl font-semibold">
                    {typeof item.price === 'number' ? `$${item.price}` : item.price}{" "}
                    <span className="text-xl text-gray-600 font-normal">/mo</span>
                  </div>
                  <p className="text-gray-400">{item.desc}</p>
                  <button className={cn(
                    "w-full font-geist tracking-tighter text-center rounded-md text-md px-4 py-2 text-lg",
                    "bg-white/10 hover:bg-white/20 text-white",
                    "transition-all duration-300 shadow-lg",
                    "backdrop-blur-md border border-white/50",
                    "hover:border-white/70",
                    "flex items-center justify-center gap-2"
                  )}>
                    Get Started
                  </button>
                </div>
                <ul className="space-y-3 relative z-10">
                  <li className="pb-2 text-gray-200 font-medium">
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem) => (
                    <li key={`${item.name}-${featureItem}`} className="flex items-center gap-5 text-gray-400">
                      <CheckIcon className="w-5 h-5 text-blue-300"/>
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
