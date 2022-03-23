import React, { useState } from "react";

export default function DropDown({ data, value, setValue }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="text-white w-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={(_) => setOpen(!open)}
      >
        {value}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`absolute z-10 w-24 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
          open ? "" : "hidden"
        }`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDividerButton"
        >
          {data.map((item, i) => (
            <li key={i}>
              <a
                onClick={(_) => {
                  setValue(item);
                  setOpen(false);
                }}
                className={`block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                  item === value ? "bg-gray-200" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
