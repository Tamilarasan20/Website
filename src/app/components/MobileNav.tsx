import { useState } from "react";
import MenuExpander from "../../imports/MenuExpander-2/MenuExpander-10-5589";
import MenuExpander2 from "../../imports/MenuExpander2-2/MenuExpander2-10-5710";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEmployees, setShowEmployees] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-[320px] z-50">
          {showEmployees ? (
            <div onClick={() => setShowEmployees(false)}>
              <MenuExpander2 />
            </div>
          ) : (
            <div onClick={() => setShowEmployees(true)}>
              <MenuExpander />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
