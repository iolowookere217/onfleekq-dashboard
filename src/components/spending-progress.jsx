import { useState } from "react";
import CircularProgress from "../components/progress";
import { buttons } from "../utils/dummyData";

const SpendingProgress = ({ isBordered = true }) => {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState(buttons[0].color);
  const [progress, setProgress] = useState(buttons[0].progress);

  return (
    <>
      <div className="w-[8rem] xs:w-[8rem] h-[8rem] bg-white rounded-[50%]  flex items-center mx-auto justify-center">
        <CircularProgress progress={progress} color={color} />
      </div>
      {/* <div className="flex gap-2 items-center justify-center">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center gap-4 px-4 py-2 rounded-md"
            onClick={() => {
              setProgress(Math.round(button.progress));
              setColor(button.color);
              setActive(index);
            }}
            style={{
              transition: "all 0.3s ease",
              backgroundColor: active === index ? "#F1F1F1" : "white",
            }}
          >
            <span
              className={`w-4 h-4 rounded-full`}
              style={{
                backgroundColor: button.color,
              }}
            />
            <span>{button.label}</span>
          </button>
        ))}
      </div> */}
    </>
  );
};

export default SpendingProgress;
