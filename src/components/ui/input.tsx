import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-gray-900 px-4 py-2.5 text-base text-ink dark:text-white shadow-sm transition-all duration-300 ease-out-expo file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-ink dark:file:text-white placeholder:text-ink-muted dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:border-brand/50 hover:border-ink/20 dark:hover:border-white/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
