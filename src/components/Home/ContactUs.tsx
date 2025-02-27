import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import Button from "../Button";

const validationSchema = Yup.object().shape({
  option: Yup.string().required("Select an option"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email invalid").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [selectedOption, setSelectedOption] = useState("");

  const onSubmit = (data: any) => {
    console.log("Datos enviados:", data);
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="md:gap-10 flex flex-col md:flex-row items-center">
        <h2 className="bg-positivusGreen text-black p-2 flex rounded items-center w-max">
          Contact Us
        </h2>
        <p className="max-w-[580px] text-black text-center flex md:text-start my-5 md:my-0 px-5 md:px-0">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="w-full max-h-[773px] mx-auto lg:pl-24 py-16 px-7 grid grid-cols-1 md:grid-cols-2 gap-8 bg-positivusGray rounded-[45px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 lg:justify-around lg:py-16"
        >
          <div className="flex justify-around">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="opcion1"
                checked={selectedOption === "opcion1"}
                onChange={() => handleCheckboxChange("opcion1")}
                {...register("option")}
                className="w-6 h-6 border-black"
              />
              <span className="text-black">Say Hi</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="opcion2"
                checked={selectedOption === "opcion2"}
                onChange={() => handleCheckboxChange("opcion2")}
                {...register("option")}
                className="w-6 h-6 border-black"
              />
              <span className="text-black">Get a Quote</span>
            </label>
          </div>
          {errors.option && (
            <p className="text-red-500">{errors.option.message}</p>
          )}
          <div className="flex flex-col gap-1">
            <span className="text-black">Name*</span>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border rounded-xl px-7 py-4 border-black text-black"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-black">Email*</span>
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full border rounded-xl px-7 py-4 border-black text-black"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-black">Message*</span>
            <textarea
              placeholder="Mensaje"
              className="w-full border rounded-xl px-7 py-4 border-black text-black"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <Button
            title="Send Message"
            handleButton={() => console.log("Send Message")}
            styleTitle={"text-xl text-white"}
            styleButton={"py-3 border-2 border-black bg-black"}
          />
        </form>

        <div className="w-[700px] h-[650px] hidden lg:block justify-items-end">
          <Image
            src="ContactUsImage.svg"
            alt="Imagen de ejemplo"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
