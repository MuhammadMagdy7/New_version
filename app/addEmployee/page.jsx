//app\addEmployee\page.jsx
"use client";

import { useSession } from "next-auth/react";
import FormUI from "../../components/Layout/FormUI";
import AccessDenied from "@/components/Layout/AccessDenied";

export default function AddProduct() {
  const { data: session } = useSession();
  if (!session) {
    return <AccessDenied />;
  }

  return (
    <div className="my-9">
      <div className="text-center">
        <h1 className="font-bold py-10 text-2xl">Add New Employee</h1>
      </div>
      <FormUI path="employees" />
    </div>
  );
}
