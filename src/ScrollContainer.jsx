import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import the styles

const ScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      getSpeed: true,
      getDirection: true,
      multiplier: 0.4, // Slows down the scroll speed
      lerp: 0.08, // Adjust easing
    });

    console.log('Locomotive Scroll initialized');

    return () => {
      if (scroll) {
        scroll.destroy();
        console.log('Locomotive Scroll destroyed');
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollContainer;
