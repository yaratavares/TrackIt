import { useState } from "react";
import { createContext } from "react";

export const UserLogin = createContext();

export default function UserLoginProvider({ children }) {
  const objectUser = localStorage.getItem("user");
  const userOnLocalStorage = JSON.parse(objectUser);
  const [user, setUser] = useState(
    userOnLocalStorage !== null ? userOnLocalStorage : {}
  );
  console.log(user);

  function setAndPersistUser(userLogin) {
    setUser(userLogin);
    const stringUser = JSON.stringify(userLogin);
    localStorage.setItem("user", stringUser);
  }

  return (
    <UserLogin.Provider value={{ user, setAndPersistUser }}>
      {children}
    </UserLogin.Provider>
  );
}
