import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    price: 2095,
    location: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8931d5a3-7eb4-4af0-ad11-f7ed93be553c?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be"
  },
  {
    price: 2095,
    location: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/24377bde-b0e9-4fb3-9cf3-180ac86a12ab?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be"
  },
  {
    price: 2095,
    location: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/28cde200-2f89-4747-ba72-e249fdf2fc2e?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be"
  }
];

const PropertyListing = () => {
  return (
    <section className="flex flex-col pb-72 max-md:pb-24">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
        <nav className="flex gap-4 items-center self-center mt-10" aria-label="Property navigation">
          <button className="flex gap-2.5 items-start self-stretch my-auto rotate-[3.1415925661670165rad] w-[50px]" aria-label="Previous page">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f400e60de94fd54f1116030eb1e126c0578155c17c4633c470059cfa07c5bb3?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain aspect-square w-[50px]" />
          </button>
          <button className="flex gap-2.5 items-start self-stretch my-auto w-[50px]" aria-label="Next page">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e60e607375851e028ce75fbb9e3c6124aa168612c80960c3a363cca98a372637?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain aspect-square w-[50px]" />
          </button>
        </nav>
      </div>
      <div className="flex z-10 shrink-0 mt-0 w-0 h-2 bg-lime-700 fill-lime-700 max-md:mt-0" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e74beb66a2d9c80594e6779fb568424d67529eda3829d5672cb8c24652f02e7?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain z-10 self-center -mt-2 w-2 aspect-square fill-lime-700" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e74beb66a2d9c80594e6779fb568424d67529eda3829d5672cb8c24652f02e7?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain z-10 self-center -mt-2 ml-56 w-2 aspect-square fill-lime-700" />
    </section>
  );
};

export default PropertyListing;