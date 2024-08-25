import React from "react";

import NavContent from "./NavContent";

const NavBar = () => {
  return (
    <div
      className="flex flex-col pl-[2.29vw] pt-[2.29vw] items-start gap-[1.875vw] w-full fixed top-0 z-50"
      style={{ width: "57vw" }}
    >
      <NavContent />
    </div>
  );
};

export default NavBar;
