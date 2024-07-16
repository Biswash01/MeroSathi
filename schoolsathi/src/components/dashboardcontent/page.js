import React from "react";
import {User,Input, Button} from "@nextui-org/react";

export default function Userc() {
  return (
    <><h1 className="mb-10"><strong>Personal Information</strong></h1>
    <div className="flex flex-row justify-between space-x-96"><User
          name="Mishan"
          description="Teacher"
          avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
          />
          <Button color="primary">Edit</Button></div>
          <div className="mt-20">
         <p className="m-3">Full Name</p> 
          <Input type="text" placeholder="Full Name" className="m-3 w-48"/>
          <p className="m-3">Nick Name</p> 
        <Input type="text" varient="underlined" placeholder="Your NickName" className="m-3 w-48"/>

        <h1 className="mt-10 m-3"><strong>Contact Information</strong></h1>
        <p className="m-3">Your Email</p> 
        <Input type="text" placeholder="Email Address" className="m-3 w-48"/>
        <p className="m-3">Your Location</p> 
        <Input type="text" placeholder="Location" className="m-3 w-48"/>
          <Button className="mt-5" color="primary">Save</Button>
        </div>

           </>
  );
}
