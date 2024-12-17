import React, { useState } from "react";

export const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");

  const dropDownItems = ["react", "js", "next", "html", "css"];

  const onClickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <button onClick={onClickHandler}>
        {select ? select : "select you skills"}
      </button>
      {open ? (
        <ul className="absolute z-10">
          {dropDownItems.map((item) => {
            return (
              <li
                onClick={() => setSelect(item)}
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
