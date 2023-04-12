// import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="text-black max-w-[65%] grid gap-6 justify-center items-center py-8">
      <h1 className="text-4xl font-bold text-center">
        Automatisez votre cycle de facturation
      </h1>
      <p className="text-center leading-8">
        {`La saisie manuelle des factures pour la transformer de son format papier en information numérique est un long processus qui est souvent source d’erreur ou omissions. Grace a notre outil, automatisez en clin d’oeil la conversation de vos factures numérisées en données utilisables par votre solution comptable ou système d’information. Profitez de nos capacités d’archivage en ligne pour trouver vos factures en un temps record a toute heure de la journée.`}
      </p>
      {/* <div className="my-3"></div> */}
    </div>
  );
};

export default Hero;
