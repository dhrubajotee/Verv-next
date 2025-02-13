import React from "react";

const SimplifiedPricing = () => {
  return (
    <div className="flex w-[1920px] p-[36.5px_352px] justify-center items-center bg-[#314660]">
      <div className="flex w-[1216px] justify-between items-center flex-shrink-0">
        <div className="flex flex-col items-start gap-[32px]">
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-white font-inter text-[40px] font-bold leading-[120%]">
              Simplified Pricing
            </p>
            <div className="w-[616px]">
              <p className="text-white font-inter text-[24px] font-semibold leading-[140%] opacity-[0.7]">
                List your property. Access direct tenants. Transparent pricing,
                the rest is history.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[16px]">
            <div className="flex w-[300px] h-[56px] p-[8px] px-[16px] justify-center items-center gap-[8px] rounded-[32px] bg-[#50B533]">
              <div className="text-white font-inter text-[18px] font-semibold leading-normal">
                <button>List for Free</button>
              </div>
            </div>
            <div className="flex w-[300px] h-[56px] p-[8px] px-[16px] justify-center items-center gap-[8px] rounded-[32px] bg-white">
              <button>
                <span className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  More Landlord Services
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[400px] h-[181px] p-2 flex-shrink-0 rounded-[16px] bg-white/10">
          <p className="text-white font-inter text-[20px] font-semibold leading-[120%]">
            Landlords we've got you covered.
          </p>

          <p className="text-white text-center font-inter text-[16px] font-normal leading-[150%]">
            No excess agency fees anymore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedPricing;
