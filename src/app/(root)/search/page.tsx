import ItemCard from "@/components/items/ItemCard";

export default function Search() {
  // Sample items data
  const items = [
    {
      id: 1,
      name: "Black Wallet",
      location: "Student Center",
      date: "2023-05-15",
      status: "Found" as const,
    },
    {
      id: 2,
      name: "Silver Ring",
      location: "Library, 2nd floor",
      date: "2023-05-10",
      status: "Lost" as const,
    },
    {
      id: 3,
      name: "Blue Backpack",
      location: "Cafeteria",
      date: "2023-05-08",
      status: "Found" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Search Items
        </h1>
      </header>

      <div className="max-w-lg mx-auto p-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex mt-3 space-x-2">
            <button className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
              All Items
            </button>
            <button className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
              Lost
            </button>
            <button className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
              Found
            </button>
          </div>
        </div>

        <main className="space-y-4">
          {/* Render item cards from the items array */}
          {items.map(item => (
            <ItemCard
              key={item.id}
              name={item.name}
              location={item.location}
              date={item.date}
              status={item.status}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
