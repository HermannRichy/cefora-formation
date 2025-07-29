// components/BlogPreviewsSection.js
import Image from 'next/image';
import Link from 'next/link';

const Realblog = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-3xl font-bold text-center mb-4">Nos nouvelles filières</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Carte 1 - Soudure */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <Image
              src="/images/soudure.jpg"
              alt="Formation soudure"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
            
            {/* Overlay visible au survol */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold mb-2">Soudure Industrielle</h3>
              <p className="text-gray-200 text-sm mb-4">
                Formation complète en techniques de soudage avec certification reconnue
              </p>
              <Link href="/filieres/soudure" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors self-start">
                Découvrir la filière
              </Link>
            </div>
          </div>

          {/* Carte 2 - Restauration */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <Image
              src="/images/cuisne.jpg"
              alt="Formation restauration"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold mb-2">Arts Culinaires</h3>
              <p className="text-gray-200 text-sm mb-4">
                Devenez chef professionnel avec notre programme intensif
              </p>
              <Link href="/filieres/soudure" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors self-start">
                Découvrir la filière
              </Link>
            </div>
          </div>

          {/* Carte 3 - Logistique */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <Image
              src="/images/logistique.jpg"
              alt="Formation logistique"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold mb-2">Transport & Logistique</h3>
              <p className="text-gray-200 text-sm mb-4">
                Maîtrisez la gestion de la chaîne d’approvisionnement
              </p>
             <Link href="/filieres/soudure" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors self-start">
                Découvrir la filière
             </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Realblog;