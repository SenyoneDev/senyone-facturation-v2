import {
  BsArrowDownShort,
  BsFiletypeCsv,
  BsFiletypeJson,
  BsFiletypeTxt,
  BsFiletypeXlsx,
} from "react-icons/bs";
import { downloadAsCsv, downloadAsJson } from "../../services/download";

const ICONSIZE = 40;
const Download = ({ data }) => {
  const items = [
    {
      icon: <BsFiletypeXlsx size={ICONSIZE} />,
      action: () => {},
    },
    {
      icon: <BsFiletypeCsv size={ICONSIZE} />,
      action: () => downloadAsCsv(data),
    },
    {
      icon: <BsFiletypeTxt size={ICONSIZE} />,
      action: () => {},
    },
    {
      icon: <BsFiletypeJson size={ICONSIZE} />,
      action: () => downloadAsJson(data),
    },
  ];

  return (
    <div className="text-center">
      <img className="mx-auto h-20" src={"/step2.svg"} alt="step indication" />
      <h2 className="w-fit p-8 py-6 mx-auto mb-4 text-2xl bg-[#F2F2F2] rounded-[24px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        Téléchargez !
      </h2>
      <p className="font-semiboldd leading-8">
        {"Choisissez l’un des  formats suivants et télécharger vos données ! "}
      </p>
      <div className="flex gap-6 w-fit mx-auto mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={item.action}
            className="bg-primary text-white rounded-3xl p-4 relative cursor-pointer hover:bg-secondary active:bg-complementary"
          >
            <div className="absolute bottom-0 right-0 text-white p-1 animate-bounce">
              <BsArrowDownShort size={20} />
            </div>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
