import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";

import ModalProvider from "@/components/modal/ModalProvider";
import { Toaster } from "@/components/ui/Toaster";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <Toaster />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
