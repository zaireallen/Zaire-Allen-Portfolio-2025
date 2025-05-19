"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { timelineData } from "@/lib/data/timeline";
import { ImageZoom } from "@/components/ui/kibo-ui/ImageZoom";

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans px-4 md:px-8 lg:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-5xl mx-auto pb-4">
        {/* Full-height vertical line - only on md+ */}
        <div className="absolute left-8 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-700 pointer-events-none z-0 hidden md:block" />
        {timelineData.map((item, index) => {
          return (
            <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
              {/* Title section */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                {/* Timeline circle - only on md+ */}
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center hidden md:flex">
                  <div className="h-4 w-4 rounded-full bg-neutral-400 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.title}
                </h3>
              </div>

              {/* Content section */}
              <div className="relative pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-500 dark:text-slate-100 ">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl max-w-4xl pb-4">
                    {item.subtitle}
                  </h1>
                )}

                {/* Timeline entry images (responsive grid) */}
                {item.images && item.images.length > 0 && (
                  <div
                    className={item.images.length === 1
                      ? "mb-4"
                      : item.images.length === 2
                        ? "grid grid-cols-2 gap-4 mb-4"
                        : "grid grid-cols-2 gap-4 mb-4"}
                  >
                    {item.images.map((img, idx) => (
                      <ImageZoom key={idx}>
                        <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                          <img
                            src={img.src}
                            alt={`${item.title} image ${idx + 1}`}
                            className={`object-cover w-full h-full${img.objectPosition && ["top", "center", "bottom", "left", "right"].includes(img.objectPosition) ? ` object-${img.objectPosition}` : ""}`}
                            style={img.objectPosition && !["top", "center", "bottom", "left", "right"].includes(img.objectPosition) ? { objectPosition: img.objectPosition } : undefined} />
                        </div>
                      </ImageZoom>
                    ))}
                  </div>
                )}

                {/* Timeline entry content as bullet points */}
                <ul className="text-slate-700 dark:text-slate-100 font-light text-lg max-w-4xl py-4 space-y-2">
                  {item.content.map((point, index) => (
                    <p key={index} className="mb-4">
                      {point}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-4do00 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t  from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
