//app\addٍProduct\page.jsx
"use client";

import { useSession } from "next-auth/react";
import FormUI from "../../components/Layout/FormUI";

export default function AddProduct() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div className="my-9">
      <div className="text-center">
        <h1 className="font-bold py-10 text-2xl">Add New Product</h1>
      </div>
      <FormUI path="products" />
    </div>
  );
}
