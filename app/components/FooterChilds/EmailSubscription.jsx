import React from 'react';

function EmailSubscription() {
  return (
    <div className="flex flex-col self-center mt-8 max-w-full w-[564px]">
      <form className="flex flex-wrap gap-10 justify-between items-center py-2 pr-2 pl-6 w-full text-lg bg-white border border-solid border-neutral-300 h-[72px] min-h-[72px] rounded-[40px] max-md:pl-5 max-md:max-w-full">
        <label htmlFor="emailInput" className="sr-only">Enter your email address</label>
        <input
          id="emailInput"
          type="email"
          placeholder="Enter your email address"
          className="self-stretch my-auto opacity-50 text-slate-700 bg-transparent border-none outline-none flex-grow"
          aria-label="Enter your email address"
        />
        <button
          type="submit"
          className="gap-2 self-stretch px-4 py-4 my-auto h-14 font-semibold text-white whitespace-nowrap bg-lime-600 min-h-[56px] rounded-[32px] w-[157px]"
        >
          Submit
        </button>
      </form>
      <p className="self-center mt-4 text-sm leading-4 text-center">
        <span className="text-slate-500">Join</span>{" "}
        <span className="font-semibold leading-4 text-lime-700">10,000+</span>{" "}
        <span className="text-slate-500">other landlords in our Verv Community.</span>
      </p>
    </div>
  );
}

export default EmailSubscription;