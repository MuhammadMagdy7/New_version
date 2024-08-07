// app/account/page.tsx
"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import ChangePasswordForm from "@/components/UI/ChangePassword";

const AccountPage = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="mb-6">
        <ChangePasswordForm email={session?.user?.email} />
      </div>

      {session?.user?.admin ? (<Link
        className="block text-center text-blue-500 hover:underline mt-2"
        href="/register"
      >
        Register new account
      </Link>) :("") }
      
    </div>
  );
};

export default AccountPage;
