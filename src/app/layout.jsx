import React from "react";
import { Poppins } from "next/font/google"


import "./globals.css"

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  });

const metadata = {
  title: "Portofolio Raka",
  description: "Deskripsi Aplikasi",
};

function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}> 
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content={metadata.description} />
      <title>{metadata.title}</title>
      <link rel="icon" href="/vercel.svg" />
    </head>
      <body className="">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
