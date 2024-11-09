import React from 'react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col min-w-[240px] text-slate-500">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6374656e036f1b5beeb3cce817cf7a168b3266546321fa716d622fc0443c4850?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="Company logo" className="object-contain max-w-full aspect-[2.46] w-[138px]" />
      <div className="flex mt-6 max-w-full bg-gray-200 min-h-[2px] w-[284px]" />
      <div className="flex flex-col items-start mt-6">
        <div className="flex gap-2 items-start self-stretch">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e89087049d0244912bce7b623931b499cf55471ee5c2857c44a4a2b1f484516?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain shrink-0 w-6 aspect-square" />
          <address>35A Highbury Corner, N5 1RA</address>
        </div>
        <div className="flex gap-2 items-start mt-6">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f3646c913f06cccfd16f6a461aae2327cbe3d5cf4656992797420a7faed1b97?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain shrink-0 w-6 aspect-square" />
          <a href="tel:02071708030">0207 170 8030</a>
        </div>
        <div className="flex gap-2 items-start mt-6 whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f279f9cfc62c26c130830b6a404c82aee9ad110a7db50d411860150b55c4d71?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be" alt="" className="object-contain shrink-0 w-6 aspect-square" />
          <a href="mailto:hello@verv.org">hello@verv.org</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;