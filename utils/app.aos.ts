"use client"; // Required for App Router if this is used in a client component

import { useEffect } from "react";
import AOS from "aos";

const UseAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Longer animation duration
      easing: "ease-in-out", // Custom easing function
      once: false, // Animation triggers on every scroll
      mirror: true, // Animates elements out when scrolling back up
    });

    // Refresh AOS when the component updates (optional)
    AOS.refresh();

    return () => {
      // Cleanup (optional, if needed)
      AOS.refreshHard();
    };
  }, []);
};

export default UseAOS;
