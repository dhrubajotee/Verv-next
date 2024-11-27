import React from 'react'
import landlordImage from '../../assets/images/Rectangle-955868.png'
import Image from 'next/image'
import TrustPilot from '../Home/TrustPilot'

const Landlords = () => {
  return (
    <div className='flex flex-col gap-[100px]'>
        {/* top section */}
        <div className='flex w-[1920px] h-[540px] px-[112px] py-[80px] justify-center items-start gap-[32px] flex-shrink-0 bg-[rgba(238,248,235,0.78)]'>
            <div className='w-[592px] h-[380px] flex-shrink-0'>
                <div className='w-[592px] h-[380px] flex-shrink-0 rounded-[16px] bg-[rgba(213,237,206,0.60)] pl-[40px] pt-[40px]'>
                    <div className='flex w-[515px] flex-col items-start gap-[32px] '>
                        <div className='flex flex-col items-start gap-[24px] self-stretch'>
                            <p className='self-stretch text-[#233244] font-inter text-[48px] font-bold leading-[60px]'>Advertise Your Rental Property!</p>
                            <p className='self-stretch text-[#233244] font-inter text-[16px] font-normal leading-[24px]'>When you create your first lettings advert on Verve, we will review and publish it to the property listings on Rightmove, Zoopla, PrimeLocation and all major property portals.</p>
                        </div>
                        <button className='flex w-[272px] h-[56px] px-[16px] py-[8px] justify-center items-center gap-[8px] rounded-[32px] bg-[#50B533]'>
                            <span className='text-[#FFF] font-inter text-[18px] font-semibold leading-normal'>Create Your Advert</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* image part */}
            <div className="w-[592px] h-[380px] flex-shrink-0 rounded-[24px] bg-lightgray bg-[0px_-306.228px] bg-[length:100%_250%] bg-no-repeat bg-[#D9D9D9]">
                <Image src={landlordImage} alt="landlordImage" height={380} width={592}  />
            </div>
        </div>
        <TrustPilot />
    </div>
  )
}

export default Landlords