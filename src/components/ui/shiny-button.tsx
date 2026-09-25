import * as React from 'react'
import { cn } from '@/lib/utils'

interface ShinyButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}

const ShinyButton = React.forwardRef<HTMLAnchorElement, ShinyButtonProps>(
  ({ className, children = 'Shiny Day', ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 rounded-lg border-none bg-[linear-gradient(325deg,#b45309_0%,#fbbf24_55%,#b45309_90%)] bg-[length:280%_auto] bg-left-top px-5 py-2.5 text-base font-semibold text-white shadow-[0px_0px_20px_rgba(245,158,11,0.5),0px_5px_5px_-1px_rgba(180,83,9,0.25),inset_4px_4px_8px_rgba(251,191,36,0.5),inset_-4px_-4px_8px_rgba(180,83,9,0.35)] transition-[background-position,transform] duration-700 hover:scale-105 hover:bg-right-top focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-black sm:px-6 sm:py-3 sm:text-lg',
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)
ShinyButton.displayName = 'ShinyButton'

export default ShinyButton
