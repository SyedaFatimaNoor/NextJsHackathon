"use client"
import Link from 'next/link';
import { Search, ShoppingCart, CircleUserRound, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 border-b">
        {/* Left Icon */}
        <Search className="w-5 h-5 text-[#2A254B] cursor-pointer" />

        {/* Logo */}
        <Link href="/" className="font-normal text-2xl text-[#2A254B]">
          Avion
        </Link>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
        <Link href="/Shopping"><ShoppingCart className="w-5 h-5 text-[#2A254B] cursor-pointer" /></Link>
          <CircleUserRound className="w-5 h-5 text-[#2A254B] cursor-pointer" />
        </div>

        {/* Mobile Menu Icon */}
        <Menu
          className="w-6 h-6 text-[#2A254B] cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white w-full border-t`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link href="/About" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Plant pots
          </Link>
          <Link href="/ceramics" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Ceramics
          </Link>
          <Link href="/tables" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Tables
          </Link>
          <Link href="/chairs" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Chairs
          </Link>
          <Link href="/crockery" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Crockery
          </Link>
          <Link href="/tableware" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Tableware
          </Link>
          <Link href="/cutlery" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Cutlery
          </Link>
        </div>
      </div>

      {/* Category Navigation for Larger Screens */}
      <div className="hidden md:block w-full border-t">
        <div className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8 py-4 px-8 lg:px-16">
          <Link href="/About" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Plant pots
          </Link>
          <Link href="/" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Ceramics
          </Link>
          <Link href="/tables" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Tables
          </Link>
          <Link href="/chairs" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Chairs
          </Link>
          <Link href="/crockery" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Crockery
          </Link>
          <Link href="/tableware" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Tableware
          </Link>
          <Link href="/cutlery" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Cutlery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
