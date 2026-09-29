import React, { useState } from "react";
import dummyData from "./assets/dummyData";
import DashboardHeader from "./components/DashboardHeader";

const Dashboard = () => {
  const [dummydata, setDummyData] = useState(dummyData);

  return (
    <div className="min-h-screen bg-[#F7F7F5] px-6 py-8 text-[#171717]">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
     <DashboardHeader/>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 h-[400px]">

          {/* Tasks */}
          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-sm">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#737373]">
                  Tasks
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  {dummydata.tasks.length}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEEBFF] text-[#6D5DFB]">
                ✓
              </div>
            </div>

            <div className="space-y-3">
              {dummydata.tasks.slice(0, 4).map((task, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-[#E5E5E5] p-3 transition hover:bg-[#F7F7F5]"
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      task.priority === "high"
                        ? "bg-[#E5484D]"
                        : task.priority === "medium"
                        ? "bg-[#E59B2F]"
                        : "bg-[#22A06B]"
                    }`}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {task.title}
                    </p>

                    {task.priority && (
                      <p className="mt-1 text-xs capitalize text-[#737373]">
                        {task.priority} priority
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-5 text-sm font-medium text-[#6D5DFB] hover:underline">
              View all tasks →
            </button>
          </div>

          {/* Emails */}
          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-sm">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#737373]">
                  Emails
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  {dummydata.emails.length}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEEBFF] text-[#6D5DFB]">
                ✉
              </div>
            </div>

            <div className="space-y-3">
              {dummydata.emails.slice(0, 4).map((email, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#E5E5E5] p-3 transition hover:bg-[#F7F7F5]"
                >
                  <p className="truncate text-sm font-medium">
                    {email.subject}
                  </p>

                  <p className="mt-1 truncate text-xs text-[#737373]">
                    {email.sender || "No sender information"}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-5 text-sm font-medium text-[#6D5DFB] hover:underline">
              View all emails →
            </button>
          </div>

          {/* Meetings */}
          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-sm">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#737373]">
                  Meetings
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  {dummydata.meetings.length}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEEBFF] text-[#6D5DFB]">
                ◷
              </div>
            </div>

            <div className="space-y-3">
              {dummydata.meetings.slice(0, 4).map((meeting, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-[#E5E5E5] p-3 transition hover:bg-[#F7F7F5]"
                >
                  <div className="mt-1 h-8 w-1 rounded-full bg-[#6D5DFB]" />

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {meeting.title}
                    </p>

                    <p className="mt-1 text-xs text-[#737373]">
                      {meeting.time || "Time not specified"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-5 text-sm font-medium text-[#6D5DFB] hover:underline">
              View calendar →
            </button>
          </div>
        </div>

        {/* AI Command Section */}
        <div className="mt-6 rounded-2xl border mt-10 border-[#E5E5E5] bg-white p-5 shadow-sm">

          <div className="mb-3">
            <h2 className="text-sm font-semibold">
              Tell DoPilot what you need
            </h2>

            <p className="mt-1 text-xs text-[#737373]">
              Add a task, schedule a meeting, or ask DoPilot to organize
              something for you.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#E5E5E5] bg-[#F7F7F5] p-2 focus-within:border-[#6D5DFB] focus-within:ring-2 focus-within:ring-[#EEEBFF]">

            <input
              type="text"
              placeholder="e.g. Remind me to submit my report tomorrow at 10 AM..."
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[#737373]"
            />

            <button className="rounded-lg bg-[#6D5DFB] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
              Ask DoPilot
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;