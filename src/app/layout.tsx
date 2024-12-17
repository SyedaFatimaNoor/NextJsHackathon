import BackToTop from "@/components/BackToTop";
import FlareCursor from "@/components/FlareCusror";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {  
  title: "Avion - Your One-Stop E-Commerce Shop",  
  description: "Discover a wide range of premium products at Avion. Enjoy seamless shopping, competitive prices, and exceptional customer service.",  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        {children}
        <FlareCursor />
        <BackToTop />
        </body>
    </html>
  );
}