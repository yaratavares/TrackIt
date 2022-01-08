import { getHabits } from "../../../services/trackit";

function updateHabits(setListHabit, token) {
  const request = getHabits(token);
  request.then((response) => setListHabit(response.data));
}

export default updateHabits;
