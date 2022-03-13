import React from "react";

interface Heading {
  variation?: string;
  className?: string;
  children: React.ReactChild;
}

export function Heading({ className, variation, children }: Heading) {
  switch (variation) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    default:
      return <p className={className}>{children}</p>;
  }
}
