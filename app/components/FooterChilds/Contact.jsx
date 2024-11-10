import React from 'react';
import ContactInfo from './ContactInfo';
import NavMenu from './NavMenu';
import SocialIcons from './SocialIcons';

const Contact = () => {
  return (
    <footer className="lg:flex lg:justify-between lg:items-center lg:max-w-[1920px] px-[352px] py-[80px] pb-[40px] bg-white shadow-2xl">
      <div className="flex flex-col w-full max-md:max-w-[1216px]">
        <div className="flex w-[1216px] items-start gap-[120px]">
          <ContactInfo />
          <NavMenu />
        </div>
        <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="w-full min-h-0 bg-violet-100 border-2 border-violet-100 border-solid h-[1.5px] max-md:max-w-full" />
          <div className="flex flex-wrap gap-10 justify-between items-center self-center mt-10 max-w-full w-[1216px]">
            <p className="self-stretch my-auto text-base text-slate-500">
              Copyright © 2024 Verv. All rights reserved
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;