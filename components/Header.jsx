// import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const DefaultHeader = () => {
  const [fixeMenu, setFixeMenu] = useState(false);
  const MENUSIZE = 15;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFixeMenu(window.scrollY > MENUSIZE ? true : false);
    });

    return () => {
      window.addEventListener("scroll", () => {
        setFixeMenu(window.scrollY > MENUSIZE ? true : false);
      });
    };
  }, []);

  return (
    <div
      className={`w-full flex justify-between items-center py-5 px-12 bg-white shadow z-50 ${
        fixeMenu ? "fixed" : "relative"
      }`}
    >
      <div className="flex justufy-center items-center gap-3">
        <Image
          className="object-contain"
          width={44}
          height={41}
          src="/Logo.svg"
          alt="Logo senyone"
        />
        <span className="text-xl font-bold text-primary">Senyone</span>
      </div>
      <nav>
        <ul className="hidden md:flex gap-10 text-semibold">
          <li className="active">
            <Link
              target={"_blank"}
              href="https://senyone.sn/#hero"
              scroll={false}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              target={"_blank"}
              href="https://senyone.sn/#whoami"
              scroll={false}
            >
              Qui Sommes-Nous
            </Link>
          </li>
          <li>
            <Link
              target={"_blank"}
              href="https://senyone.sn/#services"
              scroll={false}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              target={"_blank"}
              href="https://senyone.sn/#blog"
              scroll={false}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      {/*Profile avatar */}
      <div className="flex gap-4 items-center justify-center">
        <Link
          target="_blank"
          href="https://senyone.sn/#contact"
          className="p-4 py-2 text-sm border-2 border-primary text-complementary font-bold rounded-full hover:border-complementary"
        >
          contactez-nous
        </Link>
      </div>
      {/* Burger menu */}
      <div className="md:hidden p-2 border rounded-lg border-primary text-complementary font-bold">
        <RiMenu3Fill size={20} />
      </div>
    </div>
  );
};

export default DefaultHeader;
