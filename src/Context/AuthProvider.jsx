import React, { createContext, useEffect, useState } from "react";
import { getlocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const { employeeData, adminData } = getlocalStorage();
    setUserData({ employeeData, adminData });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
