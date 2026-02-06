import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
const firstPage = (
  <>
    <img
      className="h-[200px]"
      style={{ width: "400px", height: "240px" }}
      src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
    />
    <h1 className="text-container">Will you be my Valentine?</h1>
  </>
);
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "真的嗎?",
      // "Really sure?",
      // "Think again!",
      // "Last chance!",
      // "Surely not?",
      // "You might regret this!",
      // "Give it another thought!",
      // "Are you absolutely certain?",
      // "This could be a mistake!",
      // "Have a heart!",
      "你捨得嗎?",
      // "Change of heart?",
      "確定不再想想?",
      "這是最後的機會囉?"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  // const noText = getNoButtonText();
  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media1.tenor.com/m/seQ7gcIAzPMAAAAd/memes.gif" />
            <div className="text-container">抓到!我就知道你偷偷暗戀我!!!😜</div>
          </>
        ) : (
          <>
            {noCount < 5 && firstPage}
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              {/* <button onClick={handleNoClick} className="no-button"> */}
                {/* {noCount === 0 ? "No" : noText} */}
              {/* </button> */}
              { noCount >4 &&(
                <img
                  src="https://media1.tenor.com/m/dhuQV_msfiUAAAAd/cat-gun.gif"
                  alt="Final warning"
                  className="final-image"
                />
              )}
              {noCount < 5 && (
                <button onClick={handleNoClick} className="no-button">
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              )}

            </div>
          </>
        )}
      </div>
    </div>
  );
}