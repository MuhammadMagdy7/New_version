import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Whatsapp from "@/components/Layout/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Version AVI",
  description:
    "Versionavi is a premier company specializing in the rental and sales of high-quality audio-visual equipment in Egypt. We offer comprehensive services including LED screens, sound systems, lighting, and photography/videography. With over 13 years of experience and a dedicated team, we ensure innovative and reliable solutions for all your event needs. Join us today and experience the Versionavi difference.",
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
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
          <Footer />
          <Whatsapp />
        </SessionProvider>
      </body>
    </html>
  );
}
