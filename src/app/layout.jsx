import React from "react";
import { Poppins } from "next/font/google"


import "./globals.css"

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  });

const metadata = {
  title: "Portfolio Saya",
  description: "Deskripsi Aplikasi",
};

function RootLayout({ children }) {
  return (
    <html lang="en"className={poppins.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="./globe.svg" />
        <title>{metadata.title}</title>
      </head>
      <body className="dark:bg-zinc-900 transition duration-300 ease-out">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
