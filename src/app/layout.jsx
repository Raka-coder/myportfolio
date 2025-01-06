import React from "react"
import { Poppins } from "next/font/google"
import LenisScroll from "@/components/Scrolls/LenisScroll"

import "./globals.css"

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  });

const metadata = {
  description: "Portofolio Raka",
};

function RootLayout({ children }) {
  
  return (
    <html lang="en" className={poppins.className}> 
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content={metadata.description} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </head>
      <body className="">
        <LenisScroll>
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}

export default RootLayout;
