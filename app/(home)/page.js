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
    </div>
  )
}

export default page