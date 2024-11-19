// import * as React from "react";
// import TextContent from "./TextContent";
// import Statement from "./Statement";

// const MarketingSection = () => {
//   const mainText =
//     "SIMPLETREE is a One-Stop-Shop that is emerging as a pioneer in the real estate industry of Bangladesh. We dedicate ourselves to serve our clients with innovative and intelligent design solutions, execution, and facilities management. We strive every day to set new benchmarks for this industry in our country without deviating from our core values circling around Trust, Reliability, Sustainability, and Innovation. With over 6 LEED Certified projects, it is also in our practice to be conscious of our environment through the use of progressive technology.";

//   const statements = ["WE DESIGN.", "WE CONSTRUCT.", "WE EXECUTE."];

//   return (
//     <section className="flex flex-col items-center uppercase max-w-[258px] mx-auto">
//       <div className="flex flex-col px-2 w-full max-w-[258px]">
//         <TextContent text={mainText} />
//         <img 
//           loading="lazy" 
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c556c60fa480feeffc88fd275f8197b7788725df87ae4b20245fb121f55859e?placeholderIfAbsent=true&apiKey=479d9a7dd9a245609744dbc312d000df" 
//           alt=""
//           className="object-contain self-center -mt-1.5 w-3 aspect-[0.92]" 
//         />
//       </div>
//       <div className="flex gap-2.5 justify-center items-center mt-20 w-full max-w-[258px]">
//         <div className="flex flex-col gap-2.5 w-full">
//           {statements.map((statement, index) => (
//             <Statement key={index} text={statement} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketingSection;


import * as React from "react";
import TextContent from "./TextContent";
import Statement from "./Statement";

const MarketingSection = () => {
  const mainText =
    "SIMPLETREE is a One-Stop-Shop that is emerging as a pioneer in the real estate industry of Bangladesh. We dedicate ourselves to serve our clients with innovative and intelligent design solutions, execution, and facilities management. We strive every day to set new benchmarks for this industry in our country without deviating from our core values circling around Trust, Reliability, Sustainability, and Innovation. With over 6 LEED Certified projects, it is also in our practice to be conscious of our environment through the use of progressive technology.";

  const statements = ["WE DESIGN.", "WE CONSTRUCT.", "WE EXECUTE."];

  return (
    <section className="flex flex-col items-center uppercase max-w-[16.125rem] mx-auto"> {/* 258px = 16.125rem */}
      <div className="flex flex-col px-[0.125rem] w-full max-w-[16.125rem]"> {/* 2px = 0.125rem */}
        <TextContent text={mainText} />
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c556c60fa480feeffc88fd275f8197b7788725df87ae4b20245fb121f55859e?placeholderIfAbsent=true&apiKey=479d9a7dd9a245609744dbc312d000df" 
          alt=""
          className="object-contain self-center -mt-[0.09375rem] w-[0.1875rem] aspect-[0.92]" 
        />
      </div>
      <div className="flex gap-[0.15625rem] justify-center items-center mt-[1.25rem] w-full max-w-[16.125rem]"> {/* 2.5px = 0.15625rem, 20px = 1.25rem */}
        <div className="flex flex-col gap-[0.15625rem] w-full"> {/* 2.5px = 0.15625rem */}
          {statements.map((statement, index) => (
            <Statement key={index} text={statement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
