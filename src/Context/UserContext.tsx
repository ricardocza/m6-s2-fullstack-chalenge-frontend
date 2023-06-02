import React, { createContext, useState } from "react";
import { api } from "../services/api";

interface iUserContext {
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  updateUser: (object: any) => Promise<boolean>;
}

interface iUserProps {
  children: React.ReactNode;
}
export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProps) => {
  const [userLoggedIn, setUserLoggedIn] = useState(true as boolean);

  const updateUser = async (data: any) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch("/user", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (error: any) {
      console.log(error);
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLoggedIn,
        setUserLoggedIn,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
