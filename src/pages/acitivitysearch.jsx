export default function ActivitySearch() {
  return (
    <div className="border border-gray-700 rounded-xl p-5 text-white max-w-5xl mx-auto">

      <div className="flex justify-between items-center border-b border-gray-700 pb-4">

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border border-gray-600 px-4 py-2 rounded w-72"
        />

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

      <div className="mt-6 space-y-4">

        {[1,2,3,4,5].map((item) => (
          <div
            key={item}
            className="border border-gray-700 rounded-lg p-5"
          >
            <h2 className="text-xl">
              Activity Option {item}
            </h2>

            <p className="text-gray-400 mt-2">
              Activity details and description
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}