import { motion } from "framer-motion";

export const CardHover = {
  whileHover: {
    scale: 1.1,
  },
  transition: {
    duration: 2,
    ease: "easeOut",
  },
};

export const CardLoad = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },

  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
};

export const CardLoadAll = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      staggerChildren: 0.6,
      when: "beforeChildren",
    },
  },
  hidden: {
    y: 100,
    opacity: 1,
  },

  exit: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
};
