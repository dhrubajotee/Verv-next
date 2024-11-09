import React from 'react';

function CTAHeadline() {
  return (
    <header className="flex flex-col items-center w-full max-md:max-w-full">
      <h2 className="text-xl font-semibold leading-tight text-lime-700">
        Stay Informed
      </h2>
      <div className="flex flex-col items-center mt-2 max-md:max-w-full">
        <h1 className="text-5xl font-bold leading-tight text-slate-700 max-md:max-w-full max-md:text-4xl">
          Are you a landlord?
        </h1>
        <p className="mt-4 text-lg text-center text-slate-500 max-md:max-w-full">
          Discover smarter ways to rent your property and get listed today.
        </p>
      </div>
    </header>
  );
}

export default CTAHeadline;