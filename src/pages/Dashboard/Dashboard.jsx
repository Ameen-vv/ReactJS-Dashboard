import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import CompanyPage from "../../components/CompanyPage/CompanyPage";
import axios from "axios";
import { getDataUrl } from "../../constants/ApiUrls";

const Dashboard = () => {
  //To Make Mock API
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(getDataUrl).then((response) => {
      setData(response.data.slice(0,20));
    });
  }, []);

  //company_dummy_data
  const company = {
    name: "F22 Labs",
    reports: [
      {
        id: "1",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "active",
      },
      {
        id: "2",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "pause",
      },
      {
        id: "3",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "active",
      },
      {
        id: "4",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "active",
      },
      {
        id: "5",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "pause",
      },
      {
        id: "6",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "pause",
      },
      {
        id: "6",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "pause",
      },
      {
        id: "6",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "pause",
      },
      {
        id: "6",
        title: "Bot-Army-Channel",
        timing: "Monday - Friday at 12:00 pm (Every week)",
        status: "pause",
      },
    ],
  };

  return (
    <>
      <div className="container h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">
          <SideBar>
            <div className="h-full overflow-y-auto">
              <CompanyPage company={company} data={data} />
            </div>
          </SideBar>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
