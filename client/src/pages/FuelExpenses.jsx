import Topbar from "../components/Topbar";
import FuelExpenses from "../components/FuelExpenses";

export default function FuelExpensesPage() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Topbar user="Raven K." />

      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-lg font-semibold text-white mb-4">
          Fuel &amp; Expense Management
        </h1>

        <FuelExpenses />
      </main>
    </div>
  );
}