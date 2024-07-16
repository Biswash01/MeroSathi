import React from 'react'
import {Card, Button,Input, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const register = () => {
  return (
<div className=" min-h-screen bg-white text-center">
      <h1 className="text-gray-700 text-4xl font-bold relative top-32">Welcome, Create your School account</h1>
      <p className="text-gray-700 relative top-44 text-xl">It is our great pleasure to have you on board</p>
    <Card className="max-w-[400px] mx-auto overflow-hidden mt-52 w-[700px]">
      <CardBody className="p-3 ">
        <Input type="text" placeholder="Enter the name of the admin" className="m-2 w-[50]"/>
        <Input type="text" placeholder="Enter the name of school" className="m-2 w-[50]"/>
        <Input type="text" placeholder="Enter the school email" className="m-2 w-[50]"/>
        <Input type="password" varient="underlined" placeholder="Enter your password" className="m-2 w-[50]"/>
        <Input type="password" varient="underlined" placeholder="Confirm password" className="m-2 w-[50]"/>
        <Button color="primary"> Signup</Button>
      </CardBody>
      <CardFooter>
        <p>Already have an account? </p>
        <Link
          isExternal
          href="/"
        >
          Signup
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default register
