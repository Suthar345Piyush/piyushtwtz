import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";




export const metadata: Metadata = {
  title: "Piyush Suthar - Portfolio",
  description: "Personal portfolio of Piyush Suthar - Software Developer",
  keywords : ["portfolio" , "software engineer" , "web developement" , "react" , "react native" , "next.js"],
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased">

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
