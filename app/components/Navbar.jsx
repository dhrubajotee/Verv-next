import Image from "next/image";
import logo from "../public/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 lg:flex lg:justify-between lg:items-center lg:max-w-[1920px] px-[352px] py-[24px] bg-white shadow-md">
      <div className="navbar-start">
        {/* for responsive */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Image alt="Verv Logo" src={logo} width={137.95} height={56} />
      </div>
      <div className="navbar-center hidden lg:flex lg:justify-between lg:items-center gap-[5px] text-[#314660] font-inter text-[18px] font-medium">
        <ul className="menu menu-horizontal gap-[5px] px-1 text-[#314660] font-inter text-[18px] font-medium">
          <li>
            <details>
              <summary>About</summary>
              <ul className="p-2 w-52">
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Our Location 2</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Pricing</summary>
              <ul className="p-2 w-52">
                <li>
                  <a>Price 1</a>
                </li>
                <li>
                  <a>Price 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-[3px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488"
              stroke="#314660"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle
              cx="3"
              cy="3"
              r="3"
              transform="matrix(1 0 0 -1 9 12)"
              stroke="#314660"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <a>Sign In/Register</a>
        </div>
        <div className="flex justify-center items-center gap-[3px] w-[180px] h-[56px] p-[8px_16px] rounded-[32px] btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.5 11V17M15.5 14H9.5M16.6804 22H8.31965C6.0109 22 4.1393 20.214 4.1393 18.0108V13.133C4.1393 12.4248 3.84447 11.7456 3.31969 11.2448C2.10381 10.0845 2.26187 8.16205 3.65251 7.19692L10.0412 2.763C11.5071 1.74567 13.4929 1.74567 14.9588 2.763L21.3475 7.19691C22.7381 8.16205 22.8962 10.0845 21.6803 11.2448C21.1555 11.7456 20.8607 12.4248 20.8607 13.133V18.0108C20.8607 20.214 18.9891 22 16.6804 22Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <button>Add Listing</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
