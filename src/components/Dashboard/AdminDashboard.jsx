import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="p-10 w-full h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
