import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const AccordionItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-100 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
      >
        <span className="font-medium text-gray-900">{q}</span>
        <BsChevronDown
          className={`text-gray-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
