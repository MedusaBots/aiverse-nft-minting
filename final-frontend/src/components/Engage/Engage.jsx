import "./Engage.css";
import skull from "../../assets/images/skull.jpg";

const Engage = () => {
  return (
    <div className="engagePage">
      <div className="engageFilter"></div>
      <div className="engageParent">
        <p className="engageTitle">Engage yourself with aiverse</p>
        <div className="engageStepBox">
          <div className="engageSteps">
            <p className="engageStepNum">01/</p>
            <p className="engageStepName">AI Generated Art</p>
          </div>
          <div className="engageSteps">
            <p className="engageStepNum">02/</p>
            <p className="engageStepName">Whitelists & Airdrop</p>
          </div>
          <div className="engageSteps">
            <p className="engageStepNum">03/</p>
            <p className="engageStepName">Get Rewards & Early Access</p>
          </div>
          <img src={skull} className="skull" />
        </div>
      </div>
    </div>
  );
};

export default Engage;