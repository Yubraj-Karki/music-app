import React from "react";

const User = ({ img, name }) => {
  return (
    <div className="user md:flex items-center justify-between hidden ">
      <div className="user-avatar  h-[40px] w-[40px] rounded-full object-cover  overflow-hidden">
        <img className="object-cover" src={img} alt="" />
      </div>
      <h3 className="userName text-[16px] ml-[15px]">{name}</h3>
    </div>
  );
};

export default User;
