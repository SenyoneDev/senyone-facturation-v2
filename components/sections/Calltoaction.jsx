import Image from "next/image";
import Link from "next/link";
import React from "react";

const Calltoaction = () => {
  return (
    <div className="grid gap-6 py-8">
      <h2 className="text-center">
        Prochaine étape :{" "}
        <span className="text-complementary">{"l’automatisation !"}</span>
      </h2>
      <p className="text-center leading-8">
        Une fois que vos factures ont été numérisées, Senyone vous offre la
        saisie automatique dans vos logiciels comptables.
        <br />
        {
          "Qu’il s’agisse de Sage, Oracle, SAP ou tout autre logiciel, nous vous"
        }
      </p>

      <div className="grid grid-cols-2 items-center gap-8">
        <Image src="/adsImage.png" width={600} height={400} />
        <div className="grid gap-10">
          <div className="flex gap-2">
            <div className="w-64">
              <Image src="/time.png" width={70} height={10} />
            </div>
            <div>
              <h3 className="font-bold text-lg pb-2">Gagnez du temps</h3>
              <p>
                {
                  "Avec Senyone, votre chemin vers la transformation numérique devient rentable et rapide. Vous n’avez plus qu’à contrôler et valider vos factures !"
                }
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <div className="w-64">
                <Image src="/calendar.png" width={70} height={70} />
              </div>
              <div>
                <h3 className="font-bold text-lg pb-2">
                  Archivez en toute conformité
                </h3>
                <p>
                  {
                    "Vos documents sont archivés selon la règlementation en vigueur. Senyone vous offre des options sur mesure selon vos besoins nationaux/internationaux."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        className="font-semibold text-white w-fit p-3 px-8 rounded-full bg-complementary mx-auto"
        href="https://www.senyone.sn/#contact"
        _target="blank"
      >
        contactez-nous
      </Link>
    </div>
  );
};

export default Calltoaction;
