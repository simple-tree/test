import React from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
function NavContent() {
  const btnColumn1 = [
    { name: "Projects", href: "/projects/grid/all-projects" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
  ];
  const btnColumn2 = [
    { name: "News", href: "/news" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <div className="flex items-center gap-[1.875vw] ">
        <div
          className="relative w-[5.557vw] h-[2.483vw]"   
        >
          <Image
            src="/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain" // Ensures the image scales properly
          />
        </div>
        <div className="flex gap-[1.875vw]">
          <div className="flex flex-col items-start ">
            {btnColumn1.map((link, index) => (
              <div key={index}>
                <NavLinks name={link.name} href={link.href} />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start ">
            {btnColumn2.map((link, index) => (
              <div key={index}>
                <NavLinks name={link.name} href={link.href} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavContent;