import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moryavardhan Singh Khichi — Portfolio",
  description:
    "Portfolio of Moryavardhan Singh Khichi, Full-Stack Web Developer specialising in React, Next.js, Node.js and modern web technologies.",
  keywords: ["web developer", "portfolio", "React", "Next.js", "full-stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
