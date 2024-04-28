import { motion } from "framer-motion";
import React from "react";

interface Props {}

export const Header = (props: Props) => {
  return (
    <div className="flex bg-[rgba(0,0,0,0.3)] backdrop-blur-lg text-white p-6 justify-center rounded-b-full sticky top-0 z-10 w-full">
      <nav className="flex gap-4">
        <button className="font-bold p-2 rounded-lg border-none hover:bg-neutral-800 transition-all">
          ABOUT ME
        </button>
        <button className="font-bold p-2 rounded-lg border-none hover:bg-neutral-800 transition-all">
          STACKS
        </button>
        <button className="font-bold p-2 rounded-lg border-none hover:bg-neutral-800 transition-all">
          CONTACT
        </button>
      </nav>
    </div>
  );
};
