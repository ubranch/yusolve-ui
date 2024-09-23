"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
  bgColor = "bg-[#18344a]",
}: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className,
        bgColor
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 pt-20 sm:pt-32 md:pt-10 lg:pt-20">
        <motion.div
          initial={{ opacity: 0.5, width: "10%" }}
          whileInView={{ opacity: 1, width: "85%" }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[80%] max-w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            '--initial-width': '10%',
            '--final-width': '100%',
          } as React.CSSProperties}
        >
          <div className={`absolute w-[100%] left-0 ${bgColor} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
          <div className={`absolute w-[20%] h-[100%] left-0 ${bgColor} bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "10%" }}
          whileInView={{ opacity: 1, width: "85%" }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[80%] max-w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            '--initial-width': '10%',
            '--final-width': '85%',
          } as React.CSSProperties}
        >
          <div className={`absolute w-[20%] h-[100%] right-0 ${bgColor} bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]`} />
          <div className={`absolute w-[100%] right-0 ${bgColor} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
        </motion.div>

        <div className={`absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 ${bgColor} blur-2xl`}></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[80%] max-w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        <motion.div
          initial={{ width: "10%" }}
          whileInView={{ width: "85%" }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 max-w-[16rem] -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ width: "10%" }}
          whileInView={{ width: "85%" }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 max-w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>

        <div className={`absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] ${bgColor}`}></div>
      </div>

      <div className="relative z-50 flex -translate-y-28 flex-col items-center pt-20 w-full">
        {children}
      </div>
    </div>
  );
};
