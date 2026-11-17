import React from "react";
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Mail,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-[#E5E5E5] bg-white px-4 py-5">

      {/* Logo */}
      <div className="mb-8 flex items-center gap-3 px-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6D5DFB] text-white">
          <Sparkles size={19} />
        </div>

        <h1 className="text-xl font-semibold tracking-tight text-[#171717]">
          DoPilot
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">

        {/* Dashboard */}
        <a
          href="#"
          className="flex items-center gap-3 rounded-xl bg-[#EEEBFF] px-3 py-2.5 text-sm font-medium text-[#6D5DFB]"
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </a>

        {/* Tasks */}
        <a
          href="#"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#737373] transition hover:bg-[#F7F7F5] hover:text-[#171717]"
        >
          <CheckSquare size={18} />
          <span>Tasks</span>
        </a>

        {/* Meetings */}
        <a
          href="#"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#737373] transition hover:bg-[#F7F7F5] hover:text-[#171717]"
        >
          <CalendarDays size={18} />
          <span>Meetings</span>
        </a>

        {/* Emails */}
        <a
          href="#"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#737373] transition hover:bg-[#F7F7F5] hover:text-[#171717]"
        >
          <Mail size={18} />
          <span>Emails</span>
        </a>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-[#E5E5E5] pt-4">

        {/* Settings */}
        <a
          href="#"
          className="mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#737373] transition hover:bg-[#F7F7F5] hover:text-[#171717]"
        >
          <Settings size={18} />
          <span>Settings</span>
        </a>

        {/* Profile */}
        <div className="mt-3 flex items-center gap-3 rounded-xl bg-[#F7F7F5] p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEEBFF] text-sm font-semibold text-[#6D5DFB]">
            MK
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-[#171717]">
              Monika
            </p>
            <p className="truncate text-xs text-[#737373]">
              Free Plan
            </p>
          </div>

          <LogOut
            size={17}
            className="cursor-pointer text-[#737373] hover:text-[#E5484D]"
          />
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;