import { useState } from "react";
import Icon from "@/components/ui/icon";
import { navItems } from "@/components/Navbar";
import type { Section } from "@/components/Navbar";

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
  {
    icon: "Wind",
    title: "Вентиляция кровли",
    desc: "Монтаж кровельных вентиляционных элементов: аэраторов, коньковых и точечных продухов.",
    price: "от 1 500 ₽/шт.",
  },
  {
    icon: "Shield",
    title: "Защита кровли сеткой",
    desc: "Монтаж защитной сетки от падения веток, наледи, птиц и другого мусора сверху.",
    price: "от 300 ₽/м²",
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

interface PageSectionsProps {
  scrollTo: (id: Section) => void;
  children?: React.ReactNode;
}

export default function PageSections({ scrollTo, children }: PageSectionsProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) return;
    setStatus("sending");
    try {
      await fetch(`https://formsubmit.co/ajax/pruddzen@gmail.com`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message,
          _subject: "Новая заявка с сайта Krishidzen",
        }),
      });
      setStatus("sent");
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
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

      {children}

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
                Krishidzen — команда сертифицированных кровельщиков с опытом работы на объектах любой сложности: от частных домов до промышленных зданий площадью более 10 000 м².
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
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-orange/15 rounded-full flex items-center justify-center mb-4 border border-orange/30">
                    <Icon name="CheckCircle" size={32} className="text-orange" />
                  </div>
                  <h3 className="font-oswald text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                  <p className="font-golos text-white/50 text-sm">Мы свяжемся с вами в течение 30 минут</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline px-6 py-2 rounded-lg text-sm mt-6"
                  >
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="font-golos text-white/60 text-sm block mb-2">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Иван Петров"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-coal border border-white/10 rounded-lg px-4 py-3 font-golos text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-white/60 text-sm block mb-2">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-coal border border-white/10 rounded-lg px-4 py-3 font-golos text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-white/60 text-sm block mb-2">Описание задачи</label>
                    <textarea
                      placeholder="Опишите проблему с кровлей или тип работ..."
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-coal border border-white/10 rounded-lg px-4 py-3 font-golos text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange transition-colors resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="font-golos text-red-400 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={status === "sending" || !name.trim() || !phone.trim()}
                    className="btn-orange w-full py-4 rounded-lg text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Отправляем..." : "Отправить заявку"}
                  </button>
                  <p className="font-golos text-white/25 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4 flex flex-col justify-between">
              {[
                { icon: "Phone", title: "Телефон", value: "+7 905 710 88 90", sub: "Звонок и WhatsApp" },
                { icon: "Mail", title: "Email", value: "pruddzen@gmail.com", sub: "Ответим в течение 1 часа" },
                { icon: "MapPin", title: "Офис", value: "Кубинка, Наро-Фоминское шоссе 4", sub: "Пн–Пт: 9:00–18:00" },
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
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange rounded-sm flex items-center justify-center">
                <Icon name="Home" size={15} className="text-white" />
              </div>
              <span className="font-oswald text-lg font-bold text-white tracking-widest uppercase">
                Krishidzen
              </span>
              <a
                href="https://max.ru/join/ntdXg7t0QJLNlMjZz0vaeLeQio8hIF9Eesv-fcd_LOY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-sm p-0.5 hover:scale-110 transition-all duration-300 block"
                title="ДомДзен — Строим с душой"
              >
                <img
                  src="https://cdn.poehali.dev/projects/ca681d2b-6ac9-4728-b0ae-14b9c3d0515f/bucket/f7fdbd70-af21-427e-b40a-9749d87d7a53.jpg"
                  alt="QR-код канала ДомДзен"
                  className="w-8 h-8 object-contain"
                />
              </a>
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
              © 2026 Krishidzen
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}