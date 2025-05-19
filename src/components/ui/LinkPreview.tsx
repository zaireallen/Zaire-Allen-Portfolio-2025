"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import { encode } from "qss";
import React from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;      // default 200
  height?: number;     // default 125
  quality?: number;    // default 50
  href?: string;
  target?: string;
  rel?: string;
} & (
  | { isStatic: true;  imageSrc: string } // use your own JPG/PNG
  | { isStatic?: false; imageSrc?: never } // auto-gen via Microlink
);

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  isStatic = false,
  imageSrc = "",
  href,
  target,
  rel,
}: LinkPreviewProps) => {
  // build Microlink screenshot URL if you’re not supplying a static image
  const src = isStatic
    ? imageSrc
    : `https://api.microlink.io/?${encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": width * 3,
        "viewport.height": height * 3,
        quality,
      })}`;

  const [open, setOpen] = React.useState(false);
  const x = useMotionValue(0);
  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  return (
    <a
      href={href || url}
      target={target}
      rel={rel}
      className={cn("transition-colors duration-200 hover:text-rose-600 dark:hover:text-rose-400 hover:underline underline", className)}
    >
      <HoverCard.Root openDelay={50} closeDelay={100} onOpenChange={setOpen}>
        <HoverCard.Trigger
          onMouseMove={(e) => {
            const { left, width } = e.currentTarget.getBoundingClientRect();
            x.set(((e.clientX - left) - width / 2) / 2);
          }}
          asChild
        >
          <span className="underline">{children}</span>
        </HoverCard.Trigger>

        <HoverCard.Content side="top" align="center" sideOffset={10}>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ x: translateX }}
                className="shadow-xl rounded-xl"
              >
                <img
                  src={src}
                  width={width}
                  height={height}
                  className="rounded-lg"
                  alt="preview"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCard.Content>
      </HoverCard.Root>
    </a>
  );
};