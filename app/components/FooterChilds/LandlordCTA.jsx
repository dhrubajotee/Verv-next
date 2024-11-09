import React from 'react';
import CTAHeadline from './CTAHeadline';
import EmailSubscription from './EmailSubscription';

function LandlordCTA() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center self-stretch px-20 py-20 bg-green-50 shadow-2xl max-md:px-5">
      <div className="flex flex-col max-w-full w-[600px]">
        <CTAHeadline />
        <EmailSubscription />
      </div>
    </section>
  );
}

export default LandlordCTA;