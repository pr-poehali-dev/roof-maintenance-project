import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/ca681d2b-6ac9-4728-b0ae-14b9c3d0515f/files/37ce5855-27c4-4a1d-8a59-a5bd2ae7c8a7.jpg";

const ROOF_TYPES = [
  { id: "metal", label: "Металлочерепица", price: 850 },
  { id: "soft", label: "Мягкая кровля", price: 650 },
  { id: "prof", label: "Профнастил", price: 550 },
  { id: "seam", label: "Фальцевая кровля", price: 1200 },
  { id: "onduline", label: "Ондулин", price: 480 },
  { id: "natural", label: "Натуральная черепица", price: 1800 },
];

const WORK_TYPES = [
  { id: "repair", label: "Текущий ремонт", coeff: 1.0 },
  { id: "overhaul", label: "Капитальный ремонт", coeff: 1.6 },
  { id: "new", label: "Новая кровля", coeff: 1.3 },
  { id: "service", label: "Обслуживание", coeff: 0.5 },
];

const SERVICES = [
  {
    icon: "Wrench",
    title: "Текущий ремонт",
    desc: "Устранение протечек, замена повреждённых элементов, восстановление гидроизоляции.",
    price: "от 3 500 ₽",
  },
  {
    icon: "Construction",
    title: "Капитальный ремонт",
    desc: "Полная замена кровельного покрытия, стропильной системы и утепления.",
    price: "от 850 ₽/м²",
  },
  {
    icon: "Shield",
    title: "Обслуживание",
    desc: "Сезонный осмотр, очистка от мусора, мха и наледи. Профилактика протечек.",
    price: "от 1 200 ₽",
  },
  {
    icon: "Layers",
    title: "Утепление кровли",
    desc: "Монтаж теплоизоляции, пароизоляции и вентиляционных зазоров.",
    price: "от 650 ₽/м²",
  },
  {
    icon: "Droplets",
    title: "Гидроизоляция",
    desc: "Нанесение защитных покрытий, устройство примыканий и ендов.",
    price: "от 480 ₽/м²",
  },
  {
    icon: "Zap",
    title: "Молниезащита",
    desc: "Установка молниеотводов, заземляющих проводников и уравнивания потенциалов.",
    price: "от 12 000 ₽",
  },
];

const BLOG_POSTS = [
  {
    date: "15 марта 2026",
    tag: "Советы",
    title: "Как определить, что крыша требует ремонта",
    desc: "Пять признаков, на которые стоит обратить внимание весной после таяния снега.",
    icon: "Search",
  },
  {
    date: "02 февраля 2026",
    tag: "Материалы",
    title: "Металлочерепица vs профнастил: что выбрать",
    desc: "Подробное сравнение двух популярных кровельных материалов по цене, сроку службы и эстетике.",
    icon: "BarChart2",
  },
  {
    date: "18 января 2026",
    tag: "Уход",
    title: "Зимнее обслуживание кровли: памятка владельца",
    desc: "Как правильно чистить крышу от снега и избежать образования наледи.",
    icon: "Snowflake",
  },
];

const STATS = [
  { num: "1 200+", label: "Объектов сдано" },
  { num: "14", label: "Лет на рынке" },
  { num: "98%", label: "Довольных клиентов" },
  { num: "24/7", label: "Аварийный выезд" },
];

