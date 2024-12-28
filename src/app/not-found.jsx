import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <main className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">OOPS! 404 : Page Not Found</h1>
          <p className="text-lg font-medium mt-4">Sorry, the page you are looking for does not exist.</p>
          <p className="text-lg font-medium mt-4">
            You can go back to the <Link href="/" className="underline"> Home Page</Link> or try searching for something else.
          </p>
        </div>
      </main>
    </>
  );
}

export default NotFound;
