import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-button text-white shadow-xs hover:bg-button/90",
        icon: "bg-primary text-text rounded-full",
        iconAndText: "bg-primary text-text rounded-full",
      },
      size: {
        default: "px-8 py-2",
        icon: "w-16 h-16 [&_svg]:w-8 [&_svg]:h-8",
        iconAndText: "h-16 px-4 py-2 [&_svg]:w-8 [&_svg]:h-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
