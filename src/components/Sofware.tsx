import React from "react";
import {
  FaUserGraduate,
  FaChartLine,
  FaGlobe,
  FaLightbulb,
  FaLaptopCode,
  FaSchool,
  FaBook,
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";
import Link from "next/link";

const Sofware = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16 py-12">
        <section className="w-full py-20 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex-shrink-0 mx-auto">
              {/* Cercle extérieur avec icônes */}
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-gray-300 flex items-center justify-center">
                <FaUserGraduate className="absolute text-blue-500 text-lg -top-2 left-1/2 -translate-x-1/2" />
                <FaChartLine className="absolute text-red-500 text-lg top-1/2 -translate-y-1/2 -left-2" />
                <FaGlobe className="absolute text-green-500 text-lg -bottom-2 left-1/2 -translate-x-1/2" />
                <FaLightbulb className="absolute text-yellow-400 text-lg top-1/2 -translate-y-1/2 -right-2" />
              </div>

              {/* Cercle intermédiaire avec icônes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full border-2 border-gray-400 flex items-center justify-center">
                <FaLaptopCode className="absolute text-purple-500 text-lg -top-2 left-1/2 -translate-x-1/2" />
                <FaBook className="absolute text-indigo-500 text-lg top-1/2 -translate-y-1/2 -left-2" />
                <FaGraduationCap className="absolute text-teal-500 text-lg -bottom-2 left-1/2 -translate-x-1/2" />
                <FaBriefcase className="absolute text-orange-500 text-lg top-1/2 -translate-y-1/2 -right-2" />
              </div>

              {/* Cercle intérieur avec icône centrale */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full border-2 border-gray-500 flex items-center justify-center">
                <FaSchool className="text-2xl text-gray-700" />
              </div>
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi choisir CEFORA FORMATION ?
              </h2>
              <p className="text-gray-600 mb-6">
                Nos formations sont pratiques, innovantes et vous permettent de vous 
                insérer facilement dans la vie socio-professionnelle. Vous pouvez être
                autonome et compétitif sur le marché de l’emploi. Commencez vos études
                à Cefora Formation et continuez dans des pays africain et européen.
              </p>
              <Link
                href="/inscription"
                className="bg-[#DB3234] text-white px-4 py-2 rounded-full font-medium"
              >
                En savoir plus +
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sofware;