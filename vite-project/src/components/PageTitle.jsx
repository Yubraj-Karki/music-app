import React from "react";

const PageTitle = ({ title, icon: Icon }) => {
  return (
    <div className="flex items-center mt-[15px] text-[32px]">
      <Icon className="mr-[7px] text-[28px]" />
      <h3>{title}</h3>
    </div>
  );
};

export default PageTitle;
