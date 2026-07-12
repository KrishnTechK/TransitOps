import { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import Topbar from '../components/Topbar';
import FleetToolbar from '../components/FleetToolbar';
import VehicleTable from '../components/VehicleTable';
import { vehicles } from '../data/mockData';

export default function Fleet() {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (type !== 'All' && v.type !== type) return false;
      if (status !== 'All' && v.status !== status) return false;
      if (query.trim() && !v.reg.toLowerCase().includes(query.trim().toLowerCase())) return false;
      return true;
    });
  }, [type, status, query]);

  return (
    <div className="flex flex-col h-full">
      <Topbar title="Fleet" />
      <div className="flex-1 overflow-y-auto scrollbar-thin px-6 md:px-8 py-6">
        <FleetToolbar
          type={type}
          setType={setType}
          status={status}
          setStatus={setStatus}
          query={query}
          setQuery={setQuery}
          onAddVehicle={() => {}}
        />

        <VehicleTable vehicles={filtered} />

        <p className="flex items-center gap-1.5 mt-3 text-[12px] text-signal-amber/90">
          <Info className="w-3.5 h-3.5 shrink-0" />
          Registration no. must be unique. Retired / In shop vehicles are hidden from Trip Dispatcher.
        </p>
      </div>
    </div>
  );
}
