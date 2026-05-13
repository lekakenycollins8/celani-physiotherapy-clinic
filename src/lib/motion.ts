import { motion, Variants } from "framer-motion";

// Motion timing constants based on design system
export const MOTION_DURATION = {
  fast: 0.4,
  normal: 0.5,
  slow: 0.7,
} as const;

export const MOTION_EASING = {
  easeOut: [0.25, 0.1, 0.25, 1.0],
} as const;

// Fade up animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.normal,
      ease: MOTION_EASING.easeOut,
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Scale animation for images
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: MOTION_DURATION.slow,
      ease: MOTION_EASING.easeOut,
    },
  },
};

// Hover animation wrapper
export function withHoverAnimation(Component: React.ElementType) {
  const MotionComponent = motion(Component);
  
  return MotionComponent;
}
