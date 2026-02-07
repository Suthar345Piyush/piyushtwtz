import type { Metadata } from "next";

import "./globals.css";




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
    <html lang="en">
      <body className="antialiased">

        {children}
    
      </body>
    </html>
  );
}
