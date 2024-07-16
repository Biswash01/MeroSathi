import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

export default function Ccontent() {
  return (
    <>
    <div className=" justify-between space-x-36"><Select
          label="Classroom"
          className="w-32"
      >
      </Select><Select
          label="Section"
          className="w-32"
      >
          </Select></div></>
  );
}
