import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventCalendar = () => {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
      </div>
      <div className="row">
        {WEEKDAYS.map((day) => {
          return (
            <div key={day} className="col">
              <span className="fw-bold text-center">{day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
