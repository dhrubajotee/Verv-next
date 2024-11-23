import React from "react";

const Included = ({ text }) => {
  return (
    <div className="flex flex-col items-start p-2 gap-1 rounded-[32px] bg-[#EEF1F3]">
      <div className="flex items-center gap-1 self-stretch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99935 18.8333C14.6017 18.8333 18.3327 15.1023 18.3327 10.5C18.3327 5.89759 14.6017 2.16663 9.99935 2.16663C5.39698 2.16663 1.66602 5.89759 1.66602 10.5C1.66602 15.1023 5.39698 18.8333 9.99935 18.8333ZM13.826 8.3837C14.038 8.11123 13.9889 7.71856 13.7164 7.50664C13.4439 7.29472 13.0513 7.34381 12.8393 7.61627L9.50017 11.9095C9.42592 12.005 9.28625 12.0173 9.19636 11.9364L7.08412 10.0354C6.82756 9.80452 6.43237 9.82532 6.20146 10.0819C5.97055 10.3385 5.99135 10.7336 6.24792 10.9645L8.36015 12.8656C8.98943 13.4319 9.9671 13.3452 10.4869 12.6769L13.826 8.3837Z"
            fill="#50B533"
          />
        </svg>
        <p className="text-[#314660] font-inter text-[14px] font-normal leading-[150%]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Included;
