import { useState, useMemo } from "react";

// Mock data — replace with your API / store data
const VEHICLES = [
  { id: "VAN-05", label: "VAN-05 - 500 kg capacity", capacity: 500 },
  { id: "TRUCK-04", label: "TRUCK-04 - 1500 kg capacity", capacity: 1500 },
  { id: "PICKUP-02", label: "PICKUP-02 - 1000 kg capacity", capacity: 1000 },
];

const DRIVERS = [
  { id: "alex", name: "Alex" },
  { id: "priya", name: "Priya" },
  { id: "suresh", name: "Suresh" },
];

const LIFECYCLE_STEPS = ["Draft", "Dispatched", "Completed", "Cancelled"];

const initialLiveBoard = [
  {
    id: "TRD001",
    route: "Gandhinagar Depot -> Ahmedabad Hub",
    vehicleDriver: "VAN-05 / Alex",
    status: "Dispatched",
    meta: "45 min",
  },
  {
    id: "TRD004",
    route: "Vatva Industrial Area -> Sanand Warehouse",
    vehicleDriver: "TRUCK-04 / Suresh",
    status: "Draft",
    meta: "Awaiting driver",
  },
  {
    id: "TRD006",
    route: "Mansa -> Kalol Depot",
    vehicleDriver: "Unassigned",
    status: "Cancelled",
    meta: "Vehicle sent to shop",
  },
];

const STATUS_STYLES = {
  Draft: "bg-slate-500 text-white",
  Dispatched: "bg-blue-500 text-white",
  Completed: "bg-emerald-500 text-white",
  Cancelled: "bg-red-500 text-white",
};

function LifecycleStepper({ current }) {
  const currentIndex = LIFECYCLE_STEPS.indexOf(current);
  return (
    <div className="flex items-center mb-6">
      {LIFECYCLE_STEPS.map((step, i) => (
        <div key={step} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`w-3 h-3 rounded-full border-2 ${
                i < currentIndex
                  ? "bg-emerald-500 border-emerald-500"
                  : i === currentIndex
                  ? "bg-blue-500 border-blue-500"
                  : "bg-transparent border-slate-600"
              }`}
            />
            <span
              className={`text-xs ${
                i <= currentIndex ? "text-slate-200" : "text-slate-500"
              }`}
            >
              {step}
            </span>
          </div>
          {i < LIFECYCLE_STEPS.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 mb-4 ${
                i < currentIndex ? "bg-emerald-500" : "bg-slate-700"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <div className="mb-4">
      <label className="block text-xs text-slate-400 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400";

function CreateTripForm({ onDispatch }) {
  const [source, setSource] = useState("Gandhinagar Depot");
  const [destination, setDestination] = useState("Ahmedabad Hub");
  const [vehicleId, setVehicleId] = useState("VAN-05");
  const [driverId, setDriverId] = useState("alex");
  const [cargoWeight, setCargoWeight] = useState(700);
  const [plannedDistance, setPlannedDistance] = useState(38);

  const vehicle = VEHICLES.find((v) => v.id === vehicleId);
  const overweightBy = vehicle ? cargoWeight - vehicle.capacity : 0;
  const isBlocked = overweightBy > 0;

  return (
    <div>
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-3">
        CREATE TRIP
      </h2>

      <FormField label="Source">
        <input
          className={inputClasses}
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </FormField>

      <FormField label="Destination">
        <input
          className={inputClasses}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </FormField>

      <FormField label="Vehicle (available only)">
        <select
          className={inputClasses}
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
        >
          {VEHICLES.map((v) => (
            <option key={v.id} value={v.id} className="bg-slate-900">
              {v.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Driver (available only)">
        <select
          className={inputClasses}
          value={driverId}
          onChange={(e) => setDriverId(e.target.value)}
        >
          {DRIVERS.map((d) => (
            <option key={d.id} value={d.id} className="bg-slate-900">
              {d.name}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Cargo weight (kg)">
        <input
          type="number"
          className={inputClasses}
          value={cargoWeight}
          onChange={(e) => setCargoWeight(Number(e.target.value))}
        />
      </FormField>

      <FormField label="Planned distance (km)">
        <input
          type="number"
          className={inputClasses}
          value={plannedDistance}
          onChange={(e) => setPlannedDistance(Number(e.target.value))}
        />
      </FormField>

      {isBlocked && (
        <div className="border border-red-500/40 bg-red-500/10 rounded-md px-3 py-2.5 mb-4 text-xs text-red-300 space-y-0.5">
          <p>Vehicle capacity: {vehicle.capacity} kg</p>
          <p>Cargo weight: {cargoWeight} kg</p>
          <p className="font-medium">
            ✕ Capacity exceeded by {overweightBy} kg — dispatch blocked
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button
          disabled={isBlocked}
          onClick={() =>
            onDispatch({
              source,
              destination,
              vehicleId,
              driverId,
              cargoWeight,
              plannedDistance,
            })
          }
          className={`flex-1 text-sm font-semibold px-4 py-2 rounded-md transition-colors ${
            isBlocked
              ? "bg-slate-800 text-slate-500 cursor-not-allowed"
              : "bg-amber-500 hover:bg-amber-400 text-black"
          }`}
        >
          {isBlocked ? "Dispatch (disabled)" : "Dispatch"}
        </button>
        <button className="flex-1 text-sm font-medium px-4 py-2 rounded-md border border-slate-700 text-red-400 hover:bg-slate-800 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}

function LiveBoard({ trips }) {
  return (
    <div>
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-3">
        LIVE BOARD
      </h2>
      <div className="space-y-3">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="border border-slate-800 bg-slate-900/60 rounded-lg p-4 flex items-start justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                {trip.id}
              </p>
              <p className="text-xs text-slate-400 mb-3">{trip.route}</p>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  STATUS_STYLES[trip.status]
                }`}
              >
                {trip.status}
              </span>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-300 mb-1">
                {trip.vehicleDriver}
              </p>
              <p className="text-xs text-slate-500">{trip.meta}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-amber-400 italic mt-4">
        On complete: odometer → fuel log → expenses → vehicle &amp; driver
        available.
      </p>
    </div>
  );
}

export default function TripDispatcher() {
  const [trips, setTrips] = useState(initialLiveBoard);
  const [currentStage, setCurrentStage] = useState("Dispatched");

  const handleDispatch = (form) => {
    const vehicle = VEHICLES.find((v) => v.id === form.vehicleId);
    const driver = DRIVERS.find((d) => d.id === form.driverId);
    const newTrip = {
      id: `TRD${String(trips.length + 1).padStart(3, "0")}`,
      route: `${form.source} -> ${form.destination}`,
      vehicleDriver: `${vehicle?.id} / ${driver?.name}`,
      status: "Dispatched",
      meta: `${form.plannedDistance} km planned`,
    };
    setTrips([newTrip, ...trips]);
    setCurrentStage("Dispatched");
  };

  return (
    <div>
      <LifecycleStepper current={currentStage} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CreateTripForm onDispatch={handleDispatch} />
        <LiveBoard trips={trips} />
      </div>
    </div>
  );
}
