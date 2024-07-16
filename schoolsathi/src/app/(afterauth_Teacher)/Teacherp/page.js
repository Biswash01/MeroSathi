'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import VerticalTabs from "@/components/sidebar/page";
import Navtab from "@/components/Nav-tab/page";
export default function teacher() {
  return (
    <><div className="min-h-screen bg-white" flex flex-col>
    <Navbar isBordered className=" shadow-sm">
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <p className="font-bold text-black text-2xl relative right-40">SchoolSathi</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <div className="flex flex-row">
              <Input type="search" label="search" variant="bordered" className=" h-6 mb-3 w-64" />
              <div className="ml-96"><Navtab/></div>
              </div>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2 text-black">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings" className="text-black">My Settings</DropdownItem>
              <DropdownItem className="text-black" key="team_settings">Team Settings</DropdownItem>
              <DropdownItem className="text-black" key="analytics">Analytics</DropdownItem>
              <DropdownItem className="text-black" key="system">System</DropdownItem>
              <DropdownItem className="text-black" key="configurations">Configurations</DropdownItem>
              <DropdownItem className="text-black" key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem  className="text-black bg-red-400" key="logout" color="danger" href="/">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar> <VerticalTabs/></div></>
    
  );
}
