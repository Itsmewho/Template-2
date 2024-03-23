/** @format */

import gsap from 'gsap';

export const Loader = () => {
  return gsap.to('.page-wrapper', {
    opacity: 0,
    duration: 0.5,
    ease: 'ease-out',
  });
};
