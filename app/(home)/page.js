import Hero from "../components/Hero"
import PropertyListing from "../components/PropertyListing"
import Ratings from "../components/Ratings"

const page = () => {
  return (
    <div>
      <Hero />
      <Ratings />
      <PropertyListing />
    </div>
  )
}

export default page