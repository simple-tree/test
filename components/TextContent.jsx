// import * as React from "react";

// const TextContent = ({ text }) => (
//     <div className="w-[258px]">
//   <p className="text-sf-pro z-10 uppercase text-base tracking-tighter leading-5 text-black font-[274]">
//     {text}
//   </p>
//   </div>
// );

// export default TextContent;

import * as React from "react";

const TextContent = ({ text }) => (
  <div className="w-[16.125rem]"> {/* 258px = 16.125rem */}
    <p className="font-s-pro z-10 uppercase text-[1rem] tracking-[-0.05625rem] leading-[1.25rem] text-black font-[274]"> {/* tracking tighter: -0.9px = -0.05625rem */}
      {text}
    </p>
  </div>
);

export default TextContent;
