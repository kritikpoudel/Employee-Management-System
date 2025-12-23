import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage();
  // });

  const [user, setUser] = useState(null);
  const[loggedInUserData,setLoggedInUserData]=useState(null)
   const authData=useContext(AuthContext)

useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){ 
      const userData=JSON.parse(loggedInUser)
       setUser(userData.role)
       setLoggedInUserData(userData.data)
    }

},[])


  const handleLogin = (email, password) => {
    if (!authData) return;

    const adminUser = authData.admin.find(
      (e) => e.email === email && e.password === password
    );

    if (adminUser) {
      setUser("admin");
      setLoggedInUserData(adminUser);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminUser })
      );
      return;
    }

    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }

    alert("Invalid Credential");
  };

 

  return (
    <>
        {!user ?<Login handleLogin={handleLogin} />:''}

    {user == "admin" ? <AdminDashboard changeUser={setUser} data={loggedInUserData} />:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    
      
    </>
  );
};

export default App;
