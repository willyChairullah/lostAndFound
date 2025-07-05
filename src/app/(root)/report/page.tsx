export default function Report() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Report Item
        </h1>
      </header>

      <main className="max-w-lg mx-auto p-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Jenis Laporan
              </label>
              <select className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white">
                <option>Barang Hilang</option>
                <option>Barang Temuan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nama Barang
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="contoh: Dompet Merah"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Deskripsi
              </label>
              <textarea
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                rows={3}
                placeholder="Deskripsikan barangnya..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Lokasi
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="Dimana hilang/ditemukan?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Tanggal
              </label>
              <input
                type="date"
                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Unggah Gambar
              </label>
              <input
                type="file"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-300 dark:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center touch-manipulation"
            >
              Kirim Laporan
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
