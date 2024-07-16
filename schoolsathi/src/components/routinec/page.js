import React from "react";
import {Card,Input, Button, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Routine() {
  return (
    <Card className="w-[900px] h-[500px] ml-32">
      <CardHeader className="flex gap-3">
        <div className="flex flex-row justify-between space-x-40">
          <p className="text-md">Exam Schedule</p>
          <p className="text-small text-default-500 bg-yellow-200">Upcomming.....</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className="flex flex-row">
        <p className="m-5">Exam name:</p> 
        <Input type="text" placeholder="Exam Name" className="m-2 w-[50]"/>
        </div>
        <div className="flex flex-row">
        <p className="m-5">Subject:</p> 
        <Input type="text" placeholder="Subject" className="m-2 w-[50]"/>
        </div>

        <div className="flex flex-row">
        <p className="m-5">Date:</p> 
        <Input type="text" placeholder="Date" className="m-2 w-[50]"/>
        </div>

        <div className="flex flex-row">
        <p className="m-5">Duration:</p> 
        <Input type="text" placeholder="Duration" className="m-2 w-[50]"/>
        </div>
        <Button color="primary" className="w-24 mt-5 ml-5">Send</Button>
      </CardBody>
      <Divider/>
      <CardFooter className="bg-yellow-100">
       <p>Arrive early with required meterials and ID, follow instructions silently,use permitted items, submit answers promptly, and avoid cheating.</p>
      </CardFooter>
    </Card>
  );
}
