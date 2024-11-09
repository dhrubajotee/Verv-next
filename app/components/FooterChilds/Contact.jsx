import React from 'react';
import ContactInfo from './ContactInfo';
import NavMenu from './NavMenu';
import SocialIcons from './SocialIcons';

const Contact = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-center pt-20 pb-10 bg-white shadow-2xl">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start self-center max-w-full text-lg w-[1216px]">
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