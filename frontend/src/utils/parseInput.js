const DAYS = /\b(today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i;
const TIME = /\bat (\d{1,2}(?::\d\d)?\s?(?:am|pm)?)/i;
const EVENT = /meeting|call|interview|appointment/i;
const URGENT = /report|urgent|deadline|by /i;

const cap = (s) => s[0].toUpperCase() + s.slice(1);

// Swap this for a real AI call later; keep the return shape the same.
export function parseInput(text) {
  const tasks = [];
  const events = [];

  text
    .split(/,|\band\b|\n/i)
    .map((s) => s.trim().replace(/\.$/, ""))
    .filter(Boolean)
    .forEach((s) => {
      const day = (s.match(DAYS) || [])[1];
      const time = (s.match(TIME) || [])[1];
      const when = (day ? cap(day.toLowerCase()) : "Today") + (time ? `, ${time}` : "");
      const title = cap(s);

      if (EVENT.test(s)) {
        events.push({ id: crypto.randomUUID(), title, when });
      } else {
        tasks.push({
          id: crypto.randomUUID(),
          title,
          priority: URGENT.test(s) ? "high" : "med",
          due: when,
          dueToday: !day || /today/i.test(day),
          done: false,
        });
      }
    });

  return { tasks, events };
}
