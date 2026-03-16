import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import {JetBrains_Mono} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
   subsets : ["latin"],
   weight : ["400" , "500" , "600" , "700"],
   variable : "--font-jetbrains-mono",
});


export const metadata: Metadata = {
  title: "Piyush Suthar - Portfolio",
  description: "Personal portfolio of Piyush Suthar - Software Developer",
  keywords: ["portfolio", "software engineer", "web developement", "react", "react native", "next.js"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}