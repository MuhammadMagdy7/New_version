"use client";
import { useEffect, useState } from "react";
import { ButtonPill } from "../Layout/Button";
import axios from "axios";
import { Button } from "react-daisyui";
import HeaderSec from "../Layout/Header";

const FeaturesSection = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");
        setServices(response.data.products);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="container mx-auto space-y-12 py-16 px-4">
            {services ? (<HeaderSec title='Services' />): ""}

    {services ? (

      services.map((service, index) => (
          // <div
          //   key={service._id}
          //   className={`flex border border-gray-100 p-3 text-center rounded-lg flex-col md:flex-row max-h-[493px] items-center gap-8 mb-8 ${
          //     index % 2 !== 0 ? "md:flex-row-reverse" : ""
          //   }`}
          // >
          //   <div className="flex-1">
          //     <h2 className="text-3xl font-bold mb-4 text-black">
          //       {service.name}
          //     </h2>
          //     <p className="text-paragraphColor mb-4 ">{service.description}</p>
          //     <div className="space-x-5">
          //       <ButtonPill
          //         text="Learn more"
          //         link={`/services/${service._id}`}
          //       />
          //     </div>
          //   </div>
          //   <div className="flex-1">
          //     <img
          //       src={service.images[0]}
          //       alt={service.name}
          //       className="w-full rounded-lg shadow-lg"
          //     />
          //   </div>
          // </div>

          <div
  key={service._id}
  className={`flex border  p-3 text-center rounded-lg flex-col md:flex-row max-h-[493px] items-center gap-8 mb-8 ${
    index % 2 !== 0 ? "md:flex-row-reverse" : ""
  }`}
>
  <div className="flex-1">
    <h2 className="text-3xl font-bold mb-4 text-black">
      {service.name}
    </h2>
    <p className="text-paragraphColor mb-4 overflow-hidden text-ellipsis whitespace-normal max-h-20">
      {service.description}
    </p>
    <div className="space-x-5">
      <ButtonPill
        text="Learn more"
        link={`/services/${service._id}`}
      />
    </div>
  </div>
  <div className="flex-1">
    <img
      src={service.images[0]}
      alt={service.name}
      className="w-full rounded-lg shadow-lg"
    />
  </div>
</div>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <Button className="btn btn-lg btn-link loading" loading={true} />
        </div>
      )}

      {/* <div className="flex justify-center mt-12">
        <ButtonPill text="View more" className="px-24 py-2" />
      </div> */}
    </div>
  );
};

export default FeaturesSection;
