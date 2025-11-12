import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${ubuntu.className} ${ubuntu.variable} min-h-screen flex flex-col antialiased bg-black text-white`}
      >
        {children}
        <p className="mx-auto py-5 mt-auto text-[12px]">2025 @ Artem Polozov</p>
      </body>
    </html>
  );
}
