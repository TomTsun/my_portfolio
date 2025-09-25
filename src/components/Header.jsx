const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
const baseLinkClasses = "relative pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-blue-500 after:transition after:duration-300 after:content-[''] hover:text-blue-600 hover:after:scale-x-100";

export default function Header({ activeSection = "home" }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold">Po Tsun (Tom) Yu</a>
        <ul className="hidden md:flex gap-6 text-sm text-gray-600">
          {navItems.map(id => {
            const target = id.toLowerCase();
            const isActive = activeSection === target;

            return (
              <li key={id}>
                <a
                  href={`#${target}`}
                  className={`${baseLinkClasses} ${isActive ? "text-blue-600 after:scale-x-100" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {id}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
