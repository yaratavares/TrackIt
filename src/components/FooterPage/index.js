import { FooterContainer } from "./style";

import { ProgressBar } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function FooterPage() {
  const percentage = 50;
  return (
    <>
      <FooterContainer>
        <p>Hábitos</p>
        <div className="spaceProgressBar">
          <ProgressBar>
            <CircularProgressbar
              value={percentage}
              text={"Hoje"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                textSize: "17.98px",
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",

                cursor: "pointer",
              })}
            />
          </ProgressBar>
        </div>
        <p>Histórico</p>
      </FooterContainer>
    </>
  );
}
