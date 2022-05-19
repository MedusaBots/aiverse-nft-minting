import "./Mint.css";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import logo from "../../assets/images/logo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Timeout } from "./abort";
import CopyrightIcon from "@mui/icons-material/Copyright";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const Contract = require("./Aiverse.json");

const Mint = ({ userAddress }) => {
  const web3 = createAlchemyWeb3(
    "https://eth-rinkeby.alchemyapi.io/v2/qFOiMhS5KfF1JnCgCdxexsSKluJi1rZy"
  );
  const contractAddress = "0x196f2ed79a910c9091bfc41795cff6d0fd671c15";
  const nftContract = new web3.eth.Contract(Contract.abi, contractAddress);
  const [phase, setPhase] = useState("");
  const [open, setOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [uri, seturi] = useState(null);

  const handlePhaseInput = (e) => {
    setPhase(e.target.value);
  };

  const handleMinting = () => {
    if (phase == "") {
      setSnackBarMessage("Please Enter the Phase!!!");
    } else {
      if (userAddress) {
        function sendTransaction(tokenURI) {
          let params = [
            {
              from: userAddress,
              to: contractAddress,
              gas: "35000",
              gasPrice: "0x9184e72a000",
              value: "50000000",
              data: nftContract.methods
                .safeMint(userAddress, tokenURI)
                .encodeABI(),
            },
          ];
          console.log("minting now", nftContract, "Contract ABI", Contract.abi);
          let result = window.ethereum
            .request({ method: "eth_sendTransaction", params })
            .catch((err) => {
              console.log(err);
            });
        }
        function mintingNFT(tokenURI) {
          sendTransaction(tokenURI);
        }
        setSnackBarMessage(
          "Your NFT is being minted. Please wait for few minutes in the while AI would generate image for you."
        );
        fetch(`https://www.apiaiversenft.xyz/nft/${phase}`, {
          signal: Timeout(600).signal,
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        })
          .then((data) => data.json())
          .then((res) => {
            console.log(res);
            seturi(res.query);
            mintingNFT(res.query);
          })
          .catch((err) => console.log(err));
      } else {
        setSnackBarMessage("Please connect your wallet and then mint your NFT");
      }
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mintParent" id="mint">
      <p className="mintTitle">Mint Your First</p>
      <p className="mintTitleBold">AI Generated NFTs</p>
      <div className="mintButtonParent">
        <input
          className="mintInput"
          placeholder="Enter your phase"
          onChange={handlePhaseInput}
          value={phase}
        />
        <button
          className="buttonMint"
          style={{ cursor: "pointer" }}
          onClick={handleMinting}
        >
          Mint Now
        </button>
      </div>
      <div>
        <div className="mintDesign"></div>
        <div className="elipse"></div>
        <div className="bottomElipse"></div>
      </div>
      <p className="mintBottomText">
        Let Us <span className="mintBottomtextGradientKnow">Know What</span>
        <br />
        <span className="mintBottomtextGradientThinking">You're Thinking</span>
      </p>
      <div className="mintEmailParent">
        <input className="mintEmailInput" placeholder="Your Email" />
        <button className="mintEmailButton">Send</button>
        <p className="mintEmailText">
          Get In
          <br />
          Touch
        </p>
      </div>
      <div className="mintFooter">
        <img className="logo" src={logo} />
        <div className="maintFooterTextParent">
          <p className="mintFooterText">Shaping the</p>
          <p className="mintFooterText">AI Industry </p>
        </div>
        <div className="mintFooterLinkParent">
          <div className="mintFooterInternalLink">
            <p className="internalLink">About Us</p>
            <p className="internalLink">Contact</p>
            <p className="internalLink">Home</p>
            <p className="internalLink">Whitepaper</p>
          </div>
          <div className="mintFooterExternalLink">
            <TwitterIcon className="externalLink" />
            <TelegramIcon className="externalLink" />
            <YouTubeIcon className="externalLink" />
          </div>
        </div>
      </div>
      {/* For Mint Footer Mobile */}
      <div className="mintFooterMobile">
        <img className="logoMobile" src={logo} />
        <div className="maintFooterTextParentMobile">
          <p className="mintFooterTextMobile">Shaping the</p>
          <p className="mintFooterTextMobile">AI Industry </p>
        </div>
      </div>
      <div className="mintFooterLinkParentMobile">
        <div className="mintFooterInternalLink">
          <p className="internalLink">About Us</p>
          <p className="internalLink">Contact</p>
          <p className="internalLink">Home</p>
          <p className="internalLink">Whitepaper</p>
        </div>
        <div className="mintFooterExternalLink">
          <TwitterIcon className="externalLink" />
          <TelegramIcon className="externalLink mintFooterExternalLinkMiddle" />
          <YouTubeIcon className="externalLink" />
        </div>
      </div>
      <div className="mintTermsAndPolicyParent">
        <div className="copyRight">
          <CopyrightIcon style={{ fontSize: "medium" }} />
          <p className="mintTermsAndPolicy">&nbsp;2021. All Right Reserved.</p>
        </div>
        <p className="mintTermsAndPolicy mintTermsAndPolicyMiddle">
          Privacy Policy
        </p>
        <p className="mintTermsAndPolicy">Terms & Conditions</p>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message={snackBarMessage}
        onClose={handleClose}
      />
    </div>
  );
};

export default Mint;
