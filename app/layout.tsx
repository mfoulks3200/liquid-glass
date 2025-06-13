import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liquid Glass",
  description: "Liquid Glass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
