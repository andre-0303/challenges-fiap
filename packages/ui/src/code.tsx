import { HTMLAttributes, forwardRef } from "react";

const Code = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={`rounded bg-white/10 px-[0.3em] py-[0.2em] text-sm font-mono ${className}`}
        {...props}
      />
    );
  }
);

Code.displayName = "Code";

export { Code };
