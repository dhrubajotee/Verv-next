import React from 'react';

function RadioButton({ label, checked }) {
  return (
    <div className="flex gap-2 justify-center items-center self-stretch my-auto">
      <div className="flex gap-2 items-start self-stretch my-auto w-3.5">
        <div className="flex flex-col w-3.5">
          <div className={`flex z-10 shrink-0 h-4 rounded-full border border-solid ${checked ? '#50B533' : 'border-zinc-500'}`} />
        </div>
      </div>
      <div className="text-secondary-6 font-inter text-[14px] font-semibold leading-normal">
        {label}
      </div>
    </div>
  );
}

export default RadioButton;