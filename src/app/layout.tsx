import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MERS - Empowerment for Women",
  description: "Dedicated to Fighting Period Poverty Globally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
