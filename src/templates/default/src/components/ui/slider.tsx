"use client";
// components/ui/slider.tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    {props.children}
  </SliderPrimitive.Root>
));

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Track
    ref={ref}
    className={cn(
      "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  />
));

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Range
    ref={ref}
    className={cn("absolute h-full bg-primary", className)}
    {...props}
  />
));

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Thumb
    ref={ref}
    className={cn("block h-5 w-5 rounded-full bg-primary", className)}
    {...props}
  />
));

Slider.displayName = SliderPrimitive.Root.displayName;
SliderTrack.displayName = SliderPrimitive.Track.displayName;
SliderRange.displayName = SliderPrimitive.Range.displayName;
SliderThumb.displayName = SliderPrimitive.Thumb.displayName;

export { Slider, SliderTrack, SliderRange, SliderThumb };
