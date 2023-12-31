import Link from "next/link";

const Visualize = ({ link }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="mx-auto h-20" src={"/step3.svg"} alt="step indication" />
      <Link
        href={link}
        target="_blank"
        className="w-fit p-8 py-6 mx-auto mb-4 text-2xl font-bold bg-[#F2F2F2] rounded-[24px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      >
        Visualisez !
      </Link>
      <p className="w-[85%]">
        {"Nous avons archivé et classé votre facture numériquement*."} <br />
        {"L’archivage numérique est légalisé au Sénégal par la loi XXX."} <br />
        <br />
        {
          "Tout cela est complètement personnalisable en fonction de vos besoins en mode PRO."
        }
      </p>
    </div>
  );
};

export default Visualize;
