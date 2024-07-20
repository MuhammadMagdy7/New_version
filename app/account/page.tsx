"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const Page = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div>
      Page
      <Link
        className="block text-center text-blue-500 hover:underline mt-2"
        href="/register"
      >
        Register new accout
      </Link>
    </div>
  );
};

export default Page;
