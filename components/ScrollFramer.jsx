import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <section>
      <div ref={ref}>
      <div className="flex flex-row justify-start gap-[2.656vw] mb-[2.656vw]">
            <div className="w-[4.844vw] flex flex-col justify-start">
              <p className="text-[#000] font-s-pro text-[0.833vw] font-[590] leading-[1.0vw] tracking-[-0.05vw]">
                September
              </p>
              <p className="text-[#000] font-s-pro text-[0.833vw] font-[590] leading-[1.0vw] tracking-[-0.05vw]">
                2024
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  );
}

