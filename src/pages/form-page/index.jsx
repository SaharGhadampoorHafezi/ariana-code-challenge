import React, { useState } from "react";
import HeaderComponent from "../../components/header-component";
import { DropDown } from "../../modules/form";
import { userStore } from "../../store/store";

export const FormPage = () => {
  const [enteredValue, setEnteredValue] = useState({
    name: "",
    role: "",
    birthDate: "",
    skillsSet: "",
  });


 

  const add = userStore((state) => state.addUser);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    add(enteredValue);
  };

  return (
    <div className="flex flex-col">
      <HeaderComponent />
      <div>
        <h2 className="text-[main-black] font-semibold text-lg">
          Personal info
        </h2>
        <p className="text-[second-gray] text-sm font-normal">
          Update your photo and personal details here
        </p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={enteredValue.name}
            onChange={(e) =>
              setEnteredValue({ ...enteredValue, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name={enteredValue.role}
            onChange={(e) =>
              setEnteredValue({ ...enteredValue, role: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="birth">Birth Date</label>
          <input
            type="date"
            id="birth"
            value={enteredValue.birthDate}
            onChange={(e) => setEnteredValue({...enteredValue, birthDate: e.target.value})}
          />
        </div>
        <div className="flex align-center items-center gap-2">
          <label htmlFor="">skills set</label>
          <DropDown
            enteredValue={enteredValue}
            setEnteredValue={setEnteredValue}
          />
        </div>
        <button type="submit">click me</button>
      </form>
    </div>
  );
};
