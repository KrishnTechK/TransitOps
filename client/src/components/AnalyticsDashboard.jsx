import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

// Mock data — replace with your API / store data
const KPI_CARDS = [
  {
    label: "Fuel efficiency",
    value: "8.4 km/l",
    accent: "border-l-blue-500",
  },
  {
    label: "Fleet utilization",
    value: "81%",
    accent: "border-l-emerald-500",
  },
  {
    label: "Operational cost",
    value: "₹34,070",
    accent: "border-l-amber-500",
  },
  {
    label: "Vehicle ROI",
    value: "14.2%",
    accent: "border-l-emerald-500",
  },
];

const MONTHLY_REVENUE = [
  { month: "Jan", revenue: 42 },
  { month: "Feb", revenue: 38 },
  { month: "Mar", revenue: 45 },
  { month: "Apr", revenue: 50 },
  { month: "May", revenue: 47 },
  { month: "Jun", revenue: 58 },
  { month: "Jul", revenue: 53 },
];

const TOP_COSTLIEST_VEHICLES = [
  { vehicle: "TRUCK-11", pct: 100, color: "bg-red-500" },
  { vehicle: "MINI-03", pct: 55, color: "bg-amber-500" },
  { vehicle: "VAN-05", pct: 18, color: "bg-blue-500" },
];

function KpiCard({ label, value, accent }) {
  return (
    <div
      className={`bg-slate-900/60 border border-slate-800 border-l-4 ${accent} rounded-lg px-5 py-4`}
    >
      <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
        {label}
      </p>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function MonthlyRevenueChart() {
  return (
    <div>
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-4">
        MONTHLY REVENUE
      </h2>
      <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MONTHLY_REVENUE}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={{ stroke: "#334155" }}
              tickLine={false}
            />
            <YAxis
              stroke="#64748b"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: "#e2e8f0" }}
              itemStyle={{ color: "#60a5fa" }}
            />
            <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function TopCostliestVehicles() {
  return (
    <div>
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-4">
        TOP COSTLIEST VEHICLES
      </h2>
      <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-5 space-y-4">
        {TOP_COSTLIEST_VEHICLES.map((v) => (
          <div key={v.vehicle}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-slate-200 font-medium">{v.vehicle}</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${v.color} rounded-full`}
                style={{ width: `${v.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AnalyticsDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
        {KPI_CARDS.map((card) => (
          <KpiCard key={card.label} {...card} />
        ))}
      </div>

      <p className="text-xs text-slate-500 mb-8">
        ROI = (Revenue − (Maintenance + Fuel)) / Acquisition cost
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MonthlyRevenueChart />
        <TopCostliestVehicles />
      </div>
    </div>
  );
}
