"use client";
import React from "react";
import Image from 'next/image';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#232C64] overflow-hidden pt-20 pb-10 md:pt-24 md:pb-16">
      
      {/* Quadrillage en arrière-plan */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 z-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`border-r border-b border-[#202337] 
              ${(i + 1) % 6 === 0 ? "border-r-0" : ""}
              ${i >= 24 ? "border-b-0" : ""}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12">
        
        {/* Colonne gauche (Texte) - après l'image sur mobile */}
        <div className="text-white w-full md:w-1/2 max-w-2xl text-center md:text-left px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] font-bold leading-tight">
            Centre de formation
          </h1>
          <div className="relative mt-2 md:mt-4">
            <span className="text-4xl sm:text-6xl md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight block">
              professionnelle
            </span>
          </div>
          <p className="text-base md:text-lg text-gray-300 mt-4 md:mt-6 max-w-md mx-auto md:mx-0">
            Votre parcours professionnel commence avec nous.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="#"
              aria-label="Commencer l'inscription"
              className="inline-block bg-[#DB3234] text-white font-semibold text-base md:text-lg py-3 px-6 md:py-3.5 md:px-8 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc947]"
            >
              Commencer
            </Link>
          </div>
        </div>

        {/* Colonne droite (Image) - vient en premier sur mobile */}
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
          
          {/* Cercle jaune */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[300px] md:w-[350px] aspect-square rounded-full bg-yellow-400 z-0"></div>

          {/* Losanges décoratifs */}
          <div className="hidden sm:block">
            {/* Losanges gauches */}
              <div className="absolute top-[20%] left-[5%] w-3.5 h-3.5 bg-[#DB3234] transform rotate-45 opacity-80 z-20"></div>
              <div className="absolute bottom-[5%] left-[10%] w-4 h-4 bg-[#00d084] transform rotate-45 opacity-75 z-20"></div>
  
            {/* Losanges droits */}
              <div className="absolute top-[5%] right-[5%] w-3.5 h-3.5 bg-white transform rotate-45 opacity-80 z-20"></div>
              <div className="absolute bottom-[15%] right-[10%] w-4 h-4 bg-[#FED136] transform rotate-45 opacity-75 z-20"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative w-full h-full max-w-md mx-auto">
              <Image
                src="/images/photo.png"
                alt="Solution innovante"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain", objectPosition: "center bottom" }}
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Témoignages - version mobile */}
          <div className="md:hidden  gap-4 absolute bottom-0 left-0 right-0 flex justify-around z-20 px-4 mb-[4vh]">
            <div className="bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2 max-w-[160px]">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image src="/images/deux.png" alt="Sophie M." width={32} height={32} className="object-cover" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-800">Sophie M.</p>
                <p className="text-[0.65rem] text-gray-500">“Formateurs...“</p>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-lg flex items-center space-x-2 max-w-[160px]">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image src="/images/diplome.jpg" alt="Pierre L." width={32} height={32} className="object-cover" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-800">Pierre L.</p>
                <p className="text-[0.65rem] text-gray-500">“Certification...“</p>
              </div>
            </div>
          </div>

          {/* Témoignages - version desktop */}
          <div className="hidden md:block">
            <div className="absolute top-40 right-0 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3 max-w-[220px] z-20 mt-6">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="/images/cache.jpg" alt="Sophie M." width={40} height={40} className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Sophie M.</p>
                <p className="text-xs text-gray-500">“Formateurs à l‘écoute“</p>
              </div>
            </div>
            <div className="absolute bottom-20 left-0 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3 max-w-[220px] z-20 mt-6">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src="/images/diplome.jpg" alt="Pierre L." width={40} height={40} className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Pierre L.</p>
                <p className="text-xs text-gray-500">“Certification rapide“</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
