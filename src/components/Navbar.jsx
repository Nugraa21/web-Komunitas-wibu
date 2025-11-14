import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  // Track scroll & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = navItems
          .map((item) => {
            const section = document.querySelector(item.href);
            if (section) {
              return {
                id: item.href.replace("#", ""),
                offset: section.offsetTop - 150,
                height: section.offsetHeight,
              };
            }
            return null;
          })
          .filter(Boolean);

        const currentPosition = window.scrollY;
        const active = sections.find(
          (section) =>
            currentPosition >= section.offset &&
            currentPosition < section.offset + section.height
        );
        setActiveSection(active ? active.id : "Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navigateAndScroll = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.querySelector(href);
      if (section) {
        const top = section.offsetTop - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = document.querySelector(`#${location.state.scrollTo}`);
      if (section) {
        const top = section.offsetTop - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
      navigate("/", { state: null, replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500
          ${scrolled
            ? "backdrop-blur-xl shadow-xl border border-white/20 scale-95"
            : "backdrop-blur-lg border border-white/10 scale-100"} 
        rounded-3xl px-8 py-4 w-[92%] max-w-[1150px]`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 text-teal-400 font-extrabold text-3xl tracking-wide drop-shadow-md glow">
            <Link
              to="/"
              onClick={(e) => navigateAndScroll(e, "#Home")}
              className="select-none"
            >
              K.ウィブ.UTDI
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={location.pathname === "/" ? item.href : "/"}
                onClick={(e) => navigateAndScroll(e, item.href)}
                className={`group relative px-1 py-2 text-sm font-medium transition-all duration-300
                  ${activeSection === item.href.substring(1) && location.pathname === "/"
                    ? "text-teal-400 font-semibold"
                    : "text-gray-900 hover:text-teal-400"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal-400 origin-left transition-transform duration-300
                    ${activeSection === item.href.substring(1) && location.pathname === "/"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-400 to-cyan-300 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
            >
              Join
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden fixed w-full top-0 z-50 transition-all duration-500
          ${scrolled || isOpen ? "bg-white shadow-md" : "bg-white/70 backdrop-blur-sm"}`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 text-teal-500 font-extrabold text-2xl tracking-wide drop-shadow-md">
              <Link
                to="/"
                onClick={(e) => navigateAndScroll(e, "#Home")}
              >
                ウィブ
              </Link>
            </div>

            {/* Hamburger */}
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="text-teal-500 hover:text-teal-600 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}
        >
          <div className="flex flex-col h-full pt-20">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={location.pathname === "/" ? item.href : "/"}
                onClick={(e) => navigateAndScroll(e, item.href)}
                className={`px-6 py-4 text-lg font-medium transition-all duration-300
                  ${activeSection === item.href.substring(1) && location.pathname === "/"
                    ? "text-teal-400 font-semibold"
                    : "text-gray-700 hover:text-teal-400"
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(50px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="mt-auto px-6 py-4 text-lg font-semibold text-white bg-teal-500 rounded mx-6 mb-8 hover:bg-teal-600 transition transform hover:scale-105"
              style={{
                transitionDelay: `${navItems.length * 100}ms`,
                transform: isOpen ? "translateX(0)" : "translateX(50px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