type Section = "home" | "services" | "about" | "calculator" | "blog" | "contacts";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const [area, setArea] = useState(80);
  const [roofType, setRoofType] = useState("metal");
  const [workType, setWorkType] = useState("repair");
  const [calcResult, setCalcResult] = useState<number | null>(null);

  const scrollTo = (id: Section) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const calcPrice = () => {
    const rt = ROOF_TYPES.find((r) => r.id === roofType)!;
    const wt = WORK_TYPES.find((w) => w.id === workType)!;
    const result = Math.round(area * rt.price * wt.coeff);
    setCalcResult(result);
  };

  const navItems: { id: Section; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "about", label: "О нас" },
    { id: "calculator", label: "Калькулятор" },
    { id: "blog", label: "Блог" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-coal scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-coal/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-9 h-9 bg-orange rounded-sm flex items-center justify-center">
              <Icon name="Home" size={18} className="text-white" />
            </div>
            <span className="font-oswald text-xl font-bold text-white tracking-widest uppercase">
              Кров<span className="text-orange">Мастер</span>
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
            <a href="tel:+78001234567" className="font-oswald text-orange font-semibold tracking-wide text-sm hover:text-orange-light transition-colors">
              8 800 123-45-67
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
              <a href="tel:+78001234567" className="font-oswald text-orange font-semibold tracking-wide">
                8 800 123-45-67
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
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

      {/* SERVICES */}
      <section id="services" className="py-24 bg-coal section-pattern relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="diagonal-line" />
              <span className="font-golos text-sm font-medium text-orange uppercase tracking-widest">Что мы делаем</span>
              <div className="diagonal-line" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
              Наши <span className="text-orange">услуги</span>
            </h2>
            <p className="font-golos text-white/50 text-lg max-w-2xl mx-auto">
              Полный спектр кровельных работ от диагностики до сдачи объекта под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-coal-light border border-white/8 rounded-xl p-6 card-hover cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange/15 rounded-lg flex items-center justify-center mb-4 border border-orange/20">
                  <Icon name={s.icon} size={22} className="text-orange" fallback="Wrench" />
                </div>
                <h3 className="font-oswald text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="font-golos text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-oswald text-orange font-bold text-lg">{s.price}</span>
                  <Icon name="ArrowRight" size={16} className="text-white/30" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => scrollTo("contacts")} className="btn-orange px-10 py-4 rounded text-base">
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-24 bg-coal-light relative overflow-hidden">
        <div className="geo-shape w-96 h-96 -top-20 -right-20 opacity-10 hidden lg:block" />
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="diagonal-line" />
              <span className="font-golos text-sm font-medium text-orange uppercase tracking-widest">Онлайн расчёт</span>
              <div className="diagonal-line" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
              Калькулятор <span className="text-orange">стоимости</span>
            </h2>
            <p className="font-golos text-white/50 text-lg">
              Узнайте примерную стоимость работ за 30 секунд
            </p>
          </div>

          <div className="bg-coal border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-golos text-white/70 text-sm font-medium">Площадь кровли</label>
                    <div className="flex items-center gap-1">
                      <span className="font-oswald text-2xl font-bold text-orange">{area}</span>
                      <span className="font-golos text-white/40 text-sm">м²</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    value={area}
                    onChange={(e) => { setArea(Number(e.target.value)); setCalcResult(null); }}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="font-golos text-white/25 text-xs">10 м²</span>
                    <span className="font-golos text-white/25 text-xs">500 м²</span>
                  </div>
                </div>

                <div>
                  <label className="font-golos text-white/70 text-sm font-medium block mb-3">Тип кровли</label>
                  <div className="grid grid-cols-2 gap-2">
                    {ROOF_TYPES.map((rt) => (
                      <button
                        key={rt.id}
                        onClick={() => { setRoofType(rt.id); setCalcResult(null); }}
                        className={`px-3 py-2.5 rounded-lg text-xs font-golos font-medium text-left transition-all border ${
                          roofType === rt.id
                            ? "bg-orange/20 border-orange text-orange"
                            : "bg-coal-light border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
                        }`}
                      >
                        {rt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-golos text-white/70 text-sm font-medium block mb-3">Вид работ</label>
                  <div className="grid grid-cols-2 gap-2">
                    {WORK_TYPES.map((wt) => (
                      <button
                        key={wt.id}
                        onClick={() => { setWorkType(wt.id); setCalcResult(null); }}
                        className={`px-3 py-2.5 rounded-lg text-xs font-golos font-medium text-left transition-all border ${
                          workType === wt.id
                            ? "bg-orange/20 border-orange text-orange"
                            : "bg-coal-light border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
                        }`}
                      >
                        {wt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calcPrice}
                  className="btn-orange w-full py-4 rounded-lg text-base"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="Calculator" size={18} />
                    Рассчитать стоимость
                  </span>
                </button>
              </div>

              <div className="flex flex-col justify-between">
                <div className="bg-coal-light border border-white/8 rounded-xl p-6 flex-1 flex flex-col justify-center items-center text-center min-h-48">
                  {calcResult === null ? (
                    <div>
                      <Icon name="Calculator" size={48} className="text-orange/30 mx-auto mb-4" />
                      <p className="font-golos text-white/30 text-sm">
                        Заполните параметры и нажмите «Рассчитать»
                      </p>
                    </div>
                  ) : (
                    <div className="animate-fade-in-up">
                      <div className="font-golos text-white/50 text-sm mb-2">Примерная стоимость работ</div>
                      <div className="font-oswald text-5xl font-bold text-orange mb-1">
                        {calcResult.toLocaleString("ru-RU")} ₽
                      </div>
                      <div className="font-golos text-white/30 text-xs mb-6">
                        {ROOF_TYPES.find(r => r.id === roofType)?.label} · {area} м² · {WORK_TYPES.find(w => w.id === workType)?.label}
                      </div>
                      <div className="text-xs text-white/30 font-golos">
                        * Точная стоимость определяется после выезда специалиста
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 bg-coal-light rounded-lg px-4 py-3 border border-white/5">
                    <Icon name="Check" size={16} className="text-orange flex-shrink-0" />
                    <span className="font-golos text-white/60 text-sm">Бесплатный выезд замерщика</span>
                  </div>
                  <div className="flex items-center gap-3 bg-coal-light rounded-lg px-4 py-3 border border-white/5">
                    <Icon name="Check" size={16} className="text-orange flex-shrink-0" />
                    <span className="font-golos text-white/60 text-sm">Договор и официальная гарантия</span>
                  </div>
                  <div className="flex items-center gap-3 bg-coal-light rounded-lg px-4 py-3 border border-white/5">
                    <Icon name="Check" size={16} className="text-orange flex-shrink-0" />
                    <span className="font-golos text-white/60 text-sm">Работаем с физлицами и организациями</span>
                  </div>
                </div>

                {calcResult !== null && (
                  <button
                    onClick={() => scrollTo("contacts")}
                    className="btn-orange w-full py-3 rounded-lg text-sm mt-4 animate-fade-in"
                  >
                    Оставить заявку на эту сумму
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-coal">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="diagonal-line" />
                <span className="font-golos text-sm font-medium text-orange uppercase tracking-widest">Кто мы</span>
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
                14 лет надёжного<br />
                <span className="text-orange">кровельного опыта</span>
              </h2>
              <p className="font-golos text-white/55 text-base leading-relaxed mb-6">
                КровМастер — команда сертифицированных кровельщиков с опытом работы на объектах любой сложности: от частных домов до промышленных зданий площадью более 10 000 м².
              </p>
              <p className="font-golos text-white/55 text-base leading-relaxed mb-8">
                Мы используем только проверенные материалы от ведущих производителей и соблюдаем технологию монтажа на каждом этапе. Гарантия на все виды работ — до 10 лет.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", text: "Лицензированные специалисты" },
                  { icon: "Clock", text: "Соблюдаем сроки" },
                  { icon: "FileText", text: "Официальный договор" },
                  { icon: "Truck", text: "Своё оборудование" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-coal-light border border-white/8 rounded-lg p-3">
                    <Icon name={item.icon} size={18} className="text-orange flex-shrink-0" fallback="Check" />
                    <span className="font-golos text-white/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-coal-light border border-white/8 rounded-xl p-6 text-center card-hover ${
                    i === 0 ? "border-orange/40" : ""
                  }`}
                >
                  <div className="font-oswald text-4xl md:text-5xl font-bold text-orange mb-2">{s.num}</div>
                  <div className="font-golos text-white/50 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 bg-coal-light section-pattern">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="diagonal-line" />
              <span className="font-golos text-sm font-medium text-orange uppercase tracking-widest">Полезно знать</span>
              <div className="diagonal-line" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
              Наш <span className="text-orange">блог</span>
            </h2>
            <p className="font-golos text-white/50 text-lg">
              Советы по уходу за кровлей и ответы на частые вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.title}
                className="bg-coal border border-white/8 rounded-xl overflow-hidden card-hover cursor-pointer group"
              >
                <div className="h-2 bg-orange" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-orange/15 rounded-lg flex items-center justify-center">
                      <Icon name={post.icon} size={14} className="text-orange" fallback="FileText" />
                    </div>
                    <span className="font-golos text-xs text-orange font-medium uppercase tracking-wide">{post.tag}</span>
                    <span className="font-golos text-xs text-white/30 ml-auto">{post.date}</span>
                  </div>
                  <h3 className="font-oswald text-lg font-semibold text-white mb-2 group-hover:text-orange transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-golos text-white/45 text-sm leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-orange/60 group-hover:text-orange transition-colors">
                    <span className="font-golos text-xs">Читать далее</span>
                    <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-coal relative overflow-hidden">
        <div className="geo-shape w-64 h-64 bottom-10 left-10 opacity-10 hidden lg:block" />
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="diagonal-line" />
              <span className="font-golos text-sm font-medium text-orange uppercase tracking-widest">Связаться</span>
              <div className="diagonal-line" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
              Оставьте <span className="text-orange">заявку</span>
            </h2>
            <p className="font-golos text-white/50 text-lg">
              Перезвоним в течение 30 минут и бесплатно проконсультируем
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-coal-light border border-white/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div>
                  <label className="font-golos text-white/60 text-sm block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    className="w-full bg-coal border border-white/10 rounded-lg px-4 py-3 font-golos text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="font-golos text-white/60 text-sm block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-coal border border-white/10 rounded-lg px-4 py-3 font-golos text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="font-golos text-white/60 text-sm block mb-2">Описание задачи</label>
                  <textarea
                    placeholder="Опишите проблему с кровлей или тип работ..."
                    rows={3}
                    className="w-full bg-coal border border-white/10 rounded-lg px-4 py-3 font-golos text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange transition-colors resize-none"
                  />
                </div>
                <button className="btn-orange w-full py-4 rounded-lg text-base">
                  Отправить заявку
                </button>
                <p className="font-golos text-white/25 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>

            <div className="space-y-4 flex flex-col justify-between">
              {[
                { icon: "Phone", title: "Телефон", value: "8 800 123-45-67", sub: "Бесплатный звонок по России" },
                { icon: "Mail", title: "Email", value: "info@krovmaster.ru", sub: "Ответим в течение 1 часа" },
                { icon: "MapPin", title: "Офис", value: "Москва, ул. Строительная, 12", sub: "Пн–Пт: 9:00–18:00" },
                { icon: "Clock", title: "Аварийный выезд", value: "24 часа в сутки", sub: "365 дней в году" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-coal-light border border-white/8 rounded-xl p-5 flex items-center gap-4 card-hover"
                >
                  <div className="w-11 h-11 bg-orange/15 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange/20">
                    <Icon name={item.icon} size={20} className="text-orange" fallback="Phone" />
                  </div>
                  <div>
                    <div className="font-golos text-white/40 text-xs mb-0.5">{item.title}</div>
                    <div className="font-oswald text-white font-semibold text-base">{item.value}</div>
                    <div className="font-golos text-white/35 text-xs">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-coal-light border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange rounded-sm flex items-center justify-center">
              <Icon name="Home" size={15} className="text-white" />
            </div>
            <span className="font-oswald text-lg font-bold text-white tracking-widest uppercase">
              Кров<span className="text-orange">Мастер</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-golos text-sm text-white/40 hover:text-orange transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="font-golos text-white/25 text-sm">
            © 2026 КровМастер
          </div>
        </div>
      </footer>
    </div>
  );
}
