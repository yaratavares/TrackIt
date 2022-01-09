import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import { DayTitle } from "./style";

export default function DayFormat() {
  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", {
    weekdays: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
  });
  var dayNow = dayjs().format("dddd, DD/MM");

  return <DayTitle>{dayNow}</DayTitle>;
}
