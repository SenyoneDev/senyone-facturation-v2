import React from "react";
import { DiDropbox, DiGoogleDrive, DiOnedrive } from "react-icons/di";
import {
  BsArrowDownShort,
  BsCloudUpload,
  BsFilePdfFill,
  BsFiletypeCsv,
  BsFiletypeJson,
  BsFiletypeTxt,
  BsFiletypeXlsx,
  BsImageFill,
} from "react-icons/bs";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebase";
import { getInvoiceData } from "../../services/getinvoicedata";
import { Parser } from "@json2csv/plainjs";

const Upload = () => {
  const [image, setImage] = React.useState({ source: "", file: "" });
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const imagePath = URL.createObjectURL(file);
    const storageRef = ref(storage, `files/invoices/${file.name}`);

    setImage({ source: imagePath, file });
    setLoader(true);

    if (!image) return -1;

    uploadBytesResumable(storageRef, file)
      .then(() => {})
      .catch(() => {});

    getInvoiceData(image.file)
      .then((res) => {
        console.log(res);
        setData(res);
        setLoader(false);
      })
      .catch((e) => {
        console.log(e);
        setLoader(false);
      });
  };

  if (loader) {
    return <Spinner />;
  }

  if (data) {
    return <Download data={data} />;
  }

  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <label className="bg-complementary text-2xl text-white px-10 py-7 rounded-3xl font-semibold flex gap-3 cursor-pointer">
          <BsCloudUpload className="animate-bounce" size={30} />
          Charger la facture
          <input onChange={handleChange} type="file" hidden />
        </label>
        <div className="grid gap-2">
          <div className="rounded-full bg-complementary grid justify-center items-center text-white p-1 cursor-pointer">
            <DiDropbox size={25} />
          </div>
          <div className="rounded-full bg-complementary grid justify-center items-center text-white p-1 cursor-pointer">
            <DiGoogleDrive size={25} />
          </div>
          <div className="rounded-full bg-complementary grid justify-center items-center text-white p-1 cursor-pointer">
            <DiOnedrive size={25} />
          </div>
        </div>
      </div>
      <div className="my-2 text-center grid justify-center items-center gap-4 -ml-10">
        <p className="font-bold">Fichiers acceptés :</p>
        <div className="flex gap-6 w-fit mx-auto text-[#33909c]">
          <BsFilePdfFill size={50} />
          <BsImageFill size={50} />
        </div>
      </div>
    </div>
  );
};

export default Upload;

const Spinner = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      <p className="text-center">Processing...</p>
    </div>
  );
};

const Download = ({ data }) => {
  const downloadAsJson = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(data, null, 4)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "data.json";
    document.body.appendChild(element);
    element.click();
  };

  const downloadAsCsv = () => {
    const element = document.createElement("a");
    const parser = new Parser();
    const csv = parser.parse(data);

    const file = new Blob([csv], { type: "text/csv" });
    element.href = URL.createObjectURL(file);
    element.download = "data.csv";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="text-center">
      <h2>Téléchargez</h2>
      <p className="font-semibold leading-8">
        {"votre facture dans n’importe quel format"}
      </p>
      <div className="flex gap-6 w-fit mx-auto mt-4">
        <div className="bg-primary text-white rounded-3xl p-4 relative">
          <div className="absolute bottom-0 right-0 text-white p-1 animate-bounce">
            <BsArrowDownShort size={20} />
          </div>
          <BsFiletypeXlsx size={40} />
        </div>
        <div
          onClick={downloadAsCsv}
          className="bg-primary text-white rounded-3xl p-4 relative cursor-pointer"
        >
          <div className="absolute bottom-0 right-0 text-white p-1 animate-bounce">
            <BsArrowDownShort size={20} />
          </div>
          <BsFiletypeCsv size={40} />
        </div>
        <div className="bg-primary text-white rounded-3xl p-4 relative">
          <div className="absolute bottom-0 right-0 text-white p-1 animate-bounce">
            <BsArrowDownShort size={20} />
          </div>
          <BsFiletypeTxt size={40} />
        </div>
        <div
          onClick={downloadAsJson}
          className="bg-primary text-white rounded-3xl p-4 relative cursor-pointer"
        >
          <div className="absolute bottom-0 right-0 text-white p-1 animate-bounce">
            <BsArrowDownShort size={20} />
          </div>
          <BsFiletypeJson size={40} />
        </div>
      </div>
    </div>
  );
};
