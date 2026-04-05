import { useState, useEffect } from "react";

export const useShouldAnimate = (breakpoint = 768) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      // Włączamy animacje tylko powyżej breakpointu (Desktop)
      setShouldAnimate(window.innerWidth >= breakpoint);
    };

    // Sprawdzamy przy montowaniu
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return shouldAnimate;
};
