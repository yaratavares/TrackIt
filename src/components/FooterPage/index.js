import { useContext } from "react";
import { Link } from "react-router-dom";
import { PercentageProgress } from "../../common/contexts/PercentageProgress";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FooterContainer, ProgressBar } from "./style";

export default function FooterPage() {
  const { percentageProgress } = useContext(PercentageProgress);

  return (
    <FooterContainer>
      <div>
        <Link to="/habitos">Hábitos </Link>
      </div>

      <div className="spaceProgressBar">
        <ProgressBar>
          <Link to="/hoje">
            <CircularProgressbar
              value={percentageProgress}
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
          </Link>
        </ProgressBar>
      </div>

      <div>
        <Link to="/historico">Histórico</Link>
      </div>
    </FooterContainer>
  );
}
