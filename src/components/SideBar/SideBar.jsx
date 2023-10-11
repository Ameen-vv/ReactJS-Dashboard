import React, { useState } from "react";

const SideBar = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(1);
  //DummyData
  const teams = [
    {
      id: 1,
      name: "f22Labs",
      logo: "/Logo.png",
      sharedWith: 1,
    },
    {
      id: 2,
      name: "Company 2",
      logo: "/Logo.png",
      sharedWith: 3,
    },
  ];

  return (
    <div className="container flex h-full">
      {/* SideBar */}
      <div className="max-h-full left-0 top-0 w-1/5 bg-zinc-50 shadow-[inset_0_-1px_8px_rgba(0,0,0.4,0.4)] flex flex-col">
        <div className="w-full flex items-center p-3 pt-4">
          <h3 className="text-sm me-auto font-semibold">My Teams</h3>
          <span className="ms-auto text-blue-600">
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        {/* options */}
        <div className="w-full">
          <ul className="w-full">
            {teams.map((team) => (
              <li
                className={`w-full  p-3 flex items-center cursor-pointer ${
                  selectedOption === team.id && "bg-white"
                }`}
                key={team.id}
                onClick={() => setSelectedOption(team.id)}
              >
                <img
                  src={team.logo}
                  alt="team logo"
                  className="h-10 w-10 me-3"
                />
                <div>
                  <h5 className="text-sm font-semibold ">{team.name}</h5>
                  <p className="opacity-60 text-[12px]">
                    shared with {team.sharedWith} people
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto bg-zinc-300 w-full flex justify-center items-center p-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 opacity-30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="opacity-30 font-medium text-sm">
            collapse
          </span>
        </div>
      </div>
      {/* content */}
      <div className="  w-4/5">{children}</div>
    </div>
  );
};

export default SideBar;
