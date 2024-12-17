import React from "react";
import { userStore } from "../../store/store";
import { calculateAge } from "../../utiles/age-calculator";

export const TablePage = () => {
  const users = userStore((state) => state.users);
  console.log(users);

  return (
    <form>
      <tr>
        <th>name</th>
        <th>Skills set</th>
        <th>Role</th>
        <th>age</th>
      </tr>
      {users.map((user) => {
        return (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.skillsSet}</td>
            <td>{user.role}</td>
            <td>{calculateAge(user.birthDate)}</td>
          </tr>
        );
      })}
    </form>
  );
};
