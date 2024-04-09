import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from '@/ui/dashboard/sidebar/sidebar'
import Navbar from '@/ui/dashboard/navbar/navbar'




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div><Sidebar /></div>
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    </div>
  );
}
