import './Mint.css';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import logo from '../../assets/images/logo.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Mint = () => {
    const [phase, setPhase] = useState("");
    const [open, setOpen] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState("Please Enter the Phase!!!")

    const handlePhaseInput = (e) => {
        setPhase(e.target.value);
    }

    const handleMinting = () => {
        fetch(`http://18.222.203.93/nft/${phase}`, {
            method: "GET"
        }).then(data => {
            data.json().then(response => {
                fetch(response.query, {
                    method: "GET"
                }).then(data1 => {
                    data1.json().then(response1 => {
                        console.log(response1.image);
                    })
                })
            })
        });

        if(phase == "") {
            setSnackBarMessage("Please Enter the Phase!!!")
        }
        else {
            setSnackBarMessage("Coming Soon!!!")
        }
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <div className='mintParent' id='mint'>
            <p className='mintTitle'>Mint Your First</p>
            <p className='mintTitleBold'>AI Generated NFTs</p>
            <div className='mintButtonParent'>
                <input className='mintInput' placeholder='Enter your phase' onChange={handlePhaseInput}/>
                <button className='buttonMint' onClick={handleMinting}>Mint Now</button>
            </div>
            <div>
                <div className='mintDesign'></div>
                <div className='elipse'></div>
                <div className='bottomElipse'></div>
            </div>
            <p className='mintBottomText'>Let Us <span className='mintBottomtextGradientKnow'>Know What</span><br/><span className='mintBottomtextGradientThinking'>You're Thinking</span></p>
            <div className='mintEmailParent'>
                <input className='mintEmailInput' placeholder='Your Email' />
                <button className='mintEmailButton'>Send</button>
                <p className='mintEmailText'>Get In<br/>Touch</p> 
            </div>
            <div className='mintFooter'>
                <img className='logo' src={logo} />
                <div className='maintFooterTextParent'>
                    <p className='mintFooterText'>Shaping the</p>
                    <p className='mintFooterText'>AI Industry </p>
                </div>
                <div className='mintFooterLinkParent'>
                    <div className='mintFooterInternalLink'>
                        <p className='internalLink'>About Us</p>
                        <p className='internalLink'>Contact</p>
                        <p className='internalLink'>Home</p>
                        <p className='internalLink'>Whitepaper</p>
                    </div>
                    <div className='mintFooterExternalLink'>
                        <TwitterIcon className='externalLink' />
                        <TelegramIcon className='externalLink' />
                        <YouTubeIcon className='externalLink' />
                    </div>
                </div>
            </div>
            {/* For Mint Footer Mobile */}
            <div className='mintFooterMobile'>
                <img className='logoMobile' src={logo} />
                <div className='maintFooterTextParentMobile'>
                    <p className='mintFooterTextMobile'>Shaping the</p>
                    <p className='mintFooterTextMobile'>AI Industry </p>
                </div>
            </div>
            <div className='mintFooterLinkParentMobile'>
                    <div className='mintFooterInternalLink'>
                        <p className='internalLink'>About Us</p>
                        <p className='internalLink'>Contact</p>
                        <p className='internalLink'>Home</p>
                        <p className='internalLink'>Whitepaper</p>
                    </div>
                    <div className='mintFooterExternalLink'>
                        <TwitterIcon className='externalLink' />
                        <TelegramIcon className='externalLink mintFooterExternalLinkMiddle' />
                        <YouTubeIcon className='externalLink' />
                    </div>
                </div>
            <div className='mintTermsAndPolicyParent'>
                <div className='copyRight'>
                    <CopyrightIcon style={{fontSize: 'medium'}} />
                    <p className='mintTermsAndPolicy'>&nbsp;2021. All Right Reserved.</p>
                </div>
                <p className='mintTermsAndPolicy mintTermsAndPolicyMiddle'>Privacy Policy</p>
                <p className='mintTermsAndPolicy'>Terms & Conditions</p>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                message={snackBarMessage}
                onClose={handleClose}
            />
        </div>
    );
}

export default Mint;