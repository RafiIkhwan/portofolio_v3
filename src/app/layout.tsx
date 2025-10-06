import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Rafi Ikhwan Purnama Site",
  description: "Portfolio of Rafi Ikhwan Purnama",
  icons: "/img/LogoWithoutName.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lora.variable} antialiased bg-gradient-to-br from-lightest-gray to-light-gray selection:bg-white selection:bg-opacity-20 relative min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
