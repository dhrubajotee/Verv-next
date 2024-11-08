import React from 'react';

function FeatureCard({ icon, title, description, className }) {
  return (
    <div className={`flex overflow-hidden flex-col justify-center px-8 py-10 w-full bg-white shadow-lg rounded-[32px] max-md:px-5 max-md:max-w-full ${className}`}>
      <div className="flex gap-6 items-center">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-[0.91]" />
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[392px]">
          <h4 className="text-2xl font-semibold leading-tight text-lime-700">
            {title}
          </h4>
          <p className="mt-2 text-lg leading-7 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;