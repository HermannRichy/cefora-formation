"use client";
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-[#232C64] sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo avec taille unifiée et adaptative */}
          <Link href="/" className="flex items-center">
            {/* Conteneur du logo avec tailles responsives */}
            <div className="relative h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full overflow-hidden">
              <Image
                src="/images/images.jpeg"
                alt="Logo CEFORA FORMATION"
                fill
                priority
                // Tailles de l'image adaptées aux points de rupture
                sizes="(max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                className="object-cover"
              />
            </div>
            <span className="text-white text-base sm:text-lg font-bold ml-3">CEFORA FORMATION</span>
          </Link>

          {/* Navigation Desktop (visible sur md et plus grand) */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {/* Dropdown "Filières" */}
            <div className="relative" ref={menuRef}>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center text-white hover:text-[#DB3234] transition px-2 py-1 rounded text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
                  aria-haspopup="true"
                  aria-expanded={isMenuOpen}
                >
                  Filières
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100 overflow-hidden">
                    {[
                      { href: "/programmes/developpement-web", label: "Développement Web" },
                      { href: "/programmes/hotellerie", label: "Hôtellerie et Restauration" },
                      { href: "/programmes/delegue-medical", label: "Délégué Médical" },
                    ].map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-800 hover:text-[#ff6200] transition-colors duration-150"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Autres liens de navigation desktop */}
            {[
              { href: "/about", label: "À propos" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:text-[#DB3234] text-sm lg:text-base px-2 py-1 rounded transition whitespace-nowrap hover:bg-white/5"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Bouton CTA (Appel à l'action) pour desktop */}
          <div className="hidden md:flex">
            <Link
              href="/inscription"
              className="bg-[#DB3234] text-white px-4 py-2 rounded-full font-medium hover:opacity-90  text-sm lg:text-base whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Commencer
            </Link>
          </div>

          {/* Bouton Menu Mobile (visible uniquement sur mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white bg-[#ff6200] px-4 py-2 rounded-full text-sm hover:bg-[#e55600] transition"
              aria-label="Menu mobile"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? "Fermer" : "Menu"}
            </button>
          </div>
        </div>

        {/* Menu Mobile déroulant */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 space-y-2 bg-white rounded-lg shadow-xl p-3 text-gray-800">
            {/* Section "Filières" dans le menu mobile */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full flex justify-between items-center px-3 py-2.5 text-left font-medium text-gray-700 rounded-md hover:bg-gray-50"
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
              >
                <span>Filières</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {isMenuOpen && (
                <div className="pl-4 pt-1 space-y-1">
                  {[
                    { href: "/programmes/developpement-web", label: "Développement Web" },
                    { href: "/programmes/hotellerie", label: "Hôtellerie et Restauration" },
                    { href: "/programmes/delegue-medical", label: "Délégué Médical" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-3 py-2 text-sm hover:bg-gray-50 rounded transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Autres liens de navigation mobile */}
            {[
              { href: "/about", label: "À propos" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2.5 font-medium text-gray-400 hover:bg-gray-50 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* Bouton CTA "Commencer" pour mobile */}
            <Link
              href="/inscription"
              className="block mt-2 text-center bg-[#DB3234] text-white py-2.5 rounded-full font-medium hover:bg-[#e55600] transition shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Commencer
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}