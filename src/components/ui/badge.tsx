import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-all duration-300 ease-out-expo focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-brand to-brand-orange-dark text-white shadow-sm hover:shadow-brand hover:-translate-y-0.5",
        secondary:
          "border-ink/10 dark:border-white/10 bg-paper-secondary dark:bg-gray-800 text-ink dark:text-white hover:bg-ink/5 dark:hover:bg-white/10",
        destructive:
          "border-transparent bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20",
        outline:
          "border-brand/30 dark:border-brand/40 text-brand bg-transparent hover:bg-brand/5 dark:hover:bg-brand/10",
        success:
          "border-transparent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20",
        glass:
          "border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/10 backdrop-blur-md text-ink dark:text-white hover:bg-white/70 dark:hover:bg-white/20",
        brand:
          "border-transparent bg-brand/10 text-brand hover:bg-brand/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
