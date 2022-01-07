import { FooterContainer } from "./style";

import { ProgressBar } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function FooterPage() {
  const percentage = 50;
  return (
    <FooterContainer>
      <div>
        <Link to="/habitos">Hábitos </Link>
      </div>

      <div className="spaceProgressBar">
        <ProgressBar>
          <Link to="/hoje">
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
          </Link>
        </ProgressBar>
      </div>

      <div>
        <Link to="/historico">Histórico</Link>
      </div>
    </FooterContainer>
  );
}
