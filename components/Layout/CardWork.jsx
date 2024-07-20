import Image from "next/image";
import { ButtonPill } from "./Button";

const GetStarted = () => {
  return (<div className="flex items-center justify-center py-24">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        <div className=" bg-pink-500 text-white p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Get started!</h2>
          <p className="text-gray-200 mt-4 text-lg">
            At Versionavi, we are committed to providing you with the best
            audio-visual solutions tailored to your needs. Our dedicated team
            works tirelessly to ensure your events are a resounding success
            with our top-notch equipment and expertise.
          </p>
          <ButtonPill
            link="/contact"
            className="mt-6 bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out"
            text="Contact us"
          />
        </div>
        <div className=" bg-white p-10 md:w-1/2 flex items-center justify-center order-first md:order-last">
          <Image
            src="/img/version6.jpg"
            width={1000}
            height={1000}
            className="w-100"
            alt="versionProject"
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default GetStarted;
