import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
// import { subscribeToNewsletter } from "../services/airtable";
// import NewsletterPopup from "./NewsletterPopup";

const Footer = () => {
  const [email, setEmail] = React.useState("");
  // const [popup, setPopup] = React.useState(false);

  const ICONSIZE = 20;
  return (
    <footer className="px-8 md:px-12 lg:px-24 bg-primary">
      {/* {popup && (
        <NewsletterPopup
          defaultState={true}
          closePopup={() => setPopup(false)}
        />
      )} */}
      <div className="large-screen grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-6 text-white py-14">
        <div className="left grid gap-8 order-3">
          <div className="brand flex justufy-center items-center gap-3">
            <Image width={50} height={50} src="/Logo.svg" alt="senyone logo" />
            <span className="text-xl text-white font-bold">Senyone</span>
          </div>
          <ul className="grid gap-2 text-sm text-semibold text-gray-200">
            <li>
              50, Cité Panoramique, Liberté 6<br /> Dakar - SENEGAL 🇸🇳
            </li>
            <li>+221 77562 2255</li>
            <li>contact@senyone.sn</li>
          </ul>
          <div className="flex gap-6">
            <Link
              target={"_blank"}
              href="https://sn.linkedin.com/company/senyone"
            >
              <BsFacebook size={ICONSIZE} />
            </Link>
            <Link target={"_blank"} href="https://twitter.com/senyone_sn">
              <BsTwitter size={ICONSIZE} />
            </Link>
            <Link target={"_blank"} href="">
              <BsLinkedin size={ICONSIZE} />
            </Link>
          </div>
        </div>

        <div className="h-fit grid md:place-content-center order-2">
          <h3 className="text-white font-semibold mb-4">Senyone</h3>
          <ul className="grid gap-2 text-sm text-semibold text-gray-200">
            <li>
              <Link target={"_blank"} href="https://senyone.sn/confidentiality">
                Politique de confidentialité.
              </Link>
            </li>
            <li>
              <Link target={"_blank"} href="https://senyone.sn/legales">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link target={"_blank"} href="https://senyone.sn/conditions">
                {"Conditions d'utilisation"}
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-6 h-fit order-1 col-span-d2">
          <h3 className="font-bold">{`Rejoignez l'Aventure`}</h3>
          <p className="text-sm text-grayFooter">
            {`Inscrivez-vous à notre liste de diffusion pour rester informé des
            dernières nouveautés en matière d'automatisation et d'intelligence
            artificielle`}
          </p>
          <div className="flex justify-between bg-white p-1.5 rounded-full lg:w-full md:w-fit overflow-hidden">
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-none text-black text-xs bg-transparent w-fit focus:outline-none focus:ring-0"
              type="email"
              name="email"
              id="subscriber-email"
              placeholder="Mon email est.."
            />
            <input
              className="w-fit bg-complementary p-2 px-4 rounded-full text-xs font-semibold cursor-pointer hover:shadow-lg"
              type="button"
              value="Je m'inscris"
            />
          </div>
        </div>
      </div>
      <div className="large-screen py-4 text-center text-xs text-white border-t-1 border-secondary">
        Copyright © 2023 Senyone
      </div>
    </footer>
  );
};

export default Footer;
