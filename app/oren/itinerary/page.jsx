"use client";
import React from "react";
import ItineraryBox from "@/components/ItineraryBox";

export default function Home() {
  // const array = useState([]);
  // array => [ {time: "8am", content: "ajsdfkasdf"}, {}, {}]
  return (
    <main className="flex flex-col gap-y-2 bg-blue-400 p-6">
      <ItineraryBox time="8am" />
      <ItineraryBox time="9am" />
      <ItineraryBox time="10am" />
      <ItineraryBox time="11am" />
      <ItineraryBox time="12pm" />
      <ItineraryBox time="1pm" />
      <ItineraryBox time="2pm" />
      <ItineraryBox time="3pm" />
      <ItineraryBox time="4pm" />
      <ItineraryBox time="5pm" />
    </main>
  );
}
