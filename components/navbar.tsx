import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons for the menu
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md fixed w-full z-10">
      <h1 className="text-xl font-bold text-indigo-600">Logo</h1>

      {/* Desktop Menu */}
      {/* <ul className="hidden md:flex gap-6 text-gray-700">
        <li className="hover:text-indigo-600 cursor-pointer">Home</li>
        <li className="hover:text-indigo-600 cursor-pointer">About</li>
        <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
      </ul> */}
      <Sheet>
        <SheetTrigger>Login</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Get Started!</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-4 pt-10 font-semibold ">
                <Link href="#" className="hover:underline">SIGN UP</Link>
                <Link href="#" className="hover:underline">LOGIN</Link>
                <hr />
                <Link href="#" className="hover:underline">EVENTS</Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </nav>
  );
};

export default Navbar;
