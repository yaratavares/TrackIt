import { useState } from "react";
import { createContext } from "react";

export const PercentageProgress = createContext();

export default function PercentageProgressProvider({ children }) {
  const [percentageProgress, setPercentageProgress] = useState(0);

  return (
    <PercentageProgress.Provider
      value={{ percentageProgress, setPercentageProgress }}
    >
      {children}
    </PercentageProgress.Provider>
  );
}
