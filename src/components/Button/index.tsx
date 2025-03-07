import React, { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "secondary" | "danger";
type IconPosition = "left" | "right";
type TooltipPosition = "top" | "bottom" | "left" | "right";

interface ButtonProps {
  label: string;
  size?: ButtonSize;
  background?: ButtonColor;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  onClick?: () => void;
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: "_self" | "_blank";
}

const buttonSizes: Record<ButtonSize, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const buttonColors: Record<ButtonColor, string> = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const tooltipPositions: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  background = "primary",
  icon: Icon,
  iconPosition = "left",
  onClick,
  tooltip,
  tooltipPosition = "top",
  disabled = false,
  className = "",
  href,
  target = "_self",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const buttonClass = `
        inline-flex items-center justify-center relative cursor-pointer
        ${buttonSizes[size]} 
        ${buttonColors[background]} 
        rounded-lg transition duration-300 ease-in-out
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
    `;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} className="mr-2" />}
      <span>{label}</span>
      {Icon && iconPosition === "right" && <Icon size={18} className="ml-2" />}
    </>
  );

  return (
    <div
      className="inline-block relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {href ? (
        <Link href={href} target={target} className={buttonClass}>
          {content}
        </Link>
      ) : (
        <button
          type="button"
          className={buttonClass}
          onClick={onClick}
          disabled={disabled}
        >
          {content}
        </button>
      )}

      {tooltip && showTooltip && (
        <div
          className={`absolute whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 z-50 ${tooltipPositions[tooltipPosition]}`}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default Button;
