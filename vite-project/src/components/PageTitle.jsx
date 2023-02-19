import React from "react";

const PageTitle = ({ title, icon }) => {
  return (
    <div>
      {icon}
      <h3>{title}</h3>
    </div>
  );
};

export default PageTitle;
