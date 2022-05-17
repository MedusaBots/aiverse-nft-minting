import "./App.css";
import { scroller } from "react-scroll";
import Nft from "./components/NFT/NFT";
import Mint from "./components/Mint/Mint";
import Engage from "./components/Engage/Engage";
import Header from "./components/Header/Header";
import { useState } from "react";
import HowAiverse from "./components/HowToAiverse/HowToAiverse";

const App = () => {
  const [walletAddress, setWalletAddress] = useState("");
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
      <HowAiverse />
      <Engage />
      <Nft />
      <Mint userAddress={walletAddress} />
    </div>
  );
};

export default App;
