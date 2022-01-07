import { useState } from "react";
import { createContext } from "react";

export const UserLogin = createContext();

export default function UserLoginProvider({ children }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <UserLogin.Provider value={{ data, setData }}>
      {children}
    </UserLogin.Provider>
  );
}
