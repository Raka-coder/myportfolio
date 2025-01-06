import React from "react"

function Pengalaman() {
  return (
    <>
      <section
        id=""
        className="relative min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 pt-8"

      >
        <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-1 items-start md:pt-32 pt-12 md:ml-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600 md:text-start text-center md:pt-12">
            History Pengalaman Saya
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 my-2">
            <div className="md:flex items-end justify-between">
              <h2 className="text-lg font-bold mb-2">Universitas Siliwangi</h2>
              <p className="mb-2">2024 - Sekarang</p>
            </div>
            <p className="text-sm text-gray-600">S1 - Teknik Informatika</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 my-2">
            <div className="md:flex items-end justify-between">
              <h2 className="text-lg font-bold mb-2">SMKN 2 Tasikmalaya</h2>
              <p className="mb-2">2020 - 2024</p>
            </div>
            <p className="text-sm text-gray-600">
              Sistem Informasi Jaringan dan Aplikasi
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pengalaman;
