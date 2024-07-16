import React from "react";
import {Tabs, Tab} from "@nextui-org/react"; 
import { FaRocketchat } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Navtab() {
  const radiusList = [
    "full",
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {radiusList.map((radius) => (
        <Tabs key={radius} radius={radius} aria-label="Tabs radius">
          <Tab key="chat" title={<FaRocketchat />} />
          <Tab key="notification" title={<IoMdNotificationsOutline />} />
          
        </Tabs>
      ))}
    </div>
  );
}
