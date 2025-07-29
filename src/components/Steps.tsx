import Image from 'next/image';

export default function SectionSteps() {
  return (
    <section className="bg-[#232C64] py-8 md:py-16 px-4 sm:px-6 text-white relative overflow-hidden">
      
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        {/* Colonne gauche - Version mobile optimisée */}
        <div className="relative pl-4 md:pl-8 h-full flex flex-col space-y-3 md:space-y-4">
            
          {/* Premier commentaire (jaune) */}
         <div className="bg-yellow-400 text-black p-3 rounded-md shadow-lg relative w-full md:w-3/4 z-10">
            {/* Flèche supplémentaire en haut à droite */}
            <div className="absolute -top-4 -right-8 w-6 h-6 z-20">
                <Image 
                    src="/images/shapes (1).png" 
                    width={24}
                    height={24}
                    alt="Flèche décorative"
                    className="object-contain"
                />
            </div>

            {/* Losanges décoratifs existants */}
            <div className="absolute -top-5 -left-5 w-2 h-2 md:w-3 md:h-3 bg-[#DB3234] rotate-45 z-20"></div>
            <div className="absolute ml-[50%] -mt-[12%] w-2 h-2 md:w-3 md:h-3 bg-[#00d084] rotate-45 z-20"></div>
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white overflow-hidden">
                    <Image 
                        src="/images/ecole.jpg" 
                        width={24} 
                        height={24} 
                        alt="Profile" 
                        className="object-cover"
                        priority
                    />
                </div>
                <span className="font-medium text-xs">Choisir une formation.</span>
            </div>
            <p className="text-xs mt-1">
                J‘ai d‘abord contacté CEFORA pour m‘informer sur leurs formations. Ils m‘ont bien guidée !
            </p>
        </div>

        {/* Flèche jaune vers orange - Mobile friendly */}
        <div className="w-full flex justify-center px-2">
            <Image 
              src="/images/Vector 28.png" 
              width={60} 
              height={15} 
              alt="Flèche" 
              className="h-3 md:h-4 object-contain"
              priority
            />
        </div>

        {/* Deuxième commentaire (orange) */}
        <div className="bg-orange-400 sm:ml-[23%] lg:ml-[23%] text-white p-3 rounded-md shadow-lg relative w-11/12 md:w-1/2 mx-auto z-10">
            {/* Losanges décoratifs existants */}
            <div className="absolute -ml-15 -left-1 w-2 h-2 md:w-3 md:h-3 bg-[#8C8C8C] rotate-45 z-20"></div>
            <div className="absolute -bottom-10 -right-15 w-2 h-2 md:w-3 md:h-3 bg-[#FED136] rotate-45 z-20"></div>
            <div className="flex items-center gap-2">
                <span className="font-medium text-xs">Remplir le dossier.</span>
            </div>
            <p className="text-xs mt-1">
                L‘inscription a été fait en ligne. L‘équipe est très réactive !
            </p>
        </div>

        {/* Flèche orange vers rouge - Mobile friendly */}
        <div className="w-11/12 flex justify-center px-2">
            <Image 
              src="/images/Vector 29.png" 
              width={60} 
              height={15} 
              alt="Flèche" 
              className="h-3 md:h-4 object-contain"
            />
        </div>

        {/* Troisième commentaire (rouge) */}
        <div className="bg-[#DB3234] text-white p-3 rounded-md shadow-lg relative w-full md:w-3/4 z-10">
            {/* Flèche supplémentaire en haut à gauche */}
            <div className="absolute -top-4 -left-7 w-6 h-6 z-20">
                <Image 
                    src="/images/shapes (2).png" 
                    width={24}
                    height={24}
                    alt="Flèche décorative"         
                    className="object-contain"
                />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white overflow-hidden">
                <Image 
                  src="/images/student.jpg" 
                  width={24} 
                  height={24} 
                  alt="Profile" 
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-xs md:text-sm">Commencez la formation.</span>
            </div>
            <p className="text-xs md:text-sm mt-1">Je suis en pleine formation à CEFORA.</p>
          </div>
        </div>

        {/* Colonne droite - Version mobile optimisée */}
        <div className="pt-3 md:pt-6 flex flex-col">
  <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-2 md:mb-4">S‘inscrire chez CEFORA Formation</h2>
  <p className="text-gray-300 mb-3 text-xs md:text-base">
    Suivez ces étapes simples pour rejoindre nos formations professionnelles certifiantes.
  </p>

  {/* Losanges alignés - Version mobile */}
  <div className="relative flex-grow min-h-[100px] md:min-h-[150px]">
    {/* Étape 1 */}
    <div className="absolute top-[10%] md:top-[15%] left-0 flex items-start">
      <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rotate-45"></div>
      <span className="ml-2 text-xs md:text-sm text-gray-300">Choisir une formation</span>
    </div>

    {/* Étape 2 */}
    <div className="absolute top-[45%] md:top-[50%] left-[15%] md:left-[20%] flex items-start">
      <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-400 rotate-45"></div>
      <span className="ml-2 text-xs md:text-sm text-gray-300">Remplir le dossier</span>
    </div>

    {/* Étape 3 */}
    <div className="absolute top-[80%] md:top-[85%] left-[30%] md:left-[40%] flex items-start">
      <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rotate-45"></div>
      <span className="ml-2 text-xs md:text-sm text-gray-300">Commencer la formation</span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}