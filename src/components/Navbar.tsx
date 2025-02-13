import { NavMocks } from "@/mocks/navsMocks";
import { NavMenu } from "../types/navMenu";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const stylesNavMobile = "hover:opacity-90";
  const stylesNavDesktop = "w-full text-center py-6 hover:opacity-90";
  const navMenu = NavMocks;
  const renderItem = (item: NavMenu, styles: string) => {
    return (
      <a
        key={item.id}
        href={item.href}
        className={`hover:opacity-90 text-black font-normal text-xl ${styles}`}
      >
        {item.title}
      </a>
    );
  };
  return (
    <div className="bg-white text-black sticky top-0 z-10">
      <section className="max-w-7xl mx-auto p-8 flex justify-between items-center">
        <h1 className="text-3xl font-medium flex items-center space-x-2">
          <a href="#hero" className="flex items-center gap-2">
            <Image src="/icon.svg" alt="Logo" width={24} height={24} />
            <span className="text-black text-3xl">Positivus</span>
          </a>
        </h1>
        <div>
          <button
            type="button"
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
          >
            <div className="bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
          </button>
          <nav
            className="hidden md:flex items-center space-x-10 text-xl"
            aria-label="main"
          >
            {navMenu.map((nav: NavMenu) => {
              return renderItem(nav, stylesNavMobile);
            })}
            <Button
              title="Request a quote"
              handleButton={() => console.log("handleReport")}
            />
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-68 bg-white w-full text-5xl flex-col justify-center origin-top animate-open-menu hidden"
      >
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          {navMenu.map((nav: NavMenu) => {
            return renderItem(nav, stylesNavDesktop);
          })}
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
