import Header from "../components/Header";
import Vision from "../components/Vision";
import UniqueNFT from "../components/UniqueNFT";
import About from "../components/About";
import Features from "../components/Features";
import FooterBox from "../components/Footer";
import Faqs from "../components/Faqs";
import PrivateSales from "../components/PrivateSales";
import TokenSale from "../components/TokenSale";
import SecureBlockchain from "../components/SecureBlockchain";
import AppSection from "../components/AppSection";
import HomeSlider from "../components/HomeSlider";
import Pricing from "../components/Pricing";
import Timeline from "../components/Timeline";
import OurTeam from "../components/OurTeam";

function Index() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <About />
      <UniqueNFT />
      <Features />
      <Pricing />
      <PrivateSales />
      <TokenSale />
      <SecureBlockchain />
      <imgWithText />
      <Timeline />
      <OurTeam />
      <AppSection />
      <Faqs />
      <FooterBox />
    </div>
  );
}

export default Index;
