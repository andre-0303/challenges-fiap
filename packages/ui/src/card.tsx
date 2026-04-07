import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", bordered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={props.role ?? undefined}
        className={`rounded-lg p-6 ${bordered ? "border border-white/10" : "bg-surface"} ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card, type CardProps };
