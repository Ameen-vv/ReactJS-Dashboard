import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

const Dashboard = () => {
  return (
    <>
      <div className="container h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">
          <SideBar>
            <div className="h-full overflow-y-auto">
              
            </div>
          </SideBar>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
