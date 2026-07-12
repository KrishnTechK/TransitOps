import Topbar from '../components/Topbar';
import FilterBar from '../components/FilterBar';
import StatCard from '../components/StatCard';
import RecentTrips from '../components/RecentTrips';
import VehicleStatus from '../components/VehicleStatus';
import { kpis } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full">
      <Topbar title="Dashboard" />
      <div className="flex-1 overflow-y-auto scrollbar-thin px-6 md:px-8 py-6">
        <FilterBar />

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
          {kpis.map((k, i) => (
            <StatCard key={k.label} {...k} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <RecentTrips />
          </div>
          <div>
            <VehicleStatus />
          </div>
        </div>
      </div>
    </div>
  );
}
