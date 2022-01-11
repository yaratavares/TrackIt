import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../common/contexts/UserLogin";

import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import { Container, TopoMenu } from "./style";
import { getHistoryUser } from "../../common/services/trackit";
import BlockCalendar from "./BlockCalendar";
import back from "../../common/assets/back.png";
import PageTodayHistory from "./PageTodayHistory";

export default function PageHistory() {
  const [historyUser, setHistoryUser] = useState([]);
  const [changeHistory, setOnChangeHistory] = useState();
  const { user } = useContext(UserLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.token) {
      alert("Primeiro faça Login ou cadastre-se!");
      navigate("/");
    } else {
      const request = getHistoryUser(user.token);
      request.then((response) => {
        setHistoryUser(response.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderPage></HeaderPage>
      <Container>
        <TopoMenu>
          <p>Histórico</p>
          {changeHistory !== undefined ? (
            <img
              onClick={() => setOnChangeHistory(undefined)}
              src={back}
              alt="back"
            ></img>
          ) : null}
        </TopoMenu>
        {changeHistory === undefined ? (
          <BlockCalendar
            historyUser={historyUser}
            changeHistory={changeHistory}
            setOnChangeHistory={setOnChangeHistory}
          ></BlockCalendar>
        ) : (
          <PageTodayHistory
            historyUser={historyUser}
            dateChangeHistory={changeHistory}
          ></PageTodayHistory>
        )}
      </Container>
      <FooterPage></FooterPage>
    </>
  );
}
