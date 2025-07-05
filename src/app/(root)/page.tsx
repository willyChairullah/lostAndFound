import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Lost and Found
        </h1>
      </header>

      <main className="max-w-lg mx-auto p-4 space-y-4">
        {/* Welcome Card */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Selamat Datang!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
            Platform kami membantu menghubungkan orang yang kehilangan barang
            dengan mereka yang telah menemukannya.
          </p>
          <div className="flex space-x-2 mt-4">
            <Link
              href="/report"
              className="flex-1 bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium"
            >
              Laporkan Barang Hilang
            </Link>
            <Link
              href="/report"
              className="flex-1 bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium"
            >
              Laporkan Barang Temuan
            </Link>
          </div>
        </div>

        {/* Recent Items */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              Barang Terbaru
            </h2>
            <Link
              href="/search"
              className="text-blue-500 dark:text-blue-400 text-sm"
            >
              Lihat Semua
            </Link>
          </div>

          {/* Item Card */}
          <div className="border-b dark:border-gray-700 pb-3 mb-3">
            <div className="flex items-start">
              <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-md mr-3 flex-shrink-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium dark:text-white">Dompet Hitam</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Ditemukan di: Pusat Mahasiswa
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  15 Mei 2023
                </p>
                <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-0.5 rounded mt-1">
                  Ditemukan
                </span>
              </div>
            </div>
          </div>

          {/* Item Card */}
          <div className="border-b dark:border-gray-700 pb-3 mb-3">
            <div className="flex items-start">
              <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-md mr-3 flex-shrink-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium dark:text-white">Cincin Perak</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Hilang di: Perpustakaan, lantai 2
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  10 Mei 2023
                </p>
                <span className="inline-block bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs px-2 py-0.5 rounded mt-1">
                  Hilang
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Card */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
            Statistik
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                24
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Barang Ditemukan
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-lg text-center">
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                18
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Barang Hilang
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                15
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Barang Dikembalikan
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg text-center">
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                42
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Pengguna Aktif
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
