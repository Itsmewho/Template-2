/** @format */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import React from 'react';

export default function Megnet({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      const xTo = gsap.quickTo(ref.current, 'x', {
        duration: 3,
        ease: 'elastic.out(3, 2.8)',
      });
      const yTo = gsap.quickTo(ref.current, 'y', {
        duration: 3,
        ease: 'elastic.out(3, 2.8)',
      });

      const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
          ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
      };

      const mouseLeave = (e) => {
        xTo(0);
        yTo(0);
      };

      ref.current?.addEventListener('mousemove', mouseMove);
      ref.current?.addEventListener('mouseleave', mouseLeave);

      return () => {
        ref.current?.removeEventListener('mousemove', mouseMove);
        ref.current?.removeEventListener('mouseleave', mouseLeave);
      };
    }
  }, []);

  return React.cloneElement(children, { ref });
}
