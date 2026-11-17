
import React, { useState } from "react";
import {
  Plus,
  Search,
  Check,
  CalendarDays,
  MoreHorizontal,
  Circle,
} from "lucide-react";

const dummyTasks = [
  {
    id: 1,
    title: "Finish DoPilot dashboard",
    description: "Complete the dashboard UI and connect dummy data",
    priority: "high",
    due: "Today",
    completed: false,
  },
  {
    id: 2,
    title: "Prepare for technical interview",
    description: "Revise React, Node.js and MongoDB questions",
    priority: "medium",
    due: "Today",
    completed: false,
  },
  {
    id: 3,
    title: "Submit internship application",
    description: "Complete the application before the deadline",
    priority: "high",
    due: "Tomorrow",
    completed: false,
  },
  {
    id: 4,
    title: "Update GitHub README",
    description: "Add project screenshots and setup instructions",
    priority: "low",
    due: "Oct 2",
    completed: true,
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(dummyTasks);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed") {
      return matchesSearch && task.completed;
    }

    if (filter === "pending") {
      return matchesSearch && !task.completed;
    }

    return matchesSearch;
  });

  const priorityStyle = {
    high: "bg-[#FFF0F0] text-[#E5484D]",
    medium: "bg-[#FFF7E8] text-[#E59B2F]",
    low: "bg-[#ECF9F3] text-[#22A06B]",
  };

  return (
    <div className="h-screen overflow-hidden bg-[#F7F7F5] px-6 py-6 text-[#171717]">
      <div className="mx-auto flex h-full max-w-6xl flex-col">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm text-[#737373]">
              Stay organized
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Tasks
            </h1>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-[#6D5DFB] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
            <Plus size={18} />
            Add task
          </button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-3 gap-4">

          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4">
            <p className="text-sm text-[#737373]">Total tasks</p>
            <p className="mt-1 text-2xl font-semibold">
              {tasks.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4">
            <p className="text-sm text-[#737373]">Pending</p>
            <p className="mt-1 text-2xl font-semibold">
              {tasks.filter((task) => !task.completed).length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4">
            <p className="text-sm text-[#737373]">Completed</p>
            <p className="mt-1 text-2xl font-semibold">
              {tasks.filter((task) => task.completed).length}
            </p>
          </div>

        </div>

        {/* Main Card */}
        <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-[#E5E5E5] bg-white">

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 border-b border-[#E5E5E5] p-4">

            {/* Search */}
            <div className="flex max-w-sm flex-1 items-center gap-2 rounded-xl border border-[#E5E5E5] bg-[#F7F7F5] px-3">
              <Search size={17} className="text-[#737373]" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tasks..."
                className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-[#737373]"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center rounded-xl bg-[#F7F7F5] p-1">

              <button
                onClick={() => setFilter("all")}
                className={`rounded-lg px-3 py-1.5 text-sm ${
                  filter === "all"
                    ? "bg-white font-medium shadow-sm"
                    : "text-[#737373]"
                }`}
              >
                All
              </button>

              <button
                onClick={() => setFilter("pending")}
                className={`rounded-lg px-3 py-1.5 text-sm ${
                  filter === "pending"
                    ? "bg-white font-medium shadow-sm"
                    : "text-[#737373]"
                }`}
              >
                Pending
              </button>

              <button
                onClick={() => setFilter("completed")}
                className={`rounded-lg px-3 py-1.5 text-sm ${
                  filter === "completed"
                    ? "bg-white font-medium shadow-sm"
                    : "text-[#737373]"
                }`}
              >
                Completed
              </button>

            </div>
          </div>

          {/* Task List */}
          <div className="min-h-0 flex-1 overflow-y-auto">

            {filteredTasks.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEEBFF] text-[#6D5DFB]">
                  <Check size={22} />
                </div>

                <p className="font-medium">No tasks found</p>

                <p className="mt-1 text-sm text-[#737373]">
                  You're all caught up.
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-4 border-b border-[#E5E5E5] px-5 py-4 transition hover:bg-[#FAFAF9]"
                >

                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      task.completed
                        ? "border-[#6D5DFB] bg-[#6D5DFB] text-white"
                        : "border-[#D4D4D4] text-transparent hover:border-[#6D5DFB]"
                    }`}
                  >
                    <Check size={13} strokeWidth={3} />
                  </button>

                  {/* Task Content */}
                  <div className="min-w-0 flex-1">

                    <p
                      className={`text-sm font-medium ${
                        task.completed
                          ? "text-[#A3A3A3] line-through"
                          : "text-[#171717]"
                      }`}
                    >
                      {task.title}
                    </p>

                    <p className="mt-1 truncate text-xs text-[#737373]">
                      {task.description}
                    </p>

                  </div>

                  {/* Priority */}
                  <span
                    className={`hidden rounded-lg px-2.5 py-1 text-xs font-medium capitalize sm:block ${priorityStyle[task.priority]}`}
                  >
                    {task.priority}
                  </span>

                  {/* Due Date */}
                  <div className="hidden items-center gap-1.5 text-xs text-[#737373] md:flex">
                    <CalendarDays size={14} />
                    {task.due}
                  </div>

                  {/* More */}
                  <button className="text-[#737373] hover:text-[#171717]">
                    <MoreHorizontal size={18} />
                  </button>

                </div>
              ))
            )}

          </div>

        </div>

        {/* AI Input */}
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white p-2 shadow-sm">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEEBFF] text-[#6D5DFB]">
            <Circle size={17} />
          </div>

          <input
            type="text"
            placeholder="Tell DoPilot what you want to add..."
            className="flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-[#737373]"
          />

          <button className="rounded-xl bg-[#6D5DFB] px-4 py-2 text-sm font-medium text-white hover:opacity-90">
            Add
          </button>

        </div>

      </div>
    </div>
  );
};

export default Tasks;

