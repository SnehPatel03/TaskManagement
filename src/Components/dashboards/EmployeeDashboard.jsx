import React, { useContext } from "react";
import Tasklist from "../Tasks/Tasklist";
import TaskBar from "../Tasks/taskBar";
import Header from './../../others/Header';
import { AuthContext } from '../../Context/AuthProvider';


function EmployeeDashboard({ email ,  changeUser }) {
  
  const [userData,setUserData] = useContext(AuthContext);
  const currentUser = userData.employeeData.find(emp => emp.email === email);
 
  return (
<<<<<<< HEAD
    <div className="md:h-[100vh] h-[180vh] w-full bg-[#1c1c1c] py-8 px-4 ">
=======
    <div className="h-[140vh] w-full bg-[#1c1c1c] py-8 px-4 ">
>>>>>>> c3c6f88e88015e2086576bfe2e942ae0dbdf9b06
      <Header data={currentUser} changeUser={changeUser} />
      <TaskBar data={currentUser} />
      <Tasklist data={currentUser} />
    </div>
  );
}

export default EmployeeDashboard;
