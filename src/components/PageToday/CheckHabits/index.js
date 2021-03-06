import { useContext, useEffect, useState } from "react";
import { UserLogin } from "../../../common/contexts/UserLogin";
import { checkTheHabit } from "../../../common/services/trackit";
import updateHabitsToday from "../../../common/functions/updateHabitsToday";

import check from "../../../common/assets/check.png";
import { Check } from "./style";

export default function CheckHabits({ habit, setHabit }) {
  const [checkOrUncheck, setCheckOrUncheck] = useState(habit.done);
  const { user } = useContext(UserLogin);

  useEffect(() => {
    if (setHabit !== undefined) {
      updateHabitsToday(user.token, setHabit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkOrUncheck]);

  function clickCheck() {
    let request = "";
    if (checkOrUncheck) {
      request = checkTheHabit(user.token, habit.id, "uncheck");
    } else {
      request = checkTheHabit(user.token, habit.id, "check");
    }
    request.then(() => setCheckOrUncheck(!checkOrUncheck));
  }

  return (
    <Check
      checkOrUncheck={habit.done}
      onClick={setHabit !== undefined ? clickCheck : null}
    >
      <img src={check} alt="check"></img>
    </Check>
  );
}
