import React from 'react';

const SocialIcons = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73b39a1373611dfb46544d7476e8db7612280d1ef0852f8ca17a97cf74b44540?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f785a3271bc2539c1b669977acbc05434c46da98fdc81085a4fad93da13ee335?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1645e13e3a53d4a05abfe20edc914f664b8fba356b385cc0568539baed78e2d0?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be", alt: "Instagram" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/93ad26fb6fc0b3d56499e109568678d6910bff166c3ff7eab327394460c07458?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be", alt: "LinkedIn" }
  ];

  return (
    <div className="flex gap-10 items-start self-stretch my-auto">
      {socialIcons.map((icon, index) => (
        <a href="#" key={index}>
          <img 
            loading="lazy" 
            src={icon.src} 
            alt={icon.alt}
            className="object-contain shrink-0 w-6 aspect-square" 
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;