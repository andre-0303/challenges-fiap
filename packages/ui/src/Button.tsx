import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border border-[#201615] bg-[#ff7f7a] text-[#2f1a19] shadow-[0_10px_30px_rgba(255,127,122,0.12)] hover:bg-[#ff908b] active:scale-[0.98]",
  secondary:
    "border border-fiap-red/30 text-fiap-red hover:bg-fiap-red/10 transition-all",
  ghost:
    "border border-white/[0.06] bg-[#111111] text-white hover:border-white/10 hover:bg-[#171717]",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "min-h-10 px-4 text-xs font-semibold tracking-[-0.02em]",
  md: "min-h-12 px-5 text-sm font-semibold tracking-[-0.02em]",
  lg: "min-h-[52px] px-6 text-[15px] font-semibold tracking-[-0.02em]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fiap-red disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, type ButtonProps };
