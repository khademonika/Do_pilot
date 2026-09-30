
import React from "react";
import {
  Plus,
  Sparkles,
  CheckCircle2,
  CalendarDays,
  Mail,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f5] px-6 py-8 text-[#171717] md:px-10">

      {/* Header */}
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-1 text-sm text-gray-500">
              Tuesday, September 30
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Welcome back, Monika
            </h1>

            <p className="mt-2 text-gray-500">
              What's on your mind today?
            </p>
          </div>

          <div className="hidden rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm md:block">
            <span className="mr-2">☀️</span>
            Good afternoon
          </div>
        </div>


        {/* AI Input */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl bg-[#f7f7f5] px-4 py-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black text-white">
              <Sparkles size={18} />
            </div>

            <input
              type="text"
              placeholder="Tell DoPilot what you need..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

            <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
              Add
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 px-1">
            <button className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50">
              + Add task
            </button>

            <button className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50">
              Schedule meeting
            </button>

            <button className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50">
              Check emails
            </button>
          </div>
        </div>


        {/* Overview */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Tasks */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <CheckCircle2 size={20} />
              </div>

              <ArrowUpRight size={18} className="text-gray-400" />
            </div>

            <p className="text-sm text-gray-500">Tasks</p>

            <div className="mt-1 flex items-end gap-2">
              <h2 className="text-3xl font-semibold">8</h2>
              <span className="mb-1 text-xs text-gray-500">
                for today
              </span>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[65%] rounded-full bg-black" />
            </div>

            <p className="mt-2 text-xs text-gray-400">
              5 completed · 3 remaining
            </p>
          </div>


          {/* Meetings */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <CalendarDays size={20} />
              </div>

              <ArrowUpRight size={18} className="text-gray-400" />
            </div>

            <p className="text-sm text-gray-500">Meetings</p>

            <div className="mt-1 flex items-end gap-2">
              <h2 className="text-3xl font-semibold">3</h2>
              <span className="mb-1 text-xs text-gray-500">
                scheduled
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <Clock3 size={14} />
              Next meeting at 11:30 AM
            </div>
          </div>


          {/* Emails */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <Mail size={20} />
              </div>

              <ArrowUpRight size={18} className="text-gray-400" />
            </div>

            <p className="text-sm text-gray-500">Emails</p>

            <div className="mt-1 flex items-end gap-2">
              <h2 className="text-3xl font-semibold">12</h2>
              <span className="mb-1 text-xs text-gray-500">
                unread
              </span>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              4 need your attention
            </div>
          </div>

        </div>


        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Today's Tasks */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-2">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Today's tasks</h2>
                <p className="mt-1 text-xs text-gray-400">
                  Things you planned to get done
                </p>
              </div>

              <button className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-black">
                View all
                <ArrowUpRight size={14} />
              </button>
            </div>


            <div className="space-y-2">

              <div className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Finish DoPilot dashboard
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    High priority · Due today
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs text-red-500">
                  High
                </span>
              </div>


              <div className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Prepare interview questions
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Due at 5:00 PM
                  </p>
                </div>

                <span className="rounded-full bg-yellow-50 px-2.5 py-1 text-xs text-yellow-600">
                  Medium
                </span>
              </div>


              <div className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Review project documentation
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Due tomorrow
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500">
                  Low
                </span>
              </div>

            </div>


            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 py-3 text-sm text-gray-500 hover:bg-gray-50">
              <Plus size={16} />
              Add another task
            </button>

          </div>


          {/* Upcoming */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <div className="mb-5">
              <h2 className="font-semibold">Coming up</h2>
              <p className="mt-1 text-xs text-gray-400">
                Your next activities
              </p>
            </div>


            <div className="space-y-5">

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-black" />

                <div>
                  <p className="text-sm font-medium">
                    Team meeting
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Today · 11:30 AM
                  </p>
                </div>
              </div>


              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-300" />

                <div>
                  <p className="text-sm font-medium">
                    Submit assignment
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Today · 5:00 PM
                  </p>
                </div>
              </div>


              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-300" />

                <div>
                  <p className="text-sm font-medium">
                    Interview preparation
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Tomorrow · 10:00 AM
                  </p>
                </div>
              </div>

            </div>


            <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-medium text-white hover:bg-gray-800">
              <CalendarDays size={16} />
              Open calendar
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;

