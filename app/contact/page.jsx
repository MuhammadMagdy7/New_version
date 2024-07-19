//app/contact/page.jsx
"use client"
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Layout/Spinner';

const ContactCom = dynamic(() => import("@/components/UI/Contect.jsx"), {
  loading: () => <Spinner />,
});

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <Suspense fallback={<Spinner />}>
        <ContactCom />
      </Suspense>
    </div>
  )
}

export default Contact;