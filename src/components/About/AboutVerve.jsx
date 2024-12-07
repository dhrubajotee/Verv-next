import React from "react";
import Image from "next/image";
import heroImage from "../../assets/images/hero-image.png";
import houseImage from "../../assets/images/about-verve-house.png";
import tenantImage from "../../assets/images/about-verve-tenant.png";
import FrequentlyAskedQuestions from "./About-Verve/FrequentlyAskedQuestions";
import missionStatement from "../../assets/images/mission-statement.png";
import TalentedCrew from "./About-Verve/TalentedCrew";
import AreLandlord from "../Home/AreLandlord";

const AboutVerve = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImage.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "lightcyan",
    // width: "1216px",
    // height: "528px",
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[1900px] h-[528px] px-[112px] pt-[80px] pb-[268px] justify-center items-center flex-shrink-0 bg-[#EEF1F3]">
        <div className="flex w-[1216px] h-[180px] flex-shrink-0 gap-[58px]">
          <p className="flex w-[599px] text-[#233244] font-inter text-[48px] font-bold leading-[60px]">
            Discover the perfect match between landlords and tenants!
          </p>
          <div className="inline-flex flex-col items-start gap-[24px]">
            <p className="w-[559px] text-[#233244] font-inter text-[18px] font-normal leading-[28px]">
              From founding in 2012, to becoming the UK's biggest letting agent
              in 2015, Verve has always had one mission: to make renting fairer,
              safer and cheaper for everyone.
            </p>
            <button className="flex w-[147px] h-[40px] px-[16px] py-[8px] justify-center items-center gap-[8px] rounded-[32px] border border-[#B4DFA7] bg-[#EEF8EB]">
              <span className="text-[#233244] font-inter text-[14px] font-semibold leading-normal">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* hero */}
      <div className="flex w-[1214px] justify-center items-center rounded-[40px]">
        <header
          style={backgroundImageStyle}
          className="w-[393px] h-[600px] md:w-[1216px] md:h-[528px] m-auto md:rounded-[40px] mt-9 flex justify-center items-center"
        ></header>
      </div>
      <div className="inline-flex items-start gap-[45px] pt-[98px]">
        <div className="flex flex-col items-start gap-[50px] w-[476px]">
          <div className="flex flex-col items-start gap-[24px] self-stretch">
            <p className="w-[395px] text-[var(--secondary-8,#233244)] font-inter text-[36px] font-bold leading-[44px]">
              Designed for Property Owners and Renters
            </p>
            <p className="w-[476px] text-[var(--secondary-6,#314660)] font-inter text-[16px] font-normal leading-[24px]">
              Welcome to RentSmart, where we revolutionize the rental experience
              for both landlords and tenants. Say farewell to hidden fees,
              outdated listings, and the hefty 10% commissions that landlords
              used to pay. The future of renting is here, and it's more
              transparent and efficient than ever!
            </p>
          </div>
          <div className="w-[407px] h-[191px]">
            <div className="flex gap-[8px]">
              {/* first box */}
              <div className="inline-flex items-center p-[20px_47px_20px_20px] rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
                <div className="flex flex-col items-start gap-[4px]">
                  <div className="flex items-center gap-[6px]">
                    {/* <div className="flex w-[20px] h-[20px] p-[1.042px_2.5px_1.667px_2.5px] justify-center items-center">

                  </div> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3333 0.041687C11.6785 0.041687 11.9583 0.321509 11.9583 0.666687V1.94266C13.9381 2.1685 15.479 3.83969 15.4998 5.87502H0.500213C0.520985 3.8397 2.06187 2.1685 4.04167 1.94266V0.666687C4.04167 0.321509 4.32149 0.0416871 4.66667 0.041687C5.01184 0.041687 5.29167 0.321509 5.29167 0.666687V1.91669H10.7083V0.666687C10.7083 0.321509 10.9882 0.041687 11.3333 0.041687ZM0.5 7.12502H15.5V13.3334C15.5 15.5425 13.7091 17.3334 11.5 17.3334H4.5C2.29086 17.3334 0.5 15.5425 0.5 13.3334V7.12502ZM8 12.3334C8.46024 12.3334 8.83333 11.9603 8.83333 11.5C8.83333 11.0398 8.46024 10.6667 8 10.6667C7.53976 10.6667 7.16667 11.0398 7.16667 11.5C7.16667 11.9603 7.53976 12.3334 8 12.3334ZM12.1667 11.5C12.1667 11.9603 11.7936 12.3334 11.3333 12.3334C10.8731 12.3334 10.5 11.9603 10.5 11.5C10.5 11.0398 10.8731 10.6667 11.3333 10.6667C11.7936 10.6667 12.1667 11.0398 12.1667 11.5ZM4.66667 12.3334C5.1269 12.3334 5.5 11.9603 5.5 11.5C5.5 11.0398 5.1269 10.6667 4.66667 10.6667C4.20643 10.6667 3.83333 11.0398 3.83333 11.5C3.83333 11.9603 4.20643 12.3334 4.66667 12.3334Z"
                        fill="#50B533"
                      />
                    </svg>
                    <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                      6 Days
                    </p>
                  </div>
                  <p className="w-[98px] text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                    Average to Let
                  </p>
                </div>
              </div>
              {/* second box */}
              <div className="inline-flex p-[20px_54px_20px_20px] items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
                <div className="flex flex-col items-start gap-[4px]">
                  <div className="flex items-center gap-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4849 18.3334H6.51768C4.59372 18.3334 3.03405 16.845 3.03405 15.009V10.9442C3.03405 10.354 2.78836 9.78801 2.35104 9.37068C1.33781 8.40377 1.46953 6.80173 2.62839 5.99745L7.95233 2.30252C9.17387 1.45474 10.8287 1.45474 12.0503 2.30252L17.3742 5.99745C18.5331 6.80173 18.6648 8.40377 17.6516 9.37068C17.2142 9.78801 16.9686 10.354 16.9686 10.9442V15.009C16.9686 16.845 15.4089 18.3334 13.4849 18.3334ZM8.33464 14.375C7.98946 14.375 7.70964 14.6548 7.70964 15C7.70964 15.3452 7.98946 15.625 8.33464 15.625H11.668C12.0131 15.625 12.293 15.3452 12.293 15C12.293 14.6548 12.0131 14.375 11.668 14.375H8.33464Z"
                        fill="#50B533"
                      />
                    </svg>
                    <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                      1,269,346
                    </p>
                  </div>
                  <p className="text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                    Properties Let On Verve
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[8px] py-[8px]">
              {/* third */}
              <div className="inline-flex p-[20px_10px_20px_20px] justify-end items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
                <div className="flex flex-col items-start gap-[4px]">
                  <div className="flex items-center gap-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3333 0.041687C11.6785 0.041687 11.9583 0.321509 11.9583 0.666687V1.94266C13.9381 2.1685 15.479 3.83969 15.4998 5.87502H0.500213C0.520985 3.8397 2.06187 2.1685 4.04167 1.94266V0.666687C4.04167 0.321509 4.32149 0.0416871 4.66667 0.041687C5.01184 0.041687 5.29167 0.321509 5.29167 0.666687V1.91669H10.7083V0.666687C10.7083 0.321509 10.9882 0.041687 11.3333 0.041687ZM0.5 7.12502H15.5V13.3334C15.5 15.5425 13.7091 17.3334 11.5 17.3334H4.5C2.29086 17.3334 0.5 15.5425 0.5 13.3334V7.12502ZM8 12.3334C8.46024 12.3334 8.83333 11.9603 8.83333 11.5C8.83333 11.0398 8.46024 10.6667 8 10.6667C7.53976 10.6667 7.16667 11.0398 7.16667 11.5C7.16667 11.9603 7.53976 12.3334 8 12.3334ZM12.1667 11.5C12.1667 11.9603 11.7936 12.3334 11.3333 12.3334C10.8731 12.3334 10.5 11.9603 10.5 11.5C10.5 11.0398 10.8731 10.6667 11.3333 10.6667C11.7936 10.6667 12.1667 11.0398 12.1667 11.5ZM4.66667 12.3334C5.1269 12.3334 5.5 11.9603 5.5 11.5C5.5 11.0398 5.1269 10.6667 4.66667 10.6667C4.20643 10.6667 3.83333 11.0398 3.83333 11.5C3.83333 11.9603 4.20643 12.3334 4.66667 12.3334Z"
                        fill="#50B533"
                      />
                    </svg>
                    <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                      7,078,438
                    </p>
                  </div>
                  <p className="text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                    Registered Landlords & Te..
                  </p>
                </div>
              </div>
              {/* fourth */}
              <div className="inline-flex p-[20px] justify-center items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
                <div className="flex flex-col items-start gap-[4px]">
                  <div className="flex items-center gap-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3333 0.041687C11.6785 0.041687 11.9583 0.321509 11.9583 0.666687V1.94266C13.9381 2.1685 15.479 3.83969 15.4998 5.87502H0.500213C0.520985 3.8397 2.06187 2.1685 4.04167 1.94266V0.666687C4.04167 0.321509 4.32149 0.0416871 4.66667 0.041687C5.01184 0.041687 5.29167 0.321509 5.29167 0.666687V1.91669H10.7083V0.666687C10.7083 0.321509 10.9882 0.041687 11.3333 0.041687ZM0.5 7.12502H15.5V13.3334C15.5 15.5425 13.7091 17.3334 11.5 17.3334H4.5C2.29086 17.3334 0.5 15.5425 0.5 13.3334V7.12502ZM8 12.3334C8.46024 12.3334 8.83333 11.9603 8.83333 11.5C8.83333 11.0398 8.46024 10.6667 8 10.6667C7.53976 10.6667 7.16667 11.0398 7.16667 11.5C7.16667 11.9603 7.53976 12.3334 8 12.3334ZM12.1667 11.5C12.1667 11.9603 11.7936 12.3334 11.3333 12.3334C10.8731 12.3334 10.5 11.9603 10.5 11.5C10.5 11.0398 10.8731 10.6667 11.3333 10.6667C11.7936 10.6667 12.1667 11.0398 12.1667 11.5ZM4.66667 12.3334C5.1269 12.3334 5.5 11.9603 5.5 11.5C5.5 11.0398 5.1269 10.6667 4.66667 10.6667C4.20643 10.6667 3.83333 11.0398 3.83333 11.5C3.83333 11.9603 4.20643 12.3334 4.66667 12.3334Z"
                        fill="#50B533"
                      />
                    </svg>
                    <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                      No Admin Fee
                    </p>
                  </div>
                  <p className="w-[98px] text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                    Since 2012
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[16px] w-[694px]">
          {/* first part */}
          <div className="relative h-[399px] self-stretch rounded-[16px] border border-[#CED3D9] bg-[#FCFCFC]">
            <p className="text-[#398124] font-inter text-[24px] font-semibold leading-[32px] pl-[28px] pt-[28px] mb-[16px]">
              Landlords
            </p>
            <div className="absolute top-[28px] right-[28px]">
              <Image
                src={houseImage}
                alt="houseImage"
                height={112}
                width={139}
              />
            </div>
            <div className="flex flex-col w-[596px] h-[224px] shrink-0 pl-[28px] gap-[16px]">
              <p className="w-[476px] text-[#314660] font-inter text-[16px] font-normal leading-[24px]">
                You want renting out your property or room to be cheap, painless
                and risk-free. So did we, and in 2012 we fixed it. We now let
                more properties than anyone else in the UK.
              </p>
              <p className="w-[596px] text-[#314660] font-inter text-[16px] font-normal leading-[24px]">
                Our prices are totally transparent. Starting from a totally free
                service, ranging up to a £69 service for our full tenant-find
                package which includes advertising on Rightmove, Zoopla and
                other major property portals.
              </p>
              <p className="w-[596px] text-[#314660] font-inter text-[16px] font-normal leading-[24px]">
                We'll support you all the way from creating your advert, finding
                the right tenant, and everything involved in creating a tenancy.
              </p>
            </div>

            <div className="pl-[28px] pt-[16px]">
              <button className="flex w-[168px] h-[44px] p-[6px_16px] justify-center items-center gap-[8px] shrink-0 rounded-[32px] bg-[#50B533]">
                <span className="text-[#FFF] font-inter text-[16px] font-medium leading-[24px]">
                  Find Out More
                </span>
              </button>
            </div>
          </div>
          {/* second part */}
          <div className="relative h-[420px] self-stretch rounded-[16px] border border-[#CED3D9] bg-[#FCFCFC]">
          <p className="text-[#398124] font-inter text-[24px] font-semibold leading-[32px] pl-[28px] pt-[28px] mb-[16px]">
            Tenants
            </p>
            <div className="absolute top-[28px] right-[28px]">
              <Image
                src={tenantImage}
                alt="tenantImage"
                height={128}
                width={139}
              />
            </div>
            <div className="flex flex-col w-[596px] h-[224px] shrink-0 pl-[28px] gap-[16px] mb-[24px]">
              <p className="w-[476px] text-[#314660] font-inter text-[16px] font-normal leading-[24px]">
              We want everyone to be able to find their dream home on OpenRent. What's more, we want you to feel safe and in control while you find it.
              </p>
              <p className="w-[596px] text-[#314660] font-inter text-[16px] font-normal leading-[24px]">
              We led the way on banning tenant fees, and still provide the best experience for tenants. No more ghost adverts, pushy agents or annoying trips to the agent's office.
              </p>
              <p className="w-[596px] text-[#314660] font-inter text-[16px] font-normal leading-[24px]">
              We make it easy to find your perfect landlord, with filters for DSS, pets, students, and other groups often overlooked by the market. Finding a new home is easier than ever, no matter what you need.
              </p>
            </div>

            <div className="pl-[28px] pt-[24px]">
              <button className="flex w-[168px] h-[44px] p-[6px_16px] justify-center items-center gap-[8px] shrink-0 rounded-[32px] bg-[#50B533]">
                <span className="text-[#FFF] font-inter text-[16px] font-medium leading-[24px]">
                  Find Out More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FrequentlyAskedQuestions />
      <div className="inline-flex items-center gap-[55px]">
          <div className="flex w-[569px] flex-col items-start gap-[47px]">
              <div className="flex flex-col items-start gap-[17px] self-stretch">
                  <p className="text-[#233244] font-inter text-[36px] font-bold leading-[44px] self-stretch">Mission Statement</p>
                  <p className="text-[#314660] font-inter text-[16px] font-normal leading-[24px] self-stretch">
                    Embrace openness and honesty in all interactions, and consistently aim to be user-friendly. 
                    It's crucial to equip users with comprehensive information at every turn, ensuring they have access to what they need, when they need it. 
                    This approach not only enhances their overall experience but also fosters a deeper sense of trust and loyalty.
                  </p>
              </div>
              <p className="text-[#314660] font-inter text-[16px] font-medium leading-[24px] self-stretch">Verve - 2024</p>
          </div>
          <div className="w-[592px] h-[363px] flex-shrink-0 rounded-[27px] bg-[#D9D9D9]">
              <Image
                src={missionStatement}
                alt="missionStatement"
                height={488}
                width={629.812}
              />
          </div>
      </div>
      <TalentedCrew />
      <div className="flex flex-col items-center gap-[60px] w-[1216px]">
          <p className="self-stretch text-[#233244] text-center font-inter text-[36px] font-bold leading-[44px]">Our happy clients</p>
      </div>
      <AreLandlord />
    </div>
  );
};

export default AboutVerve;
