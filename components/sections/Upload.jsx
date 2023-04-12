import React from "react";
import { DiDropbox, DiGoogleDrive, DiOnedrive } from "react-icons/di";
import { BsCloudUpload, BsFilePdfFill, BsImageFill } from "react-icons/bs";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebase";
import { getInvoiceData } from "../../services/getinvoicedata";
import Download from "./Download";
import Loader from "../Loader";

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

  if (loader) return <Loader />;
  if (data) return <Download data={data} />;

  return (
    <div>
      <img className="mx-auto h-20" src={"/step1.svg"} alt="step indication" />
      <div className="flex justify-center items-center gap-4">
        <label className="bg-complementary text-2xl text-white px-10 py-7 rounded-3xl font-semibold flex gap-3 cursor-pointer hover:bg-primary active:bg-secondary">
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
