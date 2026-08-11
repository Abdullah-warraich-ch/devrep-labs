"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-primary/30 bg-primary px-6 py-3 text-center font-semibold tracking-wide text-black transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-black transition-all duration-300 group-hover:scale-[100.0]"></div>
          <span className="inline-block font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute inset-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white font-semibold tracking-wide opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight className="size-4 text-primary" />
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

