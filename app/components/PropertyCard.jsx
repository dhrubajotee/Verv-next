import React from 'react';

const PropertyCard = ({ price, location, address, beds, bathrooms, area, imageSrc }) => {
  return (
    <article className="flex flex-col grow shrink self-stretch pb-8 my-auto bg-white rounded-3xl min-w-[240px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] w-[307px]">
      <img loading="lazy" src={imageSrc} alt={`Property at ${address}`} className="object-contain w-full rounded-none aspect-[1.78]" />
      <div className="flex relative flex-col mx-6 mt-4 max-md:mx-2.5">
        <div className="flex z-0 flex-col w-full">
          <div className="flex gap-0.5 items-start self-start whitespace-nowrap">
            <div className="text-2xl font-semibold leading-tight text-lime-700">
              £{price}
            </div>
            <div className="text-base leading-6 opacity-50 text-slate-950 w-[58px]">
              /month
            </div>
          </div>
          <div className="flex flex-col mt-4 w-full">
            <h3 className="text-2xl font-semibold leading-tight text-slate-700">
              {location}
            </h3>
            <p className="mt-2 text-base text-slate-500">
              {address}
            </p>
          </div>
        </div>
        <hr className="z-0 mt-4 w-full bg-gray-100 border-2 border-gray-100 border-solid h-[1.5px] min-h-[1px]" />
        <div className="flex z-0 gap-9 justify-between items-start mt-4 w-full text-sm text-slate-500">
          <div className="flex gap-2 justify-center items-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f14a7a83b46188eaaaa3a6c3957e060c3579d2d54b9d7a31263f420858189dc7?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <span className="self-stretch my-auto">{beds} Beds</span>
          </div>
          <div className="flex gap-2 items-start">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a1dbe6eb974b89fae92b6074fac3fad9cf4f882635862cfa812a5e50d932032?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain shrink-0 w-5 aspect-square" />
            <span>{bathrooms} Bathrooms</span>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/941e64bf4ac86f3bbe93c32b2a63b8196452c8957cd36c7938b42d72cbe992d3?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <span className="self-stretch my-auto">{area} m²</span>
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f66159cde94bd60ace4fea7078001d7520c2174057c2bd95df87d80ab0df273d?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain absolute top-0 right-0 z-0 w-10 h-10 aspect-square" />
      </div>
    </article>
  );
};

export default PropertyCard;