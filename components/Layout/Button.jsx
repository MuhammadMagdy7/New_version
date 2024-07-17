import Link from "next/link";
import React from "react";

export const ButtonPill = ({text, className, link=''}) => {
  return (
<Link
  className={`inline-block rounded-lg border border-current px-8 py-3 text-sm font-medium text-secondaryColor transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-red-300 ${className}`}
  href={link}
>
  {text}
</Link>
  );
};

export const ButtonBase = ({text, className, link=''}) => {
  return (
<Link
  className={`inline-block rounded-lg bg-secondaryColor px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-300 ${className}`}
  href={link}>
    
{text}
</Link>
  );
};
