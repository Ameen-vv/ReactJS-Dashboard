import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const CompanyPage = ({ company,data }) => {
  const [time, setTime] = useState("");
  let updateTime;

  useEffect(() => {
    getTime();
    return () => clearInterval(updateTime);
  }, []);

  const getTime = () => {
    setTime(formatTime(new Date()));
    updateTime = setInterval(() => {
      setTime(formatTime(new Date()));
      console.log("1");
    }, 60000);
  };

  const formatTime = (timestamp) => {
    const options = {
      weekday: "long",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = new Date(timestamp).toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="w-full p-6 ">
      <h1 className=" text-xl">Good Morning, {company.name}</h1>
      <p className="text-[12px] opacity-50">{time}</p>
      {/* Reports */}
      <div className="mt-3">
        <h2>Reports</h2>
        <div className="w-full grid grid-cols-6 gap-2 h-3/4 ">
          {data?.map(() => (
            <div className="col-span-1 md:col-span-2">
              <Card report={company.reports[0]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
