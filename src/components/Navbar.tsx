import Icon from "@/components/ui/icon";

type Section = "home" | "services" | "about" | "calculator" | "blog" | "contacts";

interface NavbarProps {
  activeSection: Section;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  scrollTo: (id: Section) => void;
}

const navItems: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О нас" },
  { id: "calculator", label: "Калькулятор" },
  { id: "blog", label: "Блог" },
  { id: "contacts", label: "Контакты" },
];

export { navItems };
export type { Section };

export default function Navbar({ activeSection, mobileOpen, setMobileOpen, scrollTo }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-coal/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
          <div className="w-9 h-9 bg-orange rounded-sm flex items-center justify-center">
            <Icon name="Home" size={18} className="text-white" />
          </div>
          <span className="font-oswald text-xl font-bold text-white tracking-widest uppercase">
            Krishidzen
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link font-golos text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-orange active"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+79057108890" className="font-oswald text-orange font-semibold tracking-wide text-sm hover:text-orange-light transition-colors">
            +7 905 710 88 90
          </a>
          <button
            onClick={() => scrollTo("contacts")}
            className="btn-orange px-4 py-2 rounded text-sm"
          >
            Заявка
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-coal-light border-t border-white/5 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-6 py-4 font-golos text-sm text-white/80 hover:text-orange hover:bg-white/5 transition-colors border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <div className="px-6 py-4">
            <a href="tel:+79057108890" className="font-oswald text-orange font-semibold tracking-wide">
              +7 905 710 88 90
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}