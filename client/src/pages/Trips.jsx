import Topbar from "../components/Topbar";
import TripDispatcher from "../components/TripDispatcher";

export default function Trips() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Topbar user="Raven K." />

      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-lg font-semibold text-white mb-4">
          Trip Dispatcher
        </h1>

        <TripDispatcher />
      </main>
    </div>
  );
}