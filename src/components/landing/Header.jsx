// import { NavLink, Link } from "react-router-dom";
// import { useState } from "react";
// import { BsList, BsX, BsChevronDown } from "react-icons/bs"

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggleMobile = () => setMobileOpen((s) => !s);

//   const navLinkClass = ({ isActive }) =>
//     `px-3 py-2 rounded hover:text-blue-600 ${
//       isActive ? "text-blue-600" : "text-gray-700"
//     }`;

//   return  (
//     <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2">
//           {/* If you want an image logo, place it here */}
//           {/* <img src="/assets/img/logo.png" alt="" className="h-8" /> */}
//           <h1 className="text-xl font-bold tracking-tight">
//             Keneva<span className="text-blue-600">.</span>
//           </h1>
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden md:flex items-center gap-1 text-sm">
//           <NavLink to="/" end className={navLinkClass}>Home</NavLink>
//           <NavLink to="/about" className={navLinkClass}>About</NavLink>
//           <NavLink to="/services" className={navLinkClass}>Services</NavLink>
//           <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
//           <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen((s) => !s)}
//               className="px-3 py-2 rounded inline-flex items-center gap-1 text-gray-700 hover:text-blue-600"
//             >
//               <span>Dropdown</span>
//               <BsChevronDown className={`transition ${dropdownOpen ? "rotate-180" : ""}`} />
//             </button>
//             {dropdownOpen && (
//               <div
//                 onMouseLeave={() => setDropdownOpen(false)}
//                 className="absolute right-0 mt-2 w-56 rounded border bg-white shadow-lg p-2"
//               >
//                 <Link to="#" className="block px-3 py-2 rounded hover:bg-gray-50">Dropdown 1</Link>

//                 {/* Deep dropdown */}
//                 <div className="group relative">
//                   <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 inline-flex items-center justify-between">
//                     <span>Deep Dropdown</span>
//                     <BsChevronDown className="transition group-hover:rotate-180" />
//                   </button>
//                   <div className="hidden group-hover:block absolute left-full top-0 ml-1 w-56 rounded border bg-white shadow-lg p-2">
//                     {["Deep Dropdown 1","Deep Dropdown 2","Deep Dropdown 3","Deep Dropdown 4","Deep Dropdown 5"].map((t) => (
//                       <Link key={t} to="#" className="block px-3 py-2 rounded hover:bg-gray-50">{t}</Link>
//                     ))}
//                   </div>
//                 </div>

//                 {["Dropdown 2","Dropdown 3","Dropdown 4"].map((t) => (
//                   <Link key={t} to="#" className="block px-3 py-2 rounded hover:bg-gray-50">{t}</Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
//         </nav>

//         {/* Mobile toggle */}
//         <button
//           onClick={toggleMobile}
//           className="md:hidden p-2 rounded border hover:bg-gray-50"
//           aria-label="Toggle navigation"
//         >
//           {mobileOpen ? <BsX size={22} /> : <BsList size={22} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div className="md:hidden border-t bg-white">
//           <nav className="max-w-7xl mx-auto px-4 py-2 flex flex-col text-sm">
//             <NavLink to="/" end className={navLinkClass} onClick={() => setMobileOpen(false)}>Home</NavLink>
//             <NavLink to="/about" className={navLinkClass} onClick={() => setMobileOpen(false)}>About</NavLink>
//             <NavLink to="/services" className={navLinkClass} onClick={() => setMobileOpen(false)}>Services</NavLink>
//             <NavLink to="/projects" className={navLinkClass} onClick={() => setMobileOpen(false)}>Projects</NavLink>
//             <NavLink to="/blog" className={navLinkClass} onClick={() => setMobileOpen(false)}>Blog</NavLink>

//             {/* Simple dropdown in mobile */}
//             <details className="px-1 py-1">
//               <summary className="px-3 py-2 rounded hover:text-blue-600 cursor-pointer">Dropdown</summary>
//               <div className="ml-3 mt-1 flex flex-col">
//                 <Link to="#" className="px-3 py-2 rounded hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Dropdown 1</Link>
//                 <details>
//                   <summary className="px-3 py-2 rounded hover:bg-gray-50 cursor-pointer">Deep Dropdown</summary>
//                   <div className="ml-3 flex flex-col">
//                     {["Deep Dropdown 1","Deep Dropdown 2","Deep Dropdown 3","Deep Dropdown 4","Deep Dropdown 5"].map((t) => (
//                       <Link key={t} to="#" className="px-3 py-2 rounded hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{t}</Link>
//                     ))}
//                   </div>
//                 </details>
//                 {["Dropdown 2","Dropdown 3","Dropdown 4"].map((t) => (
//                   <Link key={t} to="#" className="px-3 py-2 rounded hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{t}</Link>
//                 ))}
//               </div>
//             </details>

//             <NavLink to="/contact" className={navLinkClass} onClick={() => setMobileOpen(false)}>Contact</NavLink>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }


import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsList, BsX, BsChevronDown } from "react-icons/bs";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobile = () => setMobileOpen((s) => !s);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // NavLink styles (underline animation)
  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300
     ${isActive
        ? " after:w-full"
        : "after:w-0 hover:after:w-full"
     }
     ${scrolled ? "text-gray-800 " : "text-white "}
    `;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className={`text-2xl font-bold transition
            ${scrolled ? "text-gray-900" : "text-white"}`}>
            Keneva<span className="text-yellow-400">.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((s) => !s)}
              className={`px-3 py-2 inline-flex items-center gap-1 font-medium transition
                ${scrolled ? "text-gray-800 hover:text-yellow-500" : "text-white hover:text-yellow-400"}
              `}
            >
              <span>Dropdown</span>
              <BsChevronDown className={`transition ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute right-0 mt-3 w-56 rounded-md bg-white shadow-lg border p-2"
              >
                <Link to="#" className="block px-3 py-2 rounded hover:bg-gray-50">Dropdown 1</Link>

                <div className="group relative">
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 inline-flex items-center justify-between">
                    <span>Deep Dropdown</span>
                    <BsChevronDown className="transition group-hover:rotate-180" />
                  </button>
                  <div className="hidden group-hover:block absolute left-full top-0 ml-1 w-56 rounded border bg-white shadow-lg p-2">
                    {["Deep Dropdown 1","Deep Dropdown 2","Deep Dropdown 3","Deep Dropdown 4","Deep Dropdown 5"].map((t) => (
                      <Link key={t} to="#" className="block px-3 py-2 rounded hover:bg-gray-50">{t}</Link>
                    ))}
                  </div>
                </div>

                {["Dropdown 2","Dropdown 3","Dropdown 4"].map((t) => (
                  <Link key={t} to="#" className="block px-3 py-2 rounded hover:bg-gray-50">{t}</Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={toggleMobile}
          className={`md:hidden p-2 rounded transition
            ${scrolled ? "text-gray-900" : "text-white"}
          `}
        >
          {mobileOpen ? <BsX size={24} /> : <BsList size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col text-sm">
            {["/","/about","/services","/projects","/blog","/contact"].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                end={path === "/"}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 font-medium text-gray-800 hover:text-yellow-500"
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
