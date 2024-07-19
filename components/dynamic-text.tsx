"use client";

import { Typewriter } from "react-simple-typewriter";

interface Prop {
  words: string[];
}
export default function DynamicText({ words }: Prop) {
  return (
    <Typewriter
      words={words}
      loop={true}
      cursor
      cursorStyle="❘"
      typeSpeed={120}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
}
