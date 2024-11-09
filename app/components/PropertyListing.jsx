import React from "react";
import PropertyCard from "./PropertyCard";

const propertyData = [
  {
    price: 2095,
    location: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9ff5ef44-163e-4768-a3ba-c200baf3c590?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
  },
  {
    price: 2095,
    location: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d485c7f5-88ab-45df-891e-2edf0cb4a55a?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
  },
  {
    price: 2095,
    location: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ecf3e194-6fd3-4e92-b63d-bb62b97582bb?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
  },
  {
    price: 2095,
    location: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ecf3e194-6fd3-4e92-b63d-bb62b97582bb?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
  },
  {
    price: 2095,
    location: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ecf3e194-6fd3-4e92-b63d-bb62b97582bb?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
  },
  {
    price: 2095,
    location: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    bathrooms: 2,
    area: "5x7",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ecf3e194-6fd3-4e92-b63d-bb62b97582bb?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
  },
];

const PropertyListing = () => {
  return (
    <section className="flex justify-between items-center font-inter max-w-[1216px] m-auto py-[36px]">
      <div className="flex overflow-hidden flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-xl font-semibold leading-tight text-lime-700">
            PROPERTIES IN DEMAND
          </h2>
          <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[800px] max-md:max-w-full">
              <h1 className="text-3xl font-semibold leading-tight text-slate-700 max-md:max-w-full">
                Current Trending Properties Available
              </h1>
              <p className="mt-4 text-lg leading-7 text-slate-500 max-md:max-w-full">
                Discover our most in-demand properties, showcasing prime
                locations, competitive prices, and modern amenities. Browse our
                handpicked selection to find your perfect home or room today.
              </p>
            </div>
            <button className="gap-2 self-stretch px-4 py-4 my-auto h-14 text-lg font-semibold text-white bg-lime-600 min-h-[56px] min-w-[240px] rounded-[32px] w-[298px]">
              Browse More Properties
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
            {propertyData.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
          <div className="flex gap-4 items-center self-center mt-10">
            <button
              className="flex gap-2.5 items-start self-stretch my-auto w-[50px]"
              aria-label="Previous"
            >
              {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f400e60de94fd54f1116030eb1e126c0578155c17c4633c470059cfa07c5bb3?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain aspect-square w-[50px]" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="24.5"
                  transform="rotate(180 25 25)"
                  fill="white"
                  stroke="#50B533"
                />
                <path
                  d="M35 26C35.5523 26 36 25.5523 36 25C36 24.4477 35.5523 24 35 24L35 26ZM14.2929 24.2929C13.9024 24.6834 13.9024 25.3166 14.2929 25.7071L20.6569 32.0711C21.0474 32.4616 21.6805 32.4616 22.0711 32.0711C22.4616 31.6805 22.4616 31.0474 22.0711 30.6569L16.4142 25L22.0711 19.3431C22.4616 18.9526 22.4616 18.3195 22.0711 17.9289C21.6805 17.5384 21.0474 17.5384 20.6569 17.9289L14.2929 24.2929ZM35 24L15 24L15 26L35 26L35 24Z"
                  fill="#50B533"
                />
              </svg>
            </button>
            <button
              className="flex gap-2.5 items-start self-stretch my-auto w-[50px]"
              aria-label="Next"
            >
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e60e607375851e028ce75fbb9e3c6124aa168612c80960c3a363cca98a372637?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be"
                alt=""
                className="object-contain aspect-square w-[50px]"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <circle cx="25" cy="25" r="25" fill="#50B533" />
                <path
                  d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex z-10 shrink-0 mt-0 w-0 h-2 bg-lime-700 fill-lime-700 max-md:mt-0" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e74beb66a2d9c80594e6779fb568424d67529eda3829d5672cb8c24652f02e7?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be"
        alt=""
        className="object-contain z-10 self-center -mt-2 w-2 aspect-square fill-lime-700"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e74beb66a2d9c80594e6779fb568424d67529eda3829d5672cb8c24652f02e7?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be"
        alt=""
        className="object-contain z-10 self-center -mt-2 ml-56 w-2 aspect-square fill-lime-700"
      />
    </section>
  );
};

export default PropertyListing;
