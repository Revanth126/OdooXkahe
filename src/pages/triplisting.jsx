export default function TripListing() {
  return (
    <div className="border border-gray-700 rounded-xl p-5 text-white max-w-5xl mx-auto">

      <div className="flex justify-between items-center border-b border-gray-700 pb-4">
        <h1 className="text-2xl font-bold">
          User Trip Listing
        </h1>

        <div className="flex gap-3">
          <button className="border border-gray-600 px-4 py-1 rounded">
            Group By
          </button>

          <button className="border border-gray-600 px-4 py-1 rounded">
            Filter
          </button>

          <button className="border border-gray-600 px-4 py-1 rounded">
            Sort
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-6">

        <div>
          <h2 className="mb-3 text-gray-400">
            Ongoing
          </h2>

          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl">
              Paris Adventure
            </h3>

            <p className="text-gray-400 mt-2">
              5 days trip with sightseeing and activities
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-gray-400">
            Upcoming
          </h2>

          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl">
              Bali Vacation
            </h3>

            <p className="text-gray-400 mt-2">
              Beach activities and relaxation
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-gray-400">
            Completed
          </h2>

          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl">
              Dubai Tour
            </h3>

            <p className="text-gray-400 mt-2">
              Desert safari and city exploration
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}