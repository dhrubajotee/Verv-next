import React from 'react';

const NavMenu = () => {
  const menuItems = [
    {
      title: "ABOUT",
      items: ["Company", "How it works", "Contact", "Investors"]
    },
    {
      title: "RENT",
      items: ["Rent Properties", "Reference Tenant", "Landlord Hub"]
    },
    {
      title: "TERMS & PRIVACY",
      items: ["Trust & Safety", "Terms of Service", "Privacy Policy"]
    },
    {
      title: "RESOURCES",
      items: ["Blog", "Guides", "FAQ", "Help Center"]
    }
  ];

  return (
    <nav className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
      {menuItems.map((section, index) => (
        <div key={index} className="flex flex-col w-36">
          <h2 className="font-semibold text-slate-700">{section.title}</h2>
          <ul className="flex flex-col mt-4 w-full text-slate-500">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className={itemIndex > 0 ? "mt-2" : ""}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default NavMenu;