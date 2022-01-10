import { useContext, useEffect } from "react";
import { PercentageProgress } from "../../../common/contexts/PercentageProgress";
import { PercentageDay } from "./style";

export default function PercentageToday({ habits }) {
  const { percentageProgress, setPercentageProgress } =
    useContext(PercentageProgress);
  let takeDone = [];

  useEffect(() => {
    habits.map((habit) => {
      if (habit.done === true) {
        takeDone = [...takeDone, habit.done];
      }
      return takeDone;
    });
    setPercentageProgress(Math.round((takeDone.length / habits.length) * 100));
  }, [habits]);

  return (
    <PercentageDay percentage={percentageProgress}>
      {percentageProgress === 0
        ? "Nenhum hábito concluído ainda"
        : `${percentageProgress}% dos hábitos concluídos`}
    </PercentageDay>
  );
}
