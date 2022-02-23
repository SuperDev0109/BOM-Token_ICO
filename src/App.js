import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Vision from './component/Vision';
import UniqueNFT from './component/UniqueNFT';
import About from './component/About';
import Features from './component/Features';
import FooterBox from './component/Footer';
import Faqs from './component/Faqs';
import PrivateSales from './component/PrivateSales';
import TokenSale from './component/TokenSale';
import SecureBlockchain from './component/SecureBlockchain';     
import ImageWithText from './component/ImageWithText';
import AppSection from './component/AppSection';
import HomeSlider from './component/HomeSlider';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import Timeline from './component/Timeline';
import OurTeam from './component/OurTeam';


function App() {
  return (
    <>
    <div className="App" >
      <Header></Header>
      <HomeSlider></HomeSlider>
      <Vision visionId="vision"></Vision>
      <About></About>
      <UniqueNFT></UniqueNFT>
      <Features></Features>
      <Pricing></Pricing>
      <PrivateSales></PrivateSales> 
      <TokenSale></TokenSale>
      <SecureBlockchain></SecureBlockchain>
      <ImageWithText></ImageWithText>
      <Timeline></Timeline>
      
      <OurTeam></OurTeam>
      <Contact></Contact>
      <AppSection></AppSection>
      <Faqs></Faqs>
      <FooterBox></FooterBox>

    </div>
    </>
  );
}

export default App; 
