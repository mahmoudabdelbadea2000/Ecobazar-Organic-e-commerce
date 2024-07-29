import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2 py-[3px] text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white border-transparent",
  {
    variants: {
      variant: {
        default: "bg-[#2388FF]",
        secondary: "bg-warning",
        destructive: "bg-danger",
        outline: "bg-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
