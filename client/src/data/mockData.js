// Mock fleet data — swap for live API/WebSocket feed in production.

export const kpis = [
  { label: 'Active vehicles', value: 53, tone: 'blue' },
  { label: 'Available vehicles', value: 42, tone: 'green' },
  { label: 'In maintenance', value: 5, tone: 'amber' },
  { label: 'Active trips', value: 18, tone: 'blue' },
  { label: 'Pending trips', value: 9, tone: 'mist' },
  { label: 'Drivers on duty', value: 26, tone: 'teal' },
];

export const fleetUtilization = 81;

export const recentTrips = [
  { id: 'TR001', vehicle: 'VAN-05', driver: 'Alex Rivera', status: 'On Trip', eta: '45 min' },
  { id: 'TR002', vehicle: 'TRK-12', driver: 'John Okafor', status: 'Completed', eta: '—' },
  { id: 'TR003', vehicle: 'MINI-08', driver: 'Priya Nair', status: 'Dispatched', eta: 'In 10 min' },
  { id: 'TR004', vehicle: '—', driver: '—', status: 'Draft', eta: 'Awaiting vehicle' },
  { id: 'TR005', vehicle: 'VAN-11', driver: 'Sam Cole', status: 'On Trip', eta: '1 hr 05 min' },
];

export const vehicleStatus = [
  { label: 'Available', value: 42, tone: 'green' },
  { label: 'On Trip', value: 53, tone: 'blue' },
  { label: 'In Shop', value: 5, tone: 'amber' },
  { label: 'Retired', value: 2, tone: 'red' },
];

export const navStops = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'fleet', label: 'Fleet' },
  { key: 'drivers', label: 'Drivers' },
  { key: 'trips', label: 'Trips' },
  { key: 'maintenance', label: 'Maintenance' },
  { key: 'fuel', label: 'Fuel & Expenses' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'settings', label: 'Settings' },
];


export const vehicleStatusFilters = [
  "All",
  "Available",
  "On Trip",
  "In Shop",
  "Retired",
];


export const vehicleTypes = [
  "All",
  "Van",
  "Truck",
  "Mini Truck",
  "Bus"
];


export const vehicles = [
  {
    reg: "UP32 AB 1234",
    name: "Tata Ace Gold",
    type: "Mini Truck",
    capacity: "750 kg",
    odometer: 45230,
    cost: 650000,
    status: "Available",
  },
  {
    reg: "UP32 CD 5678",
    name: "Mahindra Bolero Pickup",
    type: "Pickup",
    capacity: "1500 kg",
    odometer: 78210,
    cost: 980000,
    status: "On Trip",
  },
  {
    reg: "UP32 EF 9012",
    name: "Ashok Leyland Dost",
    type: "Mini Truck",
    capacity: "1250 kg",
    odometer: 61200,
    cost: 890000,
    status: "In Shop",
  },
  {
    reg: "UP32 GH 3456",
    name: "Eicher Pro 2049",
    type: "Truck",
    capacity: "3500 kg",
    odometer: 120540,
    cost: 1650000,
    status: "Retired",
  },
];