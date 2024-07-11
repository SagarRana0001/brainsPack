"use client";
import { useState, useEffect, useRef } from "react";
const AnimatedCounter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  useEffect(() => {
    let start = 0;
    const increment = endValue / ((duration / 1000) * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(timer);
        start = endValue;
      }
      setCount(Math.ceil(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [endValue, duration]);
  return (
    <div ref={countRef} className="text-center text-4xl font-bold">
      <span className="mb-2 inline-flex  bg-green-300  bg-clip-text font-semibold text-transparent">
        {count}
      </span>
      <span className="mb-2 inline-flex  bg-green-300  bg-clip-text font-semibold text-transparent">
        k+
      </span>
    </div>
  );
};
export default AnimatedCounter;
