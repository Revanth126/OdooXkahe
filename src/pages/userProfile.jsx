export default function UserProfile() {
  return (
    <div className="border border-gray-700 rounded-xl p-5 text-white max-w-5xl mx-auto">

      <div className="flex gap-6 border-b border-gray-700 pb-5">

        <div className="w-24 h-24 rounded-full border border-gray-600 flex items-center justify-center">
          Profile
        </div>

        <div className="flex-1 border border-gray-700 rounded-lg p-4">
          <h1 className="text-2xl font-bold">
            Pon Esakki
          </h1>

          <p className="text-gray-400 mt-2">
            Travel enthusiast and explorer
          </p>

          <button className="mt-4 border border-gray-600 px-4 py-1 rounded">
            Edit Profile
          </button>
        </div>

      </div>

      <div className="mt-8">

        <h2 className="text-xl mb-4">
          Previous Trips
        </h2>

        <div className="grid grid-cols-3 gap-5">

          {[1,2,3].map((item) => (
            <div
              key={item}
              className="border border-gray-700 rounded-lg h-40 flex items-end justify-center pb-4"
            >
              <button className="border border-gray-600 px-4 py-1 rounded">
                View
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}