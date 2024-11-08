import ellipse1 from "../public/images/ellipse-1.png";
import ellipse2 from "../public/images/ellipse-2.png";
import ellipse3 from "../public/images/ellipse-3.png";
import ellipse4 from "../public/images/ellipse-4.png";
import ellipse5 from "../public/images/ellipse-5.png";
import ellipse6 from "../public/images/ellipse-6.png";
import iconStar from "../public/images/icon-star.svg";
import iconStarWhite from "../public/images/icon-star-white.svg";
import rightEllipse from "../public/images/right-ellipse.jpg";
import Image from "next/image";

const Ratings = () => {
  const imageList = [ellipse2, ellipse3, ellipse4, ellipse5, ellipse6];
  const starArray = [...Array(5)];
  return (
    <div>
      <section className="flex justify-between items-center font-inter max-w-[1216px] m-auto py-[36px]">
        <div className="rounded-[40px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] w-[596px] h-[200px] px-[32px] py-[28px]">
          <div className="flex justify-center items-center">
            <div className="flex gap-[12.863px]">
              <div>
                <div className="flex justify-center items-center">
                  <Image src={ellipse1} alt="" />
                  {imageList.map((image, index) => (
                    <Image alt="" key={index} src={image} className="-ml-5" />
                  ))}
                  <p className="-ml-6 text-white">+</p>
                </div>
              </div>
              <div>
                <h2 className="text-[#449A2B] font-inter text-[32px] font-bold leading-[120%]">
                  72k+
                </h2>
                <p className="font-semibold text-textColorSecondary">
                  Happy Tenants!
                </p>
              </div>
            </div>
          </div>
          <div className="w-[532.01px] h-[1.206px] bg-[#314660] opacity-10 my-4"></div>
          <div className="flex gap-[19.294px] justify-center items-center">
            <div>
              <div className="flex justify-between items-center">
                <Image src={iconStar} alt="iconStar" />
                <h3 className="text-xl text-[#00AD6F] font-semibold leading-[150%%]">
                  Trustpilot
                </h3>
              </div>
              <p className="text-[12px] font-semibold text-textColorSecondary text-right">
                Rated Excellent
              </p>
            </div>
            <div>
              <div className="flex gap-1">
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]">
                  <Image src={iconStarWhite} alt="iconStar" />
                </div>
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]">
                  <Image src={iconStarWhite} alt="iconStar" />
                </div>
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]">
                  <Image src={iconStarWhite} alt="iconStar" />
                </div>
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]">
                  <Image src={iconStarWhite} alt="iconStar" />
                </div>
                <div className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center gap-[11.065px] flex-shrink-0 rounded-[2.213px] bg-[rgba(0,173,111,0.3)]">
                  <Image src={iconStarWhite} alt="iconStar" />
                </div>
                <p className="text-xl font-bold text-[#00AD6F]">5</p>
              </div>
              <p className="text-[12px] font-semibold text-textColorSecondary">
                Verified Company - 95% 5-Star Rating
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-[596px] h-[200px] px-[32px] py-[28px] gap-[5px]">
          <div className="flex justify-center items-center gap-4">
            <div className="w-[56px] h-[56px]">
              <Image
                src={rightEllipse}
                alt="house"
                className="w-[56px] h-[56px] rounded-full"
              />
            </div>
            <div>
              <h2 className="text-[#449A2B] font-inter text-[32px] font-bold leading-[120%]">
                200+
              </h2>
              <p className="text-[#314660] font-inter text-[14px] font-semibold">
                New Listings Everyday!
              </p>
            </div>
          </div>
          <div className="w-[532.01px] h-[1.206px] bg-[#314660] opacity-10 my-4"></div>
          <div className="flex justify-center items-center gap-[8px]">
            <div className="w-[56px] h-[56px] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
              >
                <path
                  d="M52.64 29.4784C52.64 27.6584 52.4767 25.9084 52.1733 24.2284H28V34.1684H41.8133C41.2067 37.3651 39.3867 40.0717 36.6567 41.8917V48.3551H44.9867C49.84 43.8751 52.64 37.2951 52.64 29.4784Z"
                  fill="#4285F4"
                />
                <path
                  d="M27.9993 54.5616C34.9293 54.5616 40.7393 52.2749 44.9859 48.3549L36.6559 41.8916C34.3693 43.4316 31.4526 44.3649 27.9993 44.3649C21.3259 44.3649 15.6559 39.8616 13.6259 33.7949H5.08594V40.4216C9.30927 48.7983 17.9659 54.5616 27.9993 54.5616Z"
                  fill="#34A853"
                />
                <path
                  d="M13.6254 33.7716C13.112 32.2316 12.8087 30.5983 12.8087 28.8949C12.8087 27.1916 13.112 25.5583 13.6254 24.0183V17.3916H5.08536C3.33536 20.8449 2.33203 24.7416 2.33203 28.8949C2.33203 33.0483 3.33536 36.9449 5.08536 40.3983L11.7354 35.2183L13.6254 33.7716Z"
                  fill="#FBBC05"
                />
                <path
                  d="M27.9993 13.4484C31.7793 13.4484 35.1393 14.7551 37.8226 17.2751L45.1726 9.92506C40.7159 5.77173 34.9293 3.22839 27.9993 3.22839C17.9659 3.22839 9.30927 8.99173 5.08594 17.3917L13.6259 24.0184C15.6559 17.9517 21.3259 13.4484 27.9993 13.4484Z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#314660] text-left font-plusjakartasans text-[14px] font-bold">
                Google Rating
              </p>
              <div className="flex items-left gap-[3px]">
                <p className="text-[#FEA500] text-center font-plusjakartasans text-[16px] font-extrabold">
                  4.8
                </p>
                <div className="flex justify-center items-center">
                  {starArray.map((index, _) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.79"
                      height="20.79"
                      viewBox="0 0 21 21"
                      fill="none"
                      key={index}
                    >
                      <path
                        d="M9.73001 1.33843C10.003 0.788942 10.7869 0.788942 11.0599 1.33843L13.2896 5.82609C13.3977 6.04369 13.6055 6.19462 13.8458 6.2302L18.8028 6.96402C19.4098 7.05387 19.652 7.79936 19.2138 8.22882L15.6348 11.7362C15.4613 11.9062 15.3819 12.1504 15.4224 12.39L16.2563 17.3312C16.3584 17.9362 15.7242 18.397 15.1804 18.1129L10.7387 15.7929C10.5233 15.6804 10.2666 15.6804 10.0512 15.7929L5.60954 18.1129C5.06568 18.397 4.43153 17.9362 4.53364 17.3312L5.36755 12.39C5.40798 12.1504 5.32863 11.9062 5.15509 11.7362L1.57609 8.22882C1.13787 7.79936 1.38009 7.05387 1.98705 6.96402L6.94409 6.2302C7.18444 6.19462 7.39218 6.04369 7.5003 5.82609L9.73001 1.33843Z"
                        fill="#FEA500"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#56677D] text-left font-plusjakartasans text-[10px] font-medium">
                See all our reviews
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center font-inter max-w-[1216px] m-auto">
        <div className="inline-flex justify-center items-center px-[87px] py-[24px] rounded-[56px] bg-[#F6FFF4]">
          <div className="flex justify-center gap-[4px]">
            <div className="bg-[url('/images/olive-tree.png')] bg-lightgray bg-cover bg-no-repeat bg-center">
              <Image
                src="/images/olive-tree.png"
                alt="oliveTree"
                height={32}
                width={32}
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-[#314660] text-center font-inter text-[20px] font-semibold leading-[24px]">
                Grow with Verv – for each tenancy, we plant an olive tree,
                rooted in the name of Landlords and Tenants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ratings;
