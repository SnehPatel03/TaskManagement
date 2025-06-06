import { React, useContext, useEffect, useState } from "react";
import AdminDashboard from "./Components/dashboards/AdminDashboard";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/dashboards/EmployeeDashboard";
import { AuthContext } from "./Context/AuthProvider";
import { getlocalStorage, setlocalStorage } from "./utils/localStorage";

function App() {

  const [user, setUser] = useState(null);
  const [userLoggedInData, setuserLoggedInData] = useState(null);
  const authData = useContext(AuthContext);
// localStorage.clear();
  useEffect(() => {
    const loggedInuser = localStorage.getItem("userLoggedInData");

    if (loggedInuser) {
      const parsedData = JSON.parse(loggedInuser);
      setuserLoggedInData(parsedData.data);
      setUser(parsedData.role);
    }
  }, [])


  const loginHandel = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("userLoggedInData", JSON.stringify({ role: "admin" }));
    } 
    
    else if (authData) {
      const employee = authData.employeeData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setuserLoggedInData(employee);
        localStorage.setItem(
          "userLoggedInData",
          JSON.stringify({ role: "employee" , data: employee })
        );
      }
    } else {
      alert("Invalid user , Enter valid email and password");
    }
  };

  useEffect(() => {
    setlocalStorage();
    getlocalStorage();
  }, []);

  return (
    <>
      {!user ? <Login loginHandel={loginHandel} /> : null}
      {user === "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={userLoggedInData} /> : null)}
    </>
  );
}

export default App;

