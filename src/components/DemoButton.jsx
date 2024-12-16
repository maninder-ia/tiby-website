'use client';

import { Button } from "./ui/button";

export default function DemoButton({ dark }) {
    const classes = dark ? "bg-white text-[#41228e] hover:bg-[#e6e6e6]": "bg-[#41228e] hover:bg-[#2e1865] text-white";
  return (
    <Button
      onClick={() => window.open('https://tally.so/r/31GR1p', '_blank')}
      className={classes}
    >
      Book a Demo
    </Button>
  );
}
