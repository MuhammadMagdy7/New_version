//app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google"; // استيراد الخط lora مع الأوزان المحددة
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Whatsapp from "@/components/Layout/Whatsapp";

// تحديد الأوزان المطلوبة للخط Roboto
const lora = Lora({  
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',  
  weight: [ "600", "400", "500", "700"], // تحديد الأوزان هنا
});

export const metadata: Metadata = {

  title: "Home | Version AVI - Audio-Visual Excellence in Egypt",
  description: "Versionavi offers top-quality audio-visual equipment rental and sales in Egypt. Specializing in LED screens, sound systems, lighting, and photography/videography for over 13 years.",
  keywords: "audio-visual equipment, LED screens, sound systems, lighting, event services, Egypt",
  openGraph: {
    title: "Version AVI - Premier Audio-Visual Equipment Rental and Sales",
    description: "High-quality audio-visual solutions for your events in Egypt.",
    images: [
      {
        url: "/img/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Version AVI Overview",
      },
    ],
  },
  icons: {
    icon: "/img/logo.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo.ico" sizes="any" />
      </head>
      <body className={`${lora.variable} font-sans`}> 
        <SessionProvider session={session}>
          <Navbar />
          <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            {children}
          </div>
          <Footer />
          <Whatsapp />
        </SessionProvider>
      </body>
    </html>
  );
}
