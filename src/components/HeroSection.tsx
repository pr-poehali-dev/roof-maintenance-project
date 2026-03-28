import Icon from "@/components/ui/icon";
import type { Section } from "@/components/Navbar";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/ca681d2b-6ac9-4728-b0ae-14b9c3d0515f/files/37ce5855-27c4-4a1d-8a59-a5bd2ae7c8a7.jpg";

const STATS = [
  { num: "1 200+", label: "Объектов сдано" },
  { num: "14", label: "Лет на рынке" },
  { num: "98%", label: "Довольных клиентов" },
  { num: "24/7", label: "Аварийный выезд" },
];

interface HeroSectionProps {
  scrollTo: (id: Section) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="geo-shape w-64 h-64 top-20 right-20 opacity-30 hidden lg:block" />
      <div className="geo-shape w-32 h-32 bottom-40 right-60 opacity-20 hidden lg:block" />
      <div className="geo-shape w-16 h-16 top-40 right-80 opacity-15 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="diagonal-line" />
            <span className="font-golos text-sm font-medium text-orange uppercase tracking-widest">
              Профессиональная кровля
            </span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up animate-delay-100">
            Ремонт<br />
            <span className="text-orange">и защита</span><br />
            вашей крыши
          </h1>
          <p className="font-golos text-white/60 text-lg leading-relaxed mb-10 max-w-md animate-fade-in-up animate-delay-200">
            Выполняем работы любой сложности: от точечного ремонта до полной замены кровли. Гарантия до 10 лет.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
            <button
              onClick={() => scrollTo("calculator")}
              className="btn-orange px-8 py-4 rounded text-base pulse-orange"
            >
              Рассчитать стоимость
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="btn-outline px-8 py-4 rounded text-base"
            >
              Наши услуги
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12 animate-fade-in-up animate-delay-400">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-1 h-10 bg-orange rounded-full" />
                <div>
                  <div className="font-oswald text-2xl font-bold text-white">{s.num}</div>
                  <div className="font-golos text-xs text-white/50">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in animate-delay-300 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-transparent rounded-2xl" />
          <img
            src={HERO_IMAGE}
            alt="Кровельные работы"
            className="w-full h-[500px] object-cover rounded-2xl border border-white/10"
          />
          <div className="absolute -bottom-6 -left-6 bg-orange rounded-xl p-4 shadow-2xl">
            <div className="font-oswald text-3xl font-bold text-white">10</div>
            <div className="font-golos text-xs text-white/80">лет гарантии</div>
          </div>
          <div className="absolute -top-4 -right-4 bg-coal-light border border-orange/30 rounded-xl p-3 shadow-xl">
            <div className="font-golos text-xs text-white/60 mb-1">Аварийный выезд</div>
            <div className="font-oswald text-base font-bold text-orange">24/7</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-orange/50" />
      </div>
    </section>
  );
}
