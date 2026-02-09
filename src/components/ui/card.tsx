import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-2xl text-card-foreground transition-all duration-500 ease-out-expo",
  {
    variants: {
      variant: {
        default:
          "bg-paper-elevated dark:bg-gray-900 border border-ink/5 dark:border-white/5 shadow-sm hover:shadow-lg hover:-translate-y-1",
        glass:
          "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-glass hover:bg-white/85 dark:hover:bg-gray-900/85 hover:shadow-xl hover:-translate-y-1",
        elevated:
          "bg-paper-elevated dark:bg-gray-800 border border-ink/5 dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1",
        branded:
          "bg-paper-elevated dark:bg-gray-900 border border-ink/5 dark:border-white/5 shadow-sm hover:shadow-lg hover:shadow-brand/10 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-brand before:via-brand-orange-light before:to-brand before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400",
        outline:
          "bg-transparent border-2 border-ink/10 dark:border-white/10 hover:border-brand/30 dark:hover:border-brand/30",
        ghost:
          "bg-transparent border-0 shadow-none hover:bg-ink/5 dark:hover:bg-white/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-tight tracking-tight text-ink dark:text-white",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-ink-secondary dark:text-gray-400", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
