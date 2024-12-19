import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export const DropDown = ({ enteredValue, setEnteredValue }) => {
  const [open, setOpen] = useState(false);
  
  const dropDownItems = ["react", "js", "next", "html", "css"];

  const onClickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <button onClick={onClickHandler} className="w-[512px] h-[44px] rounded-lg border border-[third-gray] text-left pl-4 text-[#868686] flex  items-center gap-[350px]">
        {enteredValue.skillsSet ? enteredValue.skillsSet : "select you skills"}
        <FiChevronDown size={10} />
      </button>
      {open ? (
        <ul className="absolute z-10 ">
          {dropDownItems.map((item) => {
            return (
              <li
              className='border bg-white px-6 py-2 text-right'
                onClick={() =>
                  setEnteredValue({ ...enteredValue, skillsSet: item })
                }
                key={item}
                
              >
                {item}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
