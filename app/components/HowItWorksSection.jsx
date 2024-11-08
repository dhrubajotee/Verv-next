import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c42231e7bf7178f06069485be4780090691c3b7ed6d88cb67fcd7139f6b379a?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
    title: "Streamlined for Landlords",
    description: "Manage listings, message tenants, see reviews, reference check, and create a tenancy from a simple dashboard."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6642783c4948078ea87bf025b549a2a8007af9592fb0f08527f323a33ec0deff?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
    title: "Empowered Tenants",
    description: "Access verified listings, view Landlord reviews, directly contact Landlords, enjoy transparent terms, and make secure payments all in one place."
  }
];

function HowItWorksSection() {
  return (
    <section className="flex justify-between items-center font-inter max-w-[1216px] m-auto py-[36px]">
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[520px] max-md:max-w-full">
        <header className="flex flex-col w-full font-semibold max-md:max-w-full">
          <h2 className="text-xl leading-tight text-lime-700 max-md:max-w-full">
            HOW IT WORKS
          </h2>
          <h3 className="mt-4 w-full text-3xl leading-10 text-slate-700 max-md:max-w-full">
            A Digital Bridge Between Landlords & Tenants
          </h3>
        </header>
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={index > 0 ? "mt-6" : ""}
            />
          ))}
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e4f8cae32fc0d51be9b311361d9bdd60a14c5ead6839d1404db182b9237028a?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be"
        alt="Illustration of digital bridge between landlords and tenants"
        className="object-contain self-stretch my-auto aspect-[1.54] min-w-[240px] w-[603px] max-md:max-w-full"
      />
    </section>
  );
}

export default HowItWorksSection;