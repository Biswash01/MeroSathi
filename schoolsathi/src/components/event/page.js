import React from "react";
import { DateValue, now, parseAbsoluteToLocal } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { DateInput } from "@nextui-org/react";

export default function Events() {
  let [date, setDate] = React.useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));

  return (
    <div className="w-full max-w-xl flex flex-col items-start gap-4">
        <h1 className="font-bold">Schedule an event</h1>
      <DateInput
        granularity="second"
        label="Date and time"
        value={date}
        onChange={setDate}
      />
      <DateInput granularity="day" label="Date" value={date} onChange={setDate} />
      <DateInput granularity="second" label="Event date" />
      <DateInput
        granularity="second"
        label="Event date"
        placeholderValue={now("America/New_York")}
      />
    </div>
  );
}
