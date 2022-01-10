import { useContext, useEffect } from "react";
import { PercentageProgress } from "../../../common/contexts/PercentageProgress";
import { PercentageDay } from "./style";

export default function PercentageToday({ habits }) {
  const { percentageProgress, setPercentageProgress } =
    useContext(PercentageProgress);

  useEffect(() => {
    let takeDone = [];
    habits.map((habit) => {
      if (habit.done === true) {
        takeDone = [...takeDone, habit.done];
      }
      return takeDone;
    });
    if (takeDone.length !== 0) {
      setPercentageProgress(
        Math.round((takeDone.length / habits.length) * 100)
      );
    } else {
      setPercentageProgress(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [habits]);

  return (
    <PercentageDay percentage={percentageProgress}>
      {percentageProgress === 0
        ? "Nenhum hábito concluído ainda"
        : `${percentageProgress}% dos hábitos concluídos`}
    </PercentageDay>
  );
}
