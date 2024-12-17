import Banner from "@/components/Banner";
import Header from "@/components/Header";
import StorySection from "@/components/StorySection";
import Brand from "@/components/Brand";
import Service from "@/components/Service";
import FeaturesSection2 from "@/components/FeaturesSection2";
import NewCeramics from "@/components/NewCeramics";
import JoinClubSection from "@/components/JoinClubSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
      <>
      <Banner />
        <Header />
        <Brand />
        <StorySection />
        <Service />
        <FeaturesSection2 />
        <NewCeramics />
        
        <JoinClubSection />
        <Footer />
      </>
    );
  }
  