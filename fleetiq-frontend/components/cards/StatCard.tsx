type StatCardProps = {
  title: string;
  value: string | number;
  icon: string;
};

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
}