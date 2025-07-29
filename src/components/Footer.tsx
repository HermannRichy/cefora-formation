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
            <Link href="/" className="flex items-center">
              {/* === NOUVELLES MODIFICATIONS POUR LE LOGO ET TEXTE DU FOOTER === */}
              {/* Conteneur du logo avec des tailles réduites et stables pour desktop */}
              <div className="relative h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full overflow-hidden">
                <Image
                  src="/images/images.jpeg"
                  alt="Logo CEFORA FORMATION"
                  fill
                  priority
                  // Tailles de l'image adaptées : 40px mobile, "
                  className="object-cover"
                />
              </div>
              {/* Texte "CEFORA FORMATION" avec des tailles réduites pour le footer */}
              <span className="text-white text-base sm:text-lg font-bold ml-3">CEFORA FORMATION</span>
              {/* === FIN DES NOUVELLES MODIFICATIONS === */}
            </Link>
            {/* La description reste lisible sans être surdimensionnée */}
            <p className="text-white leading-relaxed text-base md:text-lg">
              Une institution moderne dédiée à l’excellence académique et à l’innovation.
            </p>
            {/* Les icônes de réseaux sociaux restent à une taille confortable */}
            <div className="flex space-x-4 text-xl md:text-2xl text-white">
              <a href="#" className="hover:text-yellow-400 transition-colors" aria-label="Notre page Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors" aria-label="Notre compte Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors" aria-label="Notre profil LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors" aria-label="Notre compte Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Bloc 2 : Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3 text-white text-base md:text-lg">
              <li><Link href="/filieres" className="hover:text-yellow-400 transition-colors">Filières</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">À propos</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link href="/inscription" className="hover:text-yellow-400 transition-colors">Inscription</Link></li>
            </ul>
          </div>

          {/* Bloc 3 : Filières */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Filières</h3>
            <ul className="space-y-3 text-white text-base md:text-lg">
              <li><Link href="/programmes/informatique" className="hover:text-yellow-400 transition-colors">Informatique</Link></li>
              <li><Link href="/programmes/gestion" className="hover:text-yellow-400 transition-colors">Gestion</Link></li>
              <li><Link href="/programmes/droit" className="hover:text-yellow-400 transition-colors">Droit</Link></li>
              <li><Link href="/programmes/medecine" className="hover:text-yellow-400 transition-colors">Médecine</Link></li>
              <li><Link href="/programmes/auxiliaire" className="hover:text-yellow-400 transition-colors">Auxiliaire</Link></li>
            </ul>
          </div>

          {/* Bloc 4 : Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-white text-base md:text-lg">
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