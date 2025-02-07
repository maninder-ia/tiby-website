'use client';

import { Button } from "./ui/button";

export default function DemoButton({ dark }) {
  const baseClasses = "font-medium px-6 py-2.5 rounded-full transition-all duration-200 transform hover:scale-105";
  const classes = dark
    ? `${baseClasses} bg-white text-[#41228e] hover:bg-white/90 hover:shadow-lg`
    : `${baseClasses} bg-[#6d44d2] text-white hover:bg-[#542cb7] hover:shadow-lg`;

  return (
    <Button
      onClick={() => window.open('https://tally.so/r/31GR1p', '_blank')}
      className={classes}
    >
      Book a Demo
    </Button>
  );
}
