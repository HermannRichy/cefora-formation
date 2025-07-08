'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#232C64] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Bloc 1 : Logo, nom, description, réseaux */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/images.jpeg"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-xl font-bold">CEFORA FORMATION</span>
            </Link>
            <p className="text-white leading-relaxed text-lg">
              Une institution moderne dédiée à l’excellence académique et à l’innovation.
            </p>
            <div className="flex space-x-4 text-xl text-white">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Bloc 2 : Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mt-3">Navigation</h3>
            <ul className="space-y-3 text-white text-lg">
              <li><Link href="/filieres" className="hover:text-yellow-400 transition-colors">Filières</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">À propos</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link href="/inscription" className="hover:text-yellow-400 transition-colors">Inscription</Link></li>
            </ul>
          </div>

          {/* Bloc 3 : Filières */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mt-3">Filières</h3>
            <ul className="space-y-3 text-white text-lg">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Informatique</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Gestion</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Droit</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Médecine</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Auxiliaire</Link></li>
            </ul>
          </div>

          {/* Bloc 4 : Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mt-3">Company</h3>
            <ul className="space-y-3 text-white text-lg">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Évènements</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Confidentialité</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Forum d’aide</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Assistance</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#FED136] text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Céfora Formation. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
