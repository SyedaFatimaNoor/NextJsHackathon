import Navbar from "@/components/Navbar"
import ProductPage from "@/components/ProductPage"
import AlsoLike from "@/components/AlsoLike"
import FeaturesSection from "@/components/FeaturesSection"
import JoinClubSection from "@/components/JoinClubSection"
import Footer from "@/components/Footer"

export default function Home() { 
  return (
    <div>
      <Navbar />
      <ProductPage />
      <AlsoLike />
      <FeaturesSection />
      <JoinClubSection />
      <Footer />
    </div>
  )
}

