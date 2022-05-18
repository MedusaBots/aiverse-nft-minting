import "./App.css";
import { scroller } from "react-scroll";
import Nft from "./components/NFT/NFT";
import Mint from "./components/Mint/Mint";
import Engage from "./components/Engage/Engage";
import { useState } from "react";
import Header from "./components/Header/Header";
import HowAiverse from "./components/HowToAiverse/HowToAiverse";
import ScrollSection from "./components/ScrollSection/ScrollSection";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const passData = (data) => {
    if (data == "home") {
      scroller.scrollTo(data, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else if (data == "about") {
      scroller.scrollTo(data, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      scroller.scrollTo("mint", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <div className="App">
      <Header
        passData={passData}
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
      />
      <ScrollSection />
      <HowAiverse />
      <Engage />
      <Nft userAddress={walletAddress} />
      <Mint />
    </div>
  );
};

export default App;
