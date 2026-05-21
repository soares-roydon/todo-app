import { useEffect, useState } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/user/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        setName(`${data.user.firstName} ${data.user.lastName}`);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="hidden lg:block lg:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-8 lg:col-span-7">
          <Navbar name={name}/>
          <Main name={name}/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
