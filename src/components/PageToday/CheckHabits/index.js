import { useContext, useEffect, useState } from "react";
import { UserLogin } from "../../../contexts/UserLogin";
import { checkTheHabit } from "../../../services/trackit";
import updateHabitsToday from "../common/updateHabitsToday";

import check from "../../../assets/check.png";
import { Check } from "./style";

export default function CheckHabits({ habit, setHabit }) {
  const [checkOrUncheck, setCheckOrUncheck] = useState(habit.done);
  const { user } = useContext(UserLogin);

  useEffect(() => {
    updateHabitsToday(user.token, setHabit);
  }, [checkOrUncheck]);

  function clickCheck() {
    let request = "";
    if (checkOrUncheck) {
      request = checkTheHabit(user.token, habit.id, "uncheck");
    } else {
      request = checkTheHabit(user.token, habit.id, "check");
    }
    request.then(() => setCheckOrUncheck(!checkOrUncheck));
    request.catch(() => console.log(request));
  }

  return (
    <Check checkOrUncheck={habit.done} onClick={() => clickCheck()}>
      <img src={check} alt="check"></img>
    </Check>
  );
}
