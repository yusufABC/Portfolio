import { Download, Moon } from "lucide-react";

const Navbar = ({ isDarkMode, toggleTheme, activeSection }) => {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar bg-white border-b border-gray-100 px-4 lg:px-8 sticky top-0 z-40">
      <div className="navbar-start">
        <div className="text-xl font-bold">Portfolio</div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`hover:text-white hover:bg-black ${
                  activeSection === item.href.slice(1)
                    ? "underline underline-offset-4 font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <button
          className="btn btn-ghost btn-circle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="btn btn-neutral btn-sm text-white gap-2">
          <Download className="w-4 h-4" />
          Resume
        </button>
        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 border">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;