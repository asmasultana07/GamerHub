import React from "react";
import logoImage from "../assets/Gamelogoo.png";
import MyContainer from "../components/MyContainer";

const Footer = () => {
  return (
    <footer className="flex-1">
      <div className="footer sm:footer-horizontal bg-base-200 text-base-100  p-10 md:p-20">
        
        <aside className="flex items-center space-x-3">
          <img src={logoImage} alt="" className="w-8 h-8" />
          <div className="pt-3">
            <h3 className=" font-black text-3xl text-[#627382] mb-2">
            GameHub </h3>
          <p className="font-semibold text-sm">Enjoy millions of the latest games </p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title font-bold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold">GameHub</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Feature</a>
          <a className="link link-hover">Popular Games</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-slate-950 text-white text-base-content p-4">
        <p>Copyright © {new Date().getFullYear()} - All right reserved by GameZone</p>
      </div>
    </footer>
  );
};

export default Footer;
