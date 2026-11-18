"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type RevealImageProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Seconds to wait before revealing (used to stagger cards in a row) */
  delay?: number;
  priority?: boolean;
};

const CURTAIN_EASE = [0.76, 0, 0.24, 1] as const;
const SETTLE_EASE = [0.16, 1, 0.3, 1] as const;

export default function RevealImage({
  src,
  alt,
  sizes,
  delay = 0,
  priority = false,
}: RevealImageProps) {
  const reduceMotion = useReducedMotion();

  // Hover zoom layer, shared by both versions
  const image = (
    <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );

  if (reduceMotion) {
    return <div className="absolute inset-0">{image}</div>;
  }

  return (
    // Curtain: uncovers the photo from bottom to top
    <motion.div
      className="absolute inset-0"
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: CURTAIN_EASE, delay }}
    >
      {/* Settle: photo eases from a slight zoom to its normal size */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.6, ease: SETTLE_EASE, delay }}
      >
        {image}
      </motion.div>
    </motion.div>
  );
}