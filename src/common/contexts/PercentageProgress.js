import { useState } from "react";
import { createContext } from "react";

export const PercentageProgress = createContext(0);

export default function PercentageProgressProvider({ children }) {
  const [percentageProgress, setPercentageProgress] = useState({});

  return (
    <PercentageProgress.Provider
      value={{ percentageProgress, setPercentageProgress }}
    >
      {children}
    </PercentageProgress.Provider>
  );
}
