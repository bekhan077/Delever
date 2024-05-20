import './Sitebar.css';

import Logo from '../../public/assets/LogoimgD.png'
import Woman from '../../public/assets/woman.png'

import { IoMdNotifications } from "react-icons/io";
import { SlBasketLoaded } from "react-icons/sl";
import { MdOutlineAnalytics } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { RiMenuFold2Line } from "react-icons/ri";

const Sitebar = () => {
  const [hidden, setHidden] = useState(true);

  const bannerChange = () =>{
    setHidden(!hidden);
  }

  const[bons , setBonst ] = useState(1);

  const bonsChange = () =>{
    setBonst(1);
  }

  const bannersChange = () => {
    setBonst(2);
  };

  const otsChange = () => {
    setBonst(3);
  };

  return (
    <div className=" flex bg-white ">
      <div className="border-r">
        <div>
          <img src={Logo} alt="img" className="mx-3 my-4" />
        </div>
        <div className="px-1">
          <SlBasketLoaded className="w-6 h-6 text-[#7785c0] mx-3 my-5" />
          <HiMiniUsers className="w-6 h-6 text-[#7785c0] mx-3 my-5" />
          <FaLocationCrosshairs className="w-6 h-6 text-[#7785c0] mx-3 my-5 text-blue-600" />
          <MdOutlineAnalytics className="w-6 h-6 text-[#7785c0]  mx-3 my-5" />
          <IoMdNotifications className="w-6 h-6 text-[#7785c0]  mx-3 mt-[370px] mb-5" />
          <IoMdSettings className="w-6 h-6 text-[#7785c0]  mx-3 my-5" />
          <img src={Woman} alt="woman img" className="px-1" />
        </div>
      </div>
      {hidden ? (
        <>
          <div className="px-4 cursor-pointer">
            <div className="flex gap-16  my-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="73"
                height="16"
                viewBox="0 0 73 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.70417 0C7.66845 0.014128 8.47083 0.12715 9.11134 0.339069C10.2023 0.699332 11.0856 1.3598 11.7613 2.32051C12.3033 3.09754 12.6728 3.93814 12.8699 4.84233C13.067 5.74652 13.1655 6.60831 13.1655 7.42774C13.1655 9.50455 12.7502 11.2635 11.9197 12.7045C10.7935 14.6471 9.05504 15.6184 6.70417 15.6184H0V0H6.70417ZM3.1569 2.71237V12.9056H6.1553C7.6897 12.9056 8.75954 12.1463 9.36486 10.6275C9.69567 9.79397 9.86107 8.8015 9.86107 7.65007C9.86107 6.06067 9.61297 4.84039 9.11675 3.98918C8.62053 3.13797 7.63339 2.71237 6.1553 2.71237H3.1569ZM17.7508 6.90851C18.1344 6.47054 18.6746 6.25156 19.3714 6.25156C20.0119 6.25156 20.5486 6.45818 20.9815 6.87142C21.4144 7.28467 21.6554 7.89039 21.7047 8.68862H17.0276C17.1261 7.93984 17.3672 7.34648 17.7508 6.90851ZM19.3712 3.76172C20.3285 3.76172 21.1907 3.94185 21.9579 4.30211C22.7251 4.66237 23.3585 5.23102 23.8583 6.00805C24.3087 6.69326 24.6008 7.48794 24.7346 8.39213C24.812 8.92193 24.8437 9.68483 24.8296 10.6809H16.9535C16.9957 11.8393 17.3582 12.6517 18.041 13.1179C18.4562 13.4075 18.956 13.5523 19.5402 13.5523C20.1595 13.5523 20.6628 13.3757 21.0499 13.0225C21.2611 12.8318 21.4476 12.5669 21.6095 12.2279H24.6818C24.6044 12.9131 24.2489 13.6089 23.6154 14.3152C22.6301 15.4384 21.2505 16 19.4768 16C18.0128 16 16.7212 15.5267 15.6021 14.5801C14.483 13.6336 13.9234 12.0936 13.9234 9.96033C13.9234 7.96122 14.4284 6.42836 15.4385 5.3617C16.4485 4.29504 17.7594 3.76172 19.3712 3.76172ZM26.3796 15.6184H29.3885V0H26.3796V15.6184ZM36.3227 6.25156C35.6259 6.25156 35.0857 6.47054 34.7021 6.90851C34.3185 7.34648 34.0774 7.93984 33.9789 8.68862H38.656C38.6067 7.89039 38.3657 7.28467 37.9328 6.87142C37.4999 6.45818 36.9632 6.25156 36.3227 6.25156ZM38.9097 4.30211C38.1425 3.94185 37.2803 3.76172 36.3231 3.76172C34.7112 3.76172 33.4003 4.29504 32.3903 5.3617C31.3803 6.42836 30.8753 7.96122 30.8753 9.96033C30.8753 12.0936 31.4348 13.6336 32.5539 14.5801C33.6731 15.5267 34.9646 16 36.4286 16C38.2023 16 39.5819 15.4384 40.5673 14.3152C41.2007 13.6089 41.5562 12.9131 41.6336 12.2279H38.5613C38.3994 12.5669 38.2129 12.8318 38.0017 13.0225C37.6146 13.3757 37.1114 13.5523 36.492 13.5523C35.9078 13.5523 35.4081 13.4075 34.9928 13.1179C34.31 12.6517 33.9476 11.8393 33.9053 10.6809H41.7814C41.7955 9.68483 41.7638 8.92193 41.6864 8.39213C41.5527 7.48794 41.2606 6.69326 40.8101 6.00805C40.3104 5.23102 39.6769 4.66237 38.9097 4.30211ZM50.3633 4.06901H53.594L49.4448 15.6186H46.2669L42.1388 4.06901H45.5173L47.9139 12.5881L50.3633 4.06901ZM57.6718 6.90851C58.0554 6.47054 58.5956 6.25156 59.2924 6.25156C59.9329 6.25156 60.4696 6.45818 60.9024 6.87142C61.3353 7.28467 61.5764 7.89039 61.6256 8.68862H56.9486C57.0471 7.93984 57.2882 7.34648 57.6718 6.90851ZM59.2925 3.76172C60.2497 3.76172 61.1119 3.94185 61.8791 4.30211C62.6463 4.66237 63.2798 5.23102 63.7795 6.00805C64.23 6.69326 64.5221 7.48794 64.6558 8.39213C64.7332 8.92193 64.7649 9.68483 64.7508 10.6809H56.8747C56.917 11.8393 57.2794 12.6517 57.9622 13.1179C58.3775 13.4075 58.8772 13.5523 59.4614 13.5523C60.0808 13.5523 60.584 13.3757 60.9711 13.0225C61.1823 12.8318 61.3688 12.5669 61.5307 12.2279H64.603C64.5256 12.9131 64.1701 13.6089 63.5367 14.3152C62.5513 15.4384 61.1717 16 59.398 16C57.934 16 56.6425 15.5267 55.5233 14.5801C54.4042 13.6336 53.8447 12.0936 53.8447 9.96033C53.8447 7.96122 54.3497 6.42836 55.3597 5.3617C56.3697 4.29504 57.6806 3.76172 59.2925 3.76172ZM72.6293 3.79866C72.5906 3.79513 72.5431 3.79336 72.4868 3.79336C71.5859 3.79336 70.8539 4.03 70.2908 4.50329C69.9459 4.78584 69.5412 5.3121 69.0767 6.08208V4.06885H66.2049V15.6184H69.235V10.0979C69.235 9.17255 69.3512 8.48735 69.5834 8.04232C69.9987 7.25116 70.8116 6.85558 72.0223 6.85558C72.1138 6.85558 72.2334 6.85911 72.3812 6.86618C72.529 6.87324 72.698 6.88737 72.888 6.90856V3.81455C72.7543 3.80749 72.6681 3.80219 72.6293 3.79866Z"
                  fill="url(#paint0_linear_481_199)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_481_199"
                    x1="2.71529e-07"
                    y1="8"
                    x2="73.1429"
                    y2="8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0974E9" />
                    <stop offset="1" stop-color="#3593F9" />
                  </linearGradient>
                </defs>
              </svg>
              <MdMenuOpen
                className="w-5 h-5 text-[#7785c0]"
                onClick={bannerChange}
              />
            </div>
            <NavLink to="/">
              <div
                className={
                  bons == 1
                    ? "px-4 py-3  bg-blue-500 rounded-lg "
                    : "px-4 py-3 "
                }
                onClick={bonsChange}
              >
                <h1
                  className={
                    bons == 1
                      ? "text-[14px] font-medium font-serif text-white "
                      : "text-[14px] font-medium font-serif "
                  }
                >
                  Акции
                </h1>
              </div>
            </NavLink>
            <NavLink to="/banner">
              <div
                className={
                  bons == 2
                    ? "px-4 py-3  rounded-lg bg-blue-500  "
                    : "px-4 py-3  rounded-lg"
                }
                onClick={bannersChange}
              >
                <h1
                  className={
                    bons == 2
                      ? "text-[14px] font-medium font-serif text-white"
                      : "text-[14px] font-medium font-serif"
                  }
                >
                  Баннеры
                </h1>
              </div>
            </NavLink>
            <NavLink to="/otziv">
              <div
                className={
                  bons == 3
                    ? "px-4 py-3  rounded-lg bg-blue-500"
                    : "px-4 py-3  rounded-lg"
                }
                onClick={otsChange}
              >
                <h1
                  className={
                    bons == 3
                      ? "text-[14px] font-medium font-serif text-white"
                      : "text-[14px] font-medium font-serif"
                  }
                >
                  Отзывы
                </h1>
              </div>
            </NavLink>
            <div className="px-4 py-3 rounded-none">
              <select className="w-full border-none rounded-none  ">
                <option className="py-5 px-2 bg-[#f0f3fa] border-none">Рассылка</option>
                <option className="py-5 px-2 bg-[#f0f3fa] border-none">Телеграм</option>
                <option className="py-5 px-2 bg-[#f0f3fa] border-none">СМС</option>
              </select>
            </div>
          </div>
        </>
      ) : (
        <div className="cursor-pointer transition-all ease-in delay-1000 ">
          <RiMenuFold2Line
            className="w-5 h-5 text-[#7785c0] mx-5 my-6 "
            onClick={bannerChange}
          />
        </div>
      )}
    </div>
  );
}

export default Sitebar