import React, { useState } from "react";

export const DropDown = ({ enteredValue, setEnteredValue }) => {
  const [open, setOpen] = useState(false);
  
  const dropDownItems = ["react", "js", "next", "html", "css"];

  const onClickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <button onClick={onClickHandler}>
        {enteredValue.skillsSet ? enteredValue.skillsSet : "select you skills"}
      </button>
      {open ? (
        <ul className="absolute z-10">
          {dropDownItems.map((item) => {
            return (
              <li
                onClick={() =>
                  setEnteredValue({ ...enteredValue, skillsSet: item })
                }
                key={item}
                className=" bg-white"
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
