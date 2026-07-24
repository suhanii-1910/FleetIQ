export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">
        🚛 FleetIQ
      </h1>

      <nav className="space-y-4">
        <p className="cursor-pointer hover:text-gray-200">
          📊 Dashboard
        </p>

        <p className="cursor-pointer hover:text-gray-200">
          🚚 Trucks
        </p>

        <p className="cursor-pointer hover:text-gray-200">
          👨‍✈️ Drivers
        </p>

        <p className="cursor-pointer hover:text-gray-200">
          🏢 Customers
        </p>

        <p className="cursor-pointer hover:text-gray-200">
          🛣 Trips
        </p>

        <p className="cursor-pointer hover:text-gray-200">
          📈 Analytics
        </p>
      </nav>
    </aside>
  );
}