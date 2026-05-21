import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="hidden lg:block lg:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-8 lg:col-span-7">
          <Navbar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
