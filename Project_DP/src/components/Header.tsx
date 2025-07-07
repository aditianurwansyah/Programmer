import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navItems = [
    { name: "Beranda", href: "#" },
    { name: "Deteksi AI", href: "#" },
    { name: "Cerita Budaya", href: "#" },
    { name: "Forum", href: "#" },
    { name: "Kuis", href: "#" },
    { name: "Dashboard", href: "#" },
  ];

  return (
    <>
      <header className="bg-brown-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-cream-500 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-brown-800 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-cream-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-cream-100">BhraGha</h1>
                <p className="text-cream-300 text-sm">
                  Platform Edukasi Sosial Budaya
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-cream-200 hover:text-gold-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Login Button */}
            <Button
              onClick={() => setIsLoginOpen(true)}
              className="bg-gold-600 hover:bg-gold-700 text-brown-900 font-semibold px-6 py-2 transition-all duration-200 transform hover:scale-105"
            >
              Login
            </Button>
          </div>
        </div>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
