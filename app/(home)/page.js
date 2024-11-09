import LandlordCTA from "../components/FooterChilds/LandlordCTA"
import Hero from "../components/Hero"
import HowItWorksSection from "../components/HowItWorksSection"
import PropertyListing from "../components/PropertyListing"
import Ratings from "../components/Ratings"

const page = () => {
  return (
    <div>
      <Hero />
      <Ratings />
      <HowItWorksSection />
      <PropertyListing />
      <LandlordCTA />
    </div>
  )
}

export default page