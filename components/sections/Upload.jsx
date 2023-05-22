import React from "react";
import { DiDropbox, DiGoogleDrive, DiOnedrive } from "react-icons/di";
import { BsCloudUpload, BsFilePdfFill, BsImageFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { getInvoiceData } from "../../services/getinvoicedata";
import Download from "./Download";
import Loader from "../Loader";
import Visualize from "./Visualize";
import { useSession } from "next-auth/react";

const Upload = () => {
  const [loader, setLoader] = React.useState(false);
  const [file, setFile] = React.useState(false);
  const [data, setData] = React.useState(null);
  const { data: session } = useSession();

  const popupSignin = (url, title) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;

    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${
        550 / systemZoom
      },top=${top},left=${left}`
    );

    newWindow?.focus();
  };

  if (file && session) {
    const username = session?.user?.email?.split("@")[0];
    setLoader(true);
    getInvoiceData(file, username).then((res) => {
      setData(res);
      setLoader(false);
    });
    setFile(null);
  }

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!session) popupSignin("/auth/google", "SignIn with google");
    setFile(file);
  };

  if (loader) return <Loader />;
  if (data)
    return (
      <div className="flex space-x-8 items-start my-8">
        <Download data={data.data} />
        <Visualize link={data.archive.sharableLink} />
      </div>
    );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: -200 }}
      >
        <img
          className="mx-auto h-20"
          src={"/step1.svg"}
          alt="step1 indication"
        />
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Upload;
