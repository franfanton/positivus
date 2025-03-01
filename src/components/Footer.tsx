"use client";
import { NavMocks } from "@/mocks/navsMocks";
import { NavMenu } from "@/types/navMenu";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Button from "./Button";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email invalid").required("Email is required"),
});

const Footer = () => {
  const navMenu = NavMocks;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const renderItem = (item: NavMenu) => {
    return (
      <a
        key={item.id}
        href={item.href}
        className="hover:opacity-90 text-white font-normal text-xl underline "
      >
        {item.title}
      </a>
    );
  };
  const onSubmit = (data: any) => {
    console.log("Datos enviados:", data);
  };
  return (
    <div className="max-w-[1440px] mx-auto px-8 sm:px-[100px] mt-6">
      <div className="bg-positivusDark p-14 rounded-tr-[45px] rounded-tl-[45px] flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex justify-center items-center">
            <a href="#hero" className="flex items-center gap-2">
              <Image src="/IconWhite.svg" alt="Logo" width={24} height={24} />
              <h3 className="text-white">Positivus</h3>
            </a>
          </div>
          <nav
            className="flex flex-col items-center md:flex-row md:items-end gap-5 md:gap-10"
            aria-label="mobile"
          >
            {navMenu.map((nav: NavMenu) => {
              return renderItem(nav);
            })}
          </nav>
          <div className="lg:flex gap-5 hidden">
            <div className="w-10 h-10 lg:w-9 lg:h-9">
              <Image
                src="socialMedia/LinkedInWhiteBlack.svg"
                alt="Linked In"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="w-10 h-10 lg:w-9 lg:h-9">
              <Image
                src="socialMedia/FacebookWhiteBlack.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="w-10 h-10 lg:w-9 lg:h-9">
              <Image
                src="socialMedia/TwitterWhiteBlack.svg"
                alt="Twitter"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-y-5">
          <div className="flex flex-col gap-y-7 items-center md:items-start">
            <p className="text-black bg-positivusGreen rounded-md w-max px-2">
              Contact us:
            </p>
            <div className="flex flex-col gap-y-5 items-center md:items-start">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <div className="flex flex-col items-center md:items-start">
                <p>Address: 1234 Main St</p>
                <p className="text-center">
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 lg:justify-around lg:py-16 bg-positivusBlackLight rounded-2xl"
          >
            <div className="flex flex-col md:flex-row py-10 md:py-0 px-10 gap-5">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-xl px-7 py-4 border-white text-white bg-positivusDark text-sm md:text-xl"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm md:text-xl">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button
                title="Subscribe to news"
                handleButton={() => console.log("Subscribe to news")}
                styleTitle={" text-sm md:text-xl text-black"}
                styleButton={"py-3 px-5 bg-positivusGreen items-center"}
              />
            </div>
          </form>
        </div>
        <div className="flex gap-5 md:hidden justify-center">
          <div className="w-10 h-10 lg:w-9 lg:h-9">
            <Image
              src="socialMedia/LinkedInWhiteBlack.svg"
              alt="Linked In"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div className="w-10 h-10 lg:w-9 lg:h-9">
            <Image
              src="socialMedia/FacebookWhiteBlack.svg"
              alt="Facebook"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <div className="w-10 h-10 lg:w-9 lg:h-9">
            <Image
              src="socialMedia/TwitterWhiteBlack.svg"
              alt="Twitter"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="bg-white my-4 h-[2px] w-full" />
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <p className="text-center">© 2023 Positivus. All Rights Reserved.</p>
          <a
            href="#privacyPolicy"
            className="hover:opacity-90 text-white font-normal text-xl underline "
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
