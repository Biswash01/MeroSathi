import React from "react";
import {Card, Button,Input, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function App() {
  return (
    <div className=" min-h-screen bg-white text-center">
      <p className="text-gray-700 relative top-44 text-xl">Enter your login credentials</p>
    <Card className="max-w-[400px] max-h-[700px] mx-auto overflow-hidden mt-52 w-[700px]">
      <CardBody className="p-3 ">
        <Input type="text" placeholder="Enter your gmail" className="m-3 w-[50]"/>
        <Input type="password" varient="underlined" placeholder="Enter your password" className="m-3 w-[50]"/>
      
        <Button color="primary"> Login</Button>
      </CardBody>
      <CardFooter>
        <p>Dont have an account? </p>
        <Link
          isExternal
          href="/register"
        >
          Signin
        </Link>
      </CardFooter>
    </Card>
    </div>
  );
}
