import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gorillas UPC",
  description: "Rugby Team Gorillas UPC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </head>
			<body className="w-screen h-screen overflow-x-hidden">{children}
			</body>
		</html>
  );
}
