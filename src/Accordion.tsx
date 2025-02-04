import React, { useEffect, useRef, useState } from "react";
import flecheDroite from "./assets/fleche-droite.png";

type PropsType = {
  title: String;
  children: React.ReactNode;
};
const Accordion = ({ title, children }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`shadow-lg w-4/5 h-24 bg-slate-100 flex justify-between py-4 px-8 mt-8 items-center rounded-t-lg cursor-pointer ${
          !isOpen && "rounded-b-lg"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className={"text-slate-500 text-4xl font-semibold"}>{title}</p>
        <img
          src={flecheDroite}
          alt="fleche"
          className={`duration-300 ease-in-out h-4 ${
            isOpen ? "-rotate-90" : "rotate-90"
          }`}
        />
      </div>
      <div
        ref={contentRef}
        className={`w-4/5 bg-slate-100 shadow-lg overflow-hidden duration-300 ease-in-out ${
          isOpen && "rounded-b-lg"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
