import React, { useState } from "react";
import HeaderComponent from "../../components/header-component";
import { DropDown } from "../../modules/form";
import { userStore } from "../../store/store";
import { calculateAge } from "../../utiles/age-calculator";

export const FormPage = () => {
  const [enteredValue, setEnteredValue] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    skillsSet: "",
  });

  const add = userStore((state) => state.addUser);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    add(enteredValue);
    setEnteredValue(() => ({
      name: "",
      lastName: "",
      birthDate: "",
      skillsSet: "",
    }));
  };

  return (
    <div className="flex flex-col">
      <HeaderComponent />
      <div>
        <h2 className="text-[main-black] font-semibold text-lg py-4">
          Personal info
        </h2>
        <p className="text-[second-gray] text-sm font-normal">
          Update your photo and personal details here
        </p>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-row align-center items-center gap-[200px] border-b[silver] red-600 border  border-t-0 border-r-0 border-l-0 py-6">
          <label
            className="font-semibold text-sm text-[first-gray]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={enteredValue.name}
            className="w-[512px] h-[44px] rounded-lg border border-[third-gray]"
            onChange={(e) =>
              setEnteredValue({ ...enteredValue, name: e.target.value })
            }
          />
        </div>
        <div className="flex align-center items-center gap-[170px] border-b[silver] red-600 border  border-t-0 border-r-0 border-l-0 py-6">
          <label
            className="font-semibold text-sm text-[first-gray]"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-[512px] h-[44px] rounded-lg border border-[third-gray]"
            value={enteredValue.lastName}
            onChange={(e) =>
              setEnteredValue({ ...enteredValue, lastName: e.target.value })
            }
          />
        </div>
        <div className="flex align-center items-center gap-[170px] border-b[silver] red-600 border  border-t-0 border-r-0 border-l-0 py-6">
          <label
            className="font-semibold text-sm text-[first-gray]"
            htmlFor="birth"
          >
            Birth Date
          </label>
          <div>
            <input
              type="date"
              id="birth"
              className="w-[512px] h-[44px] rounded-lg  gap-[190px] border border-[third-gray] text-[#868686] "
              value={enteredValue.birthDate}
              onChange={(e) =>
                setEnteredValue({ ...enteredValue, birthDate: e.target.value })
              }
              placeholder=""
            />
            <p className="text-[#5C5C5C] text-base font-medium">
              {enteredValue.birthDate
                ? `calculated: ${calculateAge(
                    enteredValue.birthDate
                  )} years old`
                : null}
            </p>
          </div>
        </div>
        <div className="flex align-center items-center gap-2 flex align-center items-center gap-[170px] border-b[silver] red-600 border  border-t-0 border-r-0 border-l-0 py-6">
          <label className="font-semibold text-sm text-[first-gray]" htmlFor="">
            skills set
          </label>

          <DropDown
            enteredValue={enteredValue}
            setEnteredValue={setEnteredValue}
          />
        </div>
        <div className="flex flex-row-reverse mt-2">
          <button
            className="bg-[#C60026] text-white rounded-lg py-[10px] px-[16px] font-semibold text-sm w-[167px] h-[40px]"
            type="submit"
          >
            click me
          </button>
        </div>
      </form>
    </div>
  );
};
