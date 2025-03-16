import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const loraSans = Lora({
  variable: "--font-lora-sans",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Rafi Ikhwan Purnama | Portfolio",
  description: "Portfolio of Rafi Ikhwan Purnama, student from SMKN 1 Cimahi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${loraSans.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
