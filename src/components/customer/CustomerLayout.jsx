import CustomerSidebar from "./CustomerSidebar";
import CustomerTopbar from "./CustomerTopbar";

export default function CustomerLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}

      <CustomerSidebar />

      {/* Main */}

      <div className="flex flex-1 flex-col">

        <CustomerTopbar />

        <main className="flex-1 overflow-y-auto p-8">

          {children}

        </main>

      </div>

    </div>
  );
}