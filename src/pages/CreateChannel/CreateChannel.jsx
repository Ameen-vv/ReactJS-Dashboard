import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

const CreateChannel = () => {
  const [selectedTab, setSelectedTab] = useState("schedule");

  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <NavBar />
        <div className="">
          <div className="flex w-full justify-center mt-2 ">
            <div className="w-1/2 ">
              <div className="flex items-center">
                <img src="/Logo.png" alt="LOGO" className="h-6 w-6" />
                <h3 className="text-sm ms-0.5">f22labs</h3>
              </div>
              <div className="flex items-center mt-0.5 text-center">
                <h1 className="text-xl">Bot-Army-Channel-Report</h1>
                <span className="ms-2 text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <hr className="mt-1" />
          <div className="w-full flex justify-center">
            <div className="w-1/2 flex items-center">
              {/* scheduling */}
              <div>
                <div className="flex p-1 items-center justify-start cursor-pointer">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span
                    className={`text-[13px] font-medium ms-1 ${
                      selectedTab === "schedule"
                        ? "text-black"
                        : "text-blue-500"
                    }`}
                  >
                    Scheduling
                  </span>
                </div>
                <hr
                  className={`mt-1 border-[1px] ${
                    selectedTab === "schedule"
                      ? "border-blue-500"
                      : "border-transparent"
                  } `}
                />
              </div>
              <span className="ms-5 opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              {/* Respond and requests */}
              <div className="ms-3">
                <div className="flex p-1 items-center justify-start cursor-pointer">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span
                    className={`text-[13px] font-medium ms-1 ${
                      selectedTab === "request" ? "text-black" : "text-blue-500"
                    }`}
                  >
                    Respondents & Request
                  </span>
                </div>
                <hr
                  className={`mt-1 border-[1px] ${
                    selectedTab === "requests"
                      ? "border-blue-500"
                      : "border-transparent"
                  } `}
                />
              </div>
              <span className="ms-5 opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              {/* result delivery */}
              <div className="ms-3">
                <div className="flex p-1 items-center justify-start cursor-pointer">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span
                    className={`text-[13px] font-medium ms-1 ${
                      selectedTab === "results" ? "text-black" : "text-blue-500"
                    }`}
                  >
                    Results Delivery
                  </span>
                </div>
                <hr
                  className={`mt-1 border-[1px] ${
                    selectedTab === "results"
                      ? "border-blue-500"
                      : "border-transparent"
                  } `}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="page" className=" bg-gray-100 flex-grow flex flex-col">
          <div className="w-full h-[90%] ">sad</div>
          <div className="w-full bg-white h-[10%]  flex justify-center">
            <div className="mt-2 flex gap-2">
              <button className="p-1 px-7 h-3/4 bg-gray-100 flex items-center text-[13px] border-solid border border-green-500 text-green-500 hover:bg-gray-200 rounded-sm">
                cancel
              </button>
              <button className="p-1 px-7 h-3/4 bg-green-500 flex items-center text-[13px] border-solid border border-green-500 text-white hover:bg-green-400 rounded-sm">
                save
              </button>
            </div>

            <div className="flex items-center relative left-32 text-blue-500">
              <span className="inline-block text-[12px]">next</span>
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
            <div className="bg-green-500 w-10 rounded-full h-10 self-center absolute right-2 flex items-center justify-center hover:bg-green-400 cursor-pointer">
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateChannel;
