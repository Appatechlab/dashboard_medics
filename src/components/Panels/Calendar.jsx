import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarComponent() {
  const [date, setDate] = React.useState(new Date());

  return (
    <Calendar
            className="h-full w-full flex rounded-md border shadow"
            classNames={{
              months:
                "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              row: "w-full mt-2",
            }}
            selected={date}
            onSelect={setDate}
            mode="single"
          />
  );
}