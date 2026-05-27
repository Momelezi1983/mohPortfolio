'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white p-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/projects" onClick={() => setIsOpen(false)}>Projects</a>
        </div>
      )}
    </header>
  );
}
