import "./Header.css";
import logo from "../../assets/images/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import spiral from "../../assets/images/spiralBG.png";
import LanguageIcon from "@mui/icons-material/Language";
import BigHand from "../../assets/images/landinghand.png";
// import PoweredBy from "../../assets/images/poweredBy.png";
// import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Bitski } from "bitski";
import { useState, useEffect } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

const Header = (props) => {
  const [walletAddress, setWalletAddress] = useState("");
  const internalLinks = ["HOME", "ABOUT", "MINT", "CONTACT US"];

  const providerOptions = {
    metmask: {
      package: true,
    },
    bitski: {
      package: Bitski, // required
      options: {
        clientId: "586419321608012265", // required what is this?
        callbackUrl: "586419321608012265", // required
      },
    },
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "05d3e1bd8cd74be5ab1c1c7d62cc86f0", // required
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "web3modal", // Required
        infuraId: "05d3e1bd8cd74be5ab1c1c7d62cc86f0", // Required
        rpc: "", // Optional if `infuraId` is provided; otherwise it's required
        chainId: 1, // Optional. It defaults to 1 if not provided
        darkMode: false, // Optional. Use dark theme, defaults to false
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "rinkeby",
    theme: "dark",
    cacheProvider: true,
    providerOptions,
  });

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    await window.ethereum.send("eth_requestAccounts");
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    props.setWalletAddress(account);
  };
  useEffect(() => {
    if (props.walletAddress) {
      connectWallet();
    }
  }, []);
  const handleScrollTo = (data) => {
    props.passData(data.toLowerCase());
  };

  return (
    <div className="headerParent" id="home">
      <div className="headerEllipse">
        <div className="headerEllipseTwo"></div>
      </div>
      <img className="spiral" src={spiral}></img>
      <img className="bigHand" src={BigHand}></img>
      <div className="titleBarParent">
        <div className="logoTitleParent">
          <img className="headerLogo" src={logo}></img>
          <div className="headerTitles">
            <p className="aiverse">Aiverse</p>
            <p className="nfts">NFTs</p>
          </div>
        </div>
        <div className="headerInternalLinks">
          {internalLinks.map((item, index) => {
            return (
              <p
                className="headerInternalLink"
                onClick={() => handleScrollTo(item)}
                key={index}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="headerExternalLink">
          <button className="connectButton" onClick={connectWallet}>
            {props.walletAddress
              ? `${props.walletAddress.slice(
                  0,
                  6
                )}...${props.walletAddress.slice(
                  props.walletAddress.length - 5,
                  props.walletAddress.length
                )}`
              : "Connect Wallet"}
          </button>
          <TelegramIcon className="externalLink" />
          <TwitterIcon className="externalLink" />
          <EmailIcon className="externalLink" />
        </div>
      </div>
      <div className="headerContent">
        <div style={{ backdropFilter: "blur(1px)" }}>
          <p className="headerAttractiveHeading">
            "Own a piece of
            <br />
            Artificial Intelligence"
          </p>
          <p className="headerSubHeading">Imaginate & Generate</p>
          <p className="headerHeadingContent">
            These are AI generated image NFTs which a user can create by typing
            a phrase and making a NFT of the image.
          </p>
          <div className="poweredBy">
            <button className="mintYourNft">Mint your NFT </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
