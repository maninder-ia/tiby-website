"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logo } from "@/assets";
import { useState, useEffect } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      // Update scrolled state for background changes
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", controlNavbar);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Handle navigation with auto-scrolling to sections
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu after click
    
    // If we're not on the home page, navigate there first, then scroll to the section
    if (pathname !== '/') {
      router.push('/');
      
      // Set a short timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      // If we're already on the home page, just scroll to the section
      scrollToSection(href);
    }
  };
  
  // Helper function to scroll to specific sections
  const scrollToSection = (section) => {
    let sectionId;
    
    switch(section) {
      case '/use-cases':
        sectionId = 'overview-section';
        break;
      case '/how-it-works':
        sectionId = 'features-section';
        break;
      case '/deployment':
        sectionId = 'insights-section';
        break;
      default:
        return; // If it's not one of these special sections, just return
    }
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Deployment", href: "/deployment" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled ? 'border-b-2 border-gray-200' : ''
      } ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backgroundColor: scrolled || isMobileMenuOpen
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'transparent',
        backdropFilter: scrolled || isMobileMenuOpen ? 'blur(5px)' : 'none',
        WebkitBackdropFilter: scrolled || isMobileMenuOpen ? 'blur(5px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Tiby.AI Logo" width={120} height={120} />
          </Link>

          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors cursor-pointer ${
                  pathname === link.href ? "text-[#6741d9]" : "text-black hover:text-[#6741d9]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <Link
            href="/demo"
            className="hidden md:block button-color text-white px-6 py-2 rounded-lg font-medium hover:bg-[#5835b0] transition-colors"
          >
            Book Demo
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-[400px] opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-3 px-4 font-medium transition-colors ${
                  pathname === link.href 
                    ? "text-[#6741d9] bg-purple-50" 
                    : "text-black hover:text-[#6741d9] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/demo"
              className="block mt-4 mx-4 button-color text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5835b0] transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 