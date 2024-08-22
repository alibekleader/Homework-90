import Link from "next/link";
import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header bg-white shadow-md px-20  p-5 container mx-auto flex justify-between items-center">
      <Link href="/countries" className="headerh1 text-3xl font-bold">
        Where in the world?
      </Link>
      <nav className="flex gap-5 items-center">
        <button className="font-semibold flex items-center gap-2">
          <IoMoonOutline />
          Dark mode
        </button>
      </nav>
    </header>
  );
};

export default Header;
