'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Hobbies', path: '/hobbies' },
    { name: 'Goals', path: '/goals' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-slate-900 text-white p-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="hover:text-slate-300 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center pb-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsOpen(false)}
              className="block p-2 hover:bg-slate-800 rounded transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
