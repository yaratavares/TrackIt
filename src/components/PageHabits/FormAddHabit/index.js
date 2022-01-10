import { useContext, useState } from "react";
import { UserLogin } from "../../../common/contexts/UserLogin";
import { saveHabits } from "../../../common/services/trackit";
import updateHabits from "../../../common/functions/updateHabits";
import Loader from "react-loader-spinner";

import ButtonsDays from "../ButtonsDays";
import { BoxAddHabit, ButtonsAddHabits } from "./style";

export default function FormAddHabit({
  setHabitGet,
  displayAdd,
  setDisplayAdd,
}) {
  const [listHabit, setListHabit] = useState({ name: "", days: [] });
  const [promise, setPromise] = useState(null);
  const { user } = useContext(UserLogin);

  function savingHabit(event) {
    event.preventDefault();

    const request = saveHabits(user.token, listHabit);
    setPromise(request);

    request.then(() => {
      updateHabits(setHabitGet, user.token);
      setPromise(null);
      setListHabit({ name: "", days: [] });
      setDisplayAdd(!displayAdd);
    });
    request.catch((response) => {
      alert(`Não foi possível salvar esse Hábito! ${response.data}`);
      setPromise(null);
    });
  }

  function keyboardAnswer(value) {
    setListHabit({ ...listHabit, name: value });
  }

  return (
    <BoxAddHabit hidden={displayAdd}>
      <form onSubmit={savingHabit}>
        <input
          type="text"
          placeholder="nome do hábito"
          value={listHabit.name}
          onChange={(e) => keyboardAnswer(e.target.value)}
          disabled={promise !== null ? true : false}
        ></input>
        <ButtonsDays
          listHabit={listHabit}
          setListHabit={setListHabit}
          click={promise !== null ? false : true}
        />
        <ButtonsAddHabits>
          <button
            type="button"
            onClick={() => setDisplayAdd(!displayAdd)}
            className="buttonCancel"
            disabled={promise !== null ? true : false}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="buttonSave"
            disabled={promise !== null ? true : false}
          >
            {promise !== null ? (
              <Loader type="ThreeDots" color="#FFFFFF" height={35} width={45} />
            ) : (
              "Salvar"
            )}
          </button>
        </ButtonsAddHabits>
      </form>
    </BoxAddHabit>
  );
}
