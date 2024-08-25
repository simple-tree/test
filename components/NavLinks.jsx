// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// function NavLinks({ name, href }) {
//   const { pathname } = useRouter();
//   const formattedString = name.toLowerCase().replace(/\s+/g, "-");
//   const isActive =
//     pathname.includes(href) || pathname.includes(formattedString);

//   return (
//     <div>
//       <Link href={href}>
//         <p
//           className={`font-s-pro text-[15px] font-[274] leading-[17.79px] tracking-[-0.9px] uppercase hover:text-hoverGreen ${
//             isActive ? "text-hoverGreen" : "text-black"
//           }`}
//           style={{
//             fontSize:
//               window.innerWidth > 1280
//                 ? "15px"
//                 : window.innerWidth >= 1080
//                   ? "12px"
//                   : window.innerWidth >= 768
//                     ? "10px"
//                     : "100%",
//             lineHeight:
//               window.innerWidth > 1280
//                 ? "17.79px"
//                 : window.innerWidth >= 1080
//                   ? "13px"
//                   : window.innerWidth >= 768
//                     ? "12px"
//                     : "100%",
//           }}
//         >
//           {name}
//         </p>
//       </Link>
//     </div>
//   );
// }

// export default NavLinks;

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLinks({ name, href }) {
  const { pathname } = useRouter();
  const formattedString = name.toLowerCase().replace(/\s+/g, "-");
  const isActive =
    pathname.includes(href) || pathname.includes(formattedString);

  return (
    <div>
      <Link href={href}>
        <p
          className={`font-s-pro uppercase hover:text-hoverGreen ${
            isActive ? "text-hoverGreen" : "text-black"
          }`}
          style={{
            fontSize: "0.78vw", // Dynamically adjust the font size based on viewport width
            lineHeight: "0.927vw", // Dynamically adjust the line height based on viewport width
            fontWeight: 274,
            letterSpacing: "-0.047vw",
            textTransform: "uppercase",
          }}
        >
          {name}
        </p>
      </Link>
    </div>
  );
}

export default NavLinks;
