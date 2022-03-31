import Header from "../components/Header";
import UniqueNFT from "../components/UniqueNFT";
import About from "../components/About";
import Features from "../components/Features";
import FooterBox from "../components/Footer";
import Faqs from "../components/Faqs";
import PrivateSales from "../components/PrivateSales";
import SecureBlockchain from "../components/SecureBlockchain";
import AppSection from "../components/AppSection";
import HomeSlider from "../components/HomeSlider";
import Pricing from "../components/Pricing";
import Timeline from "../components/Timeline";
import OurTeam from "../components/OurTeam";
import ImageWithText from "../components/ImageWithText";
import TokenSale from "../components/tokenmics";

function Index() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <About />
      {/* <AppSection /> */}
      <UniqueNFT />
      <Features />
      <Pricing />
      <PrivateSales />
      <TokenSale />
      <SecureBlockchain />
      <ImageWithText />
      <Timeline />
      <OurTeam />
      <Faqs />
      <FooterBox />
    </div>
  );
}

export default Index;
