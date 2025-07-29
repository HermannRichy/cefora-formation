'use client';

import React from "react";
import { FaMedal, FaTrophy, FaAward } from "react-icons/fa";

// 1. Définir un type spécifique pour les types de récompenses
// Cela indique explicitement que 'type' ne peut être que 'gold', 'silver' ou 'bronze'.
type AwardType = 'gold' | 'silver' | 'bronze';

// 2. Définir une interface pour une récompense individuelle
// Cela garantit que chaque objet de récompense suit une structure définie,
// y compris le 'type' qui utilise notre nouveau AwardType.
interface Award {
  name: string;
  date: string;
  type: AwardType;
}

// 3. Appliquer le type à notre tableau 'awards'
// En spécifiant que 'awards' est un tableau de type 'Award',
// TypeScript sait maintenant que chaque 'award.type' sera un AwardType.
const awards: Award[] = [
  {
    name: "Hermann-Ulrich HOUNNOUVI",
    date: "25 Oct, 2025",
    type: "gold",
  },
  {
    name: "Anne-Marie PADONOU",
    date: "25 Oct, 2025",
    type: "silver",
  },
  {
    name: "Roland Boris BALLO",
    date: "25 Oct, 2025",
    type: "bronze",
  },
  {
    name: "Jane Cooper",
    date: "25 Oct, 2025",
    type: "gold",
  },
  {
    name: "Esther Howard",
    date: "25 Oct, 2025",
    type: "silver",
  },
  {
    name: "Esther Howard",
    date: "25 Oct, 2025",
    type: "bronze",
  },
];

const Awards = () => {
  // La fonction getMedalIcon attend maintenant un type 'AwardType',
  // ce qui correspond parfaitement au type de 'award.type' défini ci-dessus.
  const getMedalIcon = (type: AwardType) => {
    switch(type) {
      case 'gold':
        return <FaTrophy className="text-yellow-500 text-2xl" />;
      case 'silver':
        return <FaMedal className="text-gray-400 text-2xl" />;
      case 'bronze':
        return <FaAward className="text-amber-600 text-2xl" />;
      default:
        // Ce cas par défaut est une bonne pratique, même si avec les types stricts,
        // il ne devrait normalement jamais être atteint.
        return <FaMedal className="text-gray-500 text-2xl" />;
    }
  };

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Récompenses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#DB3234] pb-4 px-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  {/* Ici, award.type est maintenant reconnu comme AwardType, résolvant l'erreur. */}
                  {getMedalIcon(award.type)}
                </div>
                <p className="text-lg font-medium text-gray-800">
                  {award.name}
                </p>
              </div>
              <span className="text-sm text-gray-500">{award.date}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-[#DB3234] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition flex items-center mx-auto">
            <FaMedal className="mr-2" />
            Voir tout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Awards;