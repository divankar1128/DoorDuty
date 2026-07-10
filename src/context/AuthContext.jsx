import { createContext, useContext, useEffect, useState } from "react";
import dummyUsers from "../data/dummyUsers";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("doorDutyUser");

    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  function login(email, password) {
    const found = dummyUsers.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!found) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setUser(found);

    localStorage.setItem(
      "doorDutyUser",
      JSON.stringify(found)
    );

    return {
      success: true,
    };
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("doorDutyUser");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}