import React from "react";

const AdditionalServices = ({ text, price }) => {
  return (
    <div className="flex justify-between w-[1216px] h-[var(--12,80px)] rounded-[var(--3,8px)] border border-[var(--secondary-1,#EEF1F3)] bg-[var(--White,#FFF)]">
      <p className="flex text-[var(--secondary-6,#314660)] font-inter text-center items-center text-[20px] font-semibold leading-[120%] pl-[40px]">
        {text}
      </p>
      <div className="inline-flex justify-end items-center gap-[var(--6,32px)] pr-[40px]">
        {/* price */}
        <div className="flex flex-col items-center">
          <p className="text-[var(--secondary-5,#56677D)] font-inter text-[16px] font-normal leading-[150%]">
            From
          </p>
          <p className="text-[var(--primary-6,#50B533)] text-center font-inter text-[24px] font-semibold leading-[120%]">
            {price}
          </p>
        </div>
        {/* order button & more info */}
        <div className="flex items-center gap-[var(--5,24px)]">
          <button className="flex w-[160px] h-[var(--8,48px)] p-[var(--3,8px)] justify-center items-center gap-[var(--3,8px)] rounded-[var(--3,8px)] bg-[var(--secondary-6,#314660)]">
            <span className="text-[var(--White,#FFF)] font-inter text-[18px] font-semibold leading-normal">
              Order
            </span>
          </button>
          <p className="text-[var(--secondary-5,#56677D)] font-inter text-[18px] font-medium leading-normal underline decoration-solid decoration-auto decoration-[var(--secondary-5,#56677D)]">
            More Info
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
