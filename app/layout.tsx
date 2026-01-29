import type { Metadata } from "next";
import { Crimson_Text, Nunito } from "next/font/google";
import "./globals.css";

const ubuntu = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
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
        className={`${ubuntu.className} ${ubuntu.variable} ${crimsonText.variable} min-h-screen flex flex-col antialiased bg-black text-white`}
      >
        {children}
        <p className="mx-auto py-5 mt-auto font-normal text-[12px]">
          2026 @ Artem Polozov
        </p>
      </body>
    </html>
  );
}
