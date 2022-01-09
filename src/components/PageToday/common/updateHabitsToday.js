import { getHabitsToday } from "../../../services/trackit";

export default function updateHabitsToday(token, setHabitsDay) {
  const request = getHabitsToday(token);
  request.then((response) => {
    setHabitsDay(response.data);
  });
  request.catch((response) => console.log(response));
}
