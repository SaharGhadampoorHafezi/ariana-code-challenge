// TODO: add the replace functionality


import React from "react";
import { userStore } from "../../store/store";
import { calculateAge } from "../../utiles/age-calculator";
import HeaderComponent from "../../components/header-component";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPen } from "react-icons/lu";

const ITEMS_PER_PAGE = 5; // Set the number of items per page

export const TablePage = () => {
  const users = userStore((state) => state.users);
  const remove = userStore((state) => state.removeUser);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  // Get the current users to display based on pagination
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col">
      <HeaderComponent />
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            {["Name", "Last Name", "Skills", "Age", "Actions"].map((item) => (
              <th key={item} className="border border-[#E9EAEB] bg-[#FAFAFA]">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <tr className="border" key={user.name}>
                <td className="border text-center py-6">{user.name}</td>
                <td className="border text-center py-6">{user.lastName}</td>
                <td className="border text-center py-6">{user.skillsSet}</td>
                <td className="border text-center py-6">
                  {calculateAge(user.birthDate)}
                </td>
                <td className="text-center py-6 flex items-center align-center relative">
                  <FaRegTrashAlt
                    className="absolute left-[30px]"
                    onClick={() => remove(user.name)}
                  />
                  <LuPen className="absolute left-[90px]" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border text-center py-6">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-center mt-4 items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-[#C60026] text-white rounded-lg py-[10px] px-[16px] font-semibold text-sm w-[167px] h-[40px]"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-[#C60026] text-white rounded-lg py-[10px] px-[16px] font-semibold text-sm w-[167px] h-[40px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};
