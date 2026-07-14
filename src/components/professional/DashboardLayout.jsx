import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <div className="flex flex-1 flex-col">

          <Topbar />

          <main className="flex-1 p-8">

            {children}

          </main>

        </div>

      </div>

    </div>
  );
}