"use client";
import React, { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "~/utils/cn";
//hi
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.7rem)] -translate-x-1/2 transform">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative h-10 rounded-full px-[10px] ">
        <div className="overflow-hidden sticky rounded-full h-[80px] mb-[-75px]">
      <span className="absolute overflow-hidden inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      </div>
      <nav
        onMouseLeave={() => setActive(null)} // resets the state
        className="boder shadow-input relative flex justify-around space-x-3 rounded-full border-transparent bg-white px-5 py-6 dark:border-white/[0.2] dark:bg-black "
      >
        {children}
      </nav>
    </div>
  );
};

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "dark fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Query">
          <div className="flex flex-col text-white space-y-4 text-sm">
            <div>Query easily with our search tool</div>
          </div>
        </MenuItem>
        <Link href="/Visualizations">
        <MenuItem setActive={setActive} active={active} item="Visualizations">
          <div className="flex flex-col text-white space-y-4 text-sm">
            <div>Cool data visualizations</div>
          </div>
        </MenuItem>
        </Link>
        <Link href='/AboutUs'>
        <MenuItem setActive={setActive} active={active} item="About us">
          <div className="flex flex-col text-white space-y-4 text-sm">
            <div>Hello ther! :D</div>
          </div>
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <Link
      href={""}
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-200 "
    >
      {children}
    </Link>
  );
};
