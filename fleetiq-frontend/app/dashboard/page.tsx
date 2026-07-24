import Sidebar from "@/components/sidebar/Sidebar";
import StatCard from "@/components/cards/StatCard";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-3 text-gray-600">
          Welcome to FleetIQ 🚛
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total Revenue"
            value="₹12,50,000"
            icon="💰"
          />

          <StatCard
            title="Total Profit"
            value="₹3,40,000"
            icon="📈"
          />

          <StatCard
            title="Total Trucks"
            value={110}
            icon="🚛"
          />

          <StatCard
            title="Drivers"
            value={95}
            icon="🧑‍✈️"
          />

          <StatCard
            title="Customers"
            value={38}
            icon="🏢"
          />

          <StatCard
            title="Trips"
            value={542}
            icon="🛣️"
          />
        </div>
      </main>
    </div>
  );
}