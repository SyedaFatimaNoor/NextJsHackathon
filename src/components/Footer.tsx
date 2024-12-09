import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';  
import Link from 'next/link';

const Footer = () => {  
  return (  
    <footer className="bg-[#2A254B] text-white">  
      <div className="px-8 md:px-16 py-16">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">  
          <div>  
            <h3 style={{ fontFamily: 'ClashDisplay' }} className="font-light text-base mb-4">Menu</h3>  
            <ul className="space-y-2 font-light text-[14px]">  
              <li><Link href="/new-arrivals" className="text-sm hover:underline">New arrivals</Link></li>  
              <li><Link href="/best-sellers" className="text-sm hover:underline">Best sellers</Link></li>  
              <li><Link href="/recently-viewed" className="text-sm hover:underline">Recently viewed</Link></li>  
              <li><Link href="/popular-this-week" className="text-sm hover:underline">Popular this week</Link></li>  
              <li><Link href="/ProductListing" className="text-sm hover:underline">All products</Link></li>  
            </ul>  
          </div>  
          
          <div>  
            <h3 style={{ fontFamily: 'ClashDisplay' }} className="font-light text-base mb-4">Categories</h3>  
            <ul className="space-y-2 font-light text-[14px]">  
              <li><Link href="/crockery" className="text-sm hover:underline">Crockery</Link></li>  
              <li><Link href="/furniture" className="text-sm hover:underline">Furniture</Link></li>  
              <li><Link href="/homeware" className="text-sm hover:underline">Homeware</Link></li>  
              <li><Link href="/plant-pots" className="text-sm hover:underline">Plant pots</Link></li>  
              <li><Link href="/chairs" className="text-sm hover:underline">Chairs</Link></li>  
              <li><Link href="/crockery" className="text-sm hover:underline">Crockery</Link></li>  
            </ul>  
          </div>  
          
          <div>  
            <h3 style={{ fontFamily: 'ClashDisplay' }} className="font-light text-base mb-4">Our company</h3>  
            <ul className="space-y-2 font-light text-[14px]">  
              <li><Link href="/About" className="text-sm hover:underline">About us</Link></li>  
              <li><Link href="/vacancies" className="text-sm hover:underline">Vacancies</Link></li>  
              <li><Link href="/ContactUs" className="text-sm hover:underline">Contact us</Link></li>  
              <li><Link href="/privacy" className="text-sm hover:underline">Privacy</Link></li>  
              <li><Link href="/returns-policy" className="text-sm hover:underline">Returns policy</Link></li>  
            </ul>  
          </div>  
          
          <div>  
            <h3 style={{ fontFamily: 'ClashDisplay' }} className="font-light text-base mb-4">Join our mailing list</h3>  
            <div className="flex flex-col md:flex-row gap-4">  
              <input  
                type="email"  
                placeholder="your@email.com"  
                className="w-[509px] flex-1 py-3 px-4 text-sm bg-[#FFFFFF26] text-[#F9F9F9] border-none focus:outline-none placeholder:text-[#B3B3B3]"  
              />  
              <button className="py-3 px-8 bg-[#ffff] text-[#2A254B] text-sm font-medium">  
                Sign up  
              </button>  
            </div>  
          </div>  
        </div>  
        
        <div className="border-t border-[#4E4D93] pt-8">  
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">  
            <p className="text-sm">Copyright 2022 Avion LTD</p>  
            <div className="flex gap-6">  
              <Linkedin className="w-6 h-6 cursor-pointer" />  
              <Facebook className="w-6 h-6 cursor-pointer" />  
              <Instagram className="w-6 h-6 cursor-pointer" />  
              <Twitter className="w-6 h-6 cursor-pointer" />  
            </div>  
          </div>  
        </div>  
      </div>  
    </footer>  
  );  
};  

export default Footer;