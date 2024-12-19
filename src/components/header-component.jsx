import React from "react";
import { Link } from "react-router";

const HeaderComponent = () => {
  const headerItems = [
    { title: "form page", route: "/" },
    { title: "table page", route: "table" },
    { title: "chart page", route: "chart" },
  ];
  return (
    <div className="w-[1440px] h-[72px] text-[#8A001B] flex align-center items-center border border-t-0 border-l-0 border-r-0">
      <div>
        <h2 className="text-base font-black text-[dark-red]">Arianalabs</h2>
      </div>
      {headerItems.map((item) => {
        return (
          <div key={item.title}>
            <Link to={item.route}>
              <h2 className="text-base text-black mx-6">{item.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderComponent;
