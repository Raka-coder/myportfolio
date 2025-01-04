import React from "react";
import Link from "next/link";
import Image from "next/image";

import notFoundImg from "../assets/images/404.png"

function NotFound() {
  return (
    <>
      <section className="flex flex-col h-screen md:items-center items-center md:justify-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 md:pb-12 pb-24">
        <Image src={notFoundImg} alt="Not Found" className="w-72 h-auto drop-shadow-2xl" />
        <div className="text-center p-2">
          <h1 className="text-2xl font-semibold">Oops! 404 : Page Not Found</h1>
          <p className="text-lg font-medium mt-2">Sorry, the page you are looking for does not exist.</p>
          <p className="text-lg font-medium mt-2">
            You can go back to the <Link href="/" className="text-blue-600 underline">Home Page</Link> or try searching for something else.
          </p>
        </div>
      </section>
    </>
  );
}

export default NotFound;
