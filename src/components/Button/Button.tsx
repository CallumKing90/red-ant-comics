import React from "react";

interface ButtonProps {
  className?: string;
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  className,
  children,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button className={className} onClick={onClick} role="button">
      {children}
    </button>
  );
}
