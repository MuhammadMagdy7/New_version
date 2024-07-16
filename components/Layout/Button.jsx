import Link from "next/link";
import React from "react";

export const ButtonPill = ({text, className, link=''}) => {
  return (
<Link
  className={`inline-block rounded-lg border border-current px-8 py-3 text-sm font-medium text-primaryColor transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-blue-300 ${className}`}
  href={link}
>
  {text}
</Link>
  );
};

export const ButtonBase = ({text, className}) => {
  return (
<Link
  className={`inline-block rounded-lg bg-primaryColor px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-blue-300 ${className}`}
  href="/"
>
{text}
</Link>
  );
};
