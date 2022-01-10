import { useContext } from "react";
import { UserLogin } from "../../../common/contexts/UserLogin";
import updateHabits from "../../../common/functions/updateHabits";
import { deleteHabits } from "../../../common/services/trackit";

import ButtonsDays from "../ButtonsDays";
import { Habits } from "./style";
import trash from "../../../common/assets/delete.png";

export default function CreateHabits({ listHabitGet, setHabitGet }) {
  const { user } = useContext(UserLogin);

  function clickDelete(id) {
    const confirm = window.confirm("Gostaria de deletar esse hábito?");
    if (confirm) {
      const request = deleteHabits(user.token, id);

      request.then(() => updateHabits(setHabitGet, user.token));
      request.catch((response) => alert(`Ocorreu um erro! ${response.data}`));
    }
  }

  return (
    <>
      {listHabitGet.map((habit) => (
        <Habits key={habit.id}>
          <div className="titleHabit">
            <h3>{habit.name}</h3>
            <img
              src={trash}
              onClick={() => clickDelete(habit.id)}
              alt="delete habit"
            />
          </div>
          <ButtonsDays
            listHabit={{ name: habit.name, days: habit.days }}
            click={false}
          ></ButtonsDays>
        </Habits>
      ))}
    </>
  );
}
