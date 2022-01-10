import { useState } from "react";
import { createContext } from "react";

export const UserLogin = createContext();

export default function UserLoginProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserLogin.Provider value={{ user, setUser }}>
      {children}
    </UserLogin.Provider>
  );
}
