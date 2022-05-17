import Box from "./Box";
import './HowToAiverse.css';
import Tech from "../../assets/images/logo4.png";
import Photo from "../../assets/images/robot3.png";

function HowAiverse(){
    return(
        <div className='aiversebg' id='about'>
            <div className="howToFilter"></div>
            <div className='top-header'>
                <h1 className='header-aiverse'>How do Aiverse NFTs work?</h1>
                <p className='p1'>Super ai generated images create your <br/>imagination to reality</p>
            </div>
            <img src={Tech} className="techImg"/>
            <img src={Photo} className="robot" />
            <Box />
        </div>
    )
}

export default HowAiverse;