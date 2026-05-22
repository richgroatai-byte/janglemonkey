import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JangleMonkey — Simple tools for real moments",
  description:
    "JangleMonkey builds web apps that do one thing well. Simple, viral, free to use.",
  metadataBase: new URL("https://janglemonkey.com"),
  openGraph: {
    title: "JangleMonkey — Simple tools for real moments",
    description:
      "JangleMonkey builds web apps that do one thing well. Simple, viral, free to use.",
    url: "https://janglemonkey.com",
    siteName: "JangleMonkey",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JangleMonkey — Simple tools for real moments",
    description: "Simple web apps that do one thing well.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}
