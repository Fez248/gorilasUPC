"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function InitAOS() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
    });
  }, []); // Empty dependency array ensures this runs only once on mount
}

export default InitAOS;
