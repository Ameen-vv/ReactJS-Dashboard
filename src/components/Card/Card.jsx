import React from "react";

const Card = ({ report }) => {
  return (
    <div className="w-full h-48 p-3 shadow-lg">
      <div className="flex ">
        <h1 className="text-sm font-semibold">{report.title}</h1>
        <span
          className={`text-[10px] ms-2 px-1 flex rounded-md text-white text-center ${
            report.status === "active" ? "bg-green-600" : "bg-yellow-300"
          }`}
        >
          <p className="mt-0.5">
            {report.status === "active" ? "Active" : "Paused"}
          </p>
        </span>
        <span className="opacity-50 ms-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
        </span>
      </div>
      <p className="text-[12px] mt-1 text-blue-500 underline">
        {report.timing}
      </p>

      {/* placeholders */}
      <div className="mt-1 flex p-1 items-center">
        <span className="opacity-50">
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </span>
        <div className="ms-1">
          <h3 className="text-[11px] underline text-blue-500">Respondents</h3>
          <p className="text-[10px] opacity-50">
            3 peoples, 4 questions (1 with condition,30m waiting time)
          </p>
        </div>
      </div>
      <div className="mt-1 flex p-1 items-center">
        <span className="opacity-50">
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
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </span>
        <div className="ms-1">
          <h3 className="text-[11px] underline text-blue-500">Requests</h3>
          <p className="text-[10px] opacity-50">No requests</p>
        </div>
      </div>
      <div className="mt-1 flex p-1 items-center">
        <span className="opacity-50">
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
              d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
            />
          </svg>
          
        </span>
        <div className="ms-1">
          <h3 className="text-[11px] underline text-blue-500">Delivery</h3>
          <p className="text-[10px] opacity-50">
            Asynchronously, 1 people,#slackbot-army
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
