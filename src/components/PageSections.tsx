import { useState } from "react";
import Icon from "@/components/ui/icon";
import { navItems } from "@/components/Navbar";
import type { Section } from "@/components/Navbar";
import ArticleModal from "@/components/ArticleModal";
import type { Article } from "@/components/ArticleModal";

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

const BLOG_POSTS: (Article & { desc: string; icon: string })[] = [
  {
    date: "15 марта 2026",
    tag: "Советы",
    icon: "Search",
    title: "Как определить, что крыша требует ремонта",
    desc: "Пять признаков, на которые стоит обратить внимание весной после таяния снега.",
    content: [
      {
        text: "Весна — самое важное время для осмотра кровли. После нескольких месяцев снеговых нагрузок, перепадов температур и оттепелей крыша может получить повреждения, которые летом обернутся протечками и дорогостоящим ремонтом. Своевременная диагностика позволяет устранить проблему малой кровью.",
      },
      {
        heading: "1. Пятна на потолке и стенах внутри помещения",
        text: "Жёлтые или коричневые пятна на потолке — первый и самый очевидный сигнал. Даже если пятно небольшое и уже высохло, это говорит о том, что вода однажды уже проникла внутрь. Источник протечки может находиться в нескольких метрах от пятна: вода идёт по стропилам и утеплителю, прежде чем капнуть вниз. Не ждите повторного намокания — вызовите специалиста для диагностики.",
      },
      {
        heading: "2. Деформация и провисание кровельных элементов",
        text: "Зайдите на чердак и осмотрите стропильную систему. Прогнувшиеся балки, растрескавшиеся доски обрешётки, следы плесени или гнили — всё это признаки длительного увлажнения конструкций. Особую опасность представляет ситуация, когда стропила начинают терять несущую способность: это риск обрушения в случае экстремальной снеговой нагрузки.",
      },
      {
        heading: "3. Повреждения кровельного покрытия снаружи",
        text: "Сломанные, сдвинутые или отсутствующие плитки черепицы, вздутия на мягкой кровле, ржавчина на металлочерепице или профнастиле — каждый из этих дефектов открывает путь для воды. Осмотрите конёк и ендовы: это наиболее уязвимые места любой кровли. Трещины в примыканиях у дымоходов и вентиляционных труб также требуют немедленного внимания.",
      },
      {
        heading: "4. Забитые или повреждённые водостоки",
        text: "Система водоотведения — неотъемлемая часть кровельного пирога. Забитые листьями, мусором или льдом желоба приводят к застою воды, которая подтекает под кровельное покрытие у карниза. Проверьте, нет ли трещин в желобах и воронках, плотно ли закреплены кронштейны. Повреждённый водосток — дешёвый ремонт, который предотвращает дорогой.",
      },
      {
        heading: "5. Рост мха и лишайника",
        text: "Зелёный или серый налёт на кровле — не просто эстетическая проблема. Корни мха разрушают поверхностный слой кровельных материалов, нарушают гидроизоляционные свойства и удерживают влагу. Если мох появился, значит кровля уже длительное время остаётся влажной. Требуется профессиональная очистка и обработка биоцидными составами.",
      },
      {
        heading: "Что делать после осмотра",
        text: "Если вы обнаружили хотя бы один из перечисленных признаков — не откладывайте обращение к специалисту. Ранняя диагностика и точечный ремонт обходятся в 5–10 раз дешевле капитального восстановления кровли. Наши специалисты выезжают на бесплатный осмотр в день обращения и дают письменное заключение о состоянии кровли.",
      },
    ],
  },
  {
    date: "02 февраля 2026",
    tag: "Материалы",
    icon: "BarChart2",
    title: "Металлочерепица vs профнастил: что выбрать",
    desc: "Подробное сравнение двух популярных кровельных материалов по цене, сроку службы и эстетике.",
    content: [
      {
        text: "Металлочерепица и профнастил — два самых популярных кровельных материала в России. Оба изготавливаются из стального листа с защитным покрытием, но имеют принципиальные различия в профиле, весе, цене и внешнем виде. Разберём детально, чтобы вы могли сделать осознанный выбор.",
      },
      {
        heading: "Металлочерепица: имитация классики",
        text: "Металлочерепица имеет сложный профиль, имитирующий натуральную черепицу. Это придаёт кровле богатый, эстетичный вид — особенно на домах с крутым скатом. Материал выпускается в широкой цветовой палитре с полимерным покрытием. Срок службы качественной металлочерепицы — 30–50 лет. Основные недостатки: высокий уровень шума при дожде (без качественного шумоизоляционного подкладочного ковра), сложность монтажа на малых углах наклона (менее 14°) и значительное количество отходов при раскрое.",
      },
      {
        heading: "Профнастил: практичность и экономия",
        text: "Профнастил — это стальной лист с трапециевидным или волновым профилем. Он проще в монтаже, даёт меньше отходов и стоит на 20–40% дешевле металлочерепицы. Материал универсален: подходит для кровель с углом наклона от 8°. Хорошо зарекомендовал себя на промышленных объектах, гаражах, хозяйственных постройках. На жилых домах также применяется, но воспринимается визуально проще.",
      },
      {
        heading: "Сравнение по ключевым параметрам",
        text: "Цена: профнастил — от 350 ₽/м², металлочерепица — от 550 ₽/м². Вес: оба материала лёгкие — 4–6 кг/м², не требуют усиления стропильной системы. Шум: металлочерепица при правильном монтаже с подкладочным ковром шумит незначительно; профнастил — аналогично. Эстетика: металлочерепица выигрывает для частных домов; профнастил — функциональный выбор. Минимальный угол наклона: металлочерепица — 14°, профнастил — 8°.",
      },
      {
        heading: "Какой материал выбрать в 2026 году",
        text: "Если бюджет ограничен, а объект — хозяйственная постройка или дача, выбирайте профнастил марки С21 или С44. Для жилого дома с претензией на эстетику — металлочерепица с полиэстеровым или пуралом покрытием. Важно: экономить на толщине листа не стоит — оптимум для кровли 0,45–0,5 мм. Материал тоньше 0,4 мм деформируется при нагрузке и быстро ржавеет в местах крепления.",
      },
      {
        heading: "Итог",
        text: "Оба материала достойны внимания. Правильный монтаж с качественной подкладкой, гидроизоляцией и вентиляционным зазором важнее выбора между ними. Именно монтаж определяет 70% срока службы кровли. Проконсультируйтесь с нашими специалистами — мы подберём оптимальное решение для вашего объекта и бюджета.",
      },
    ],
  },
  {
    date: "18 января 2026",
    tag: "Уход",
    icon: "Snowflake",
    title: "Зимнее обслуживание кровли: памятка владельца",
    desc: "Как правильно чистить крышу от снега и избежать образования наледи.",
    content: [
      {
        text: "Зима — серьёзное испытание для любой кровли. Снеговые нагрузки, резкие перепады температур и образование ледяных дамб ежегодно приводят к повреждениям тысяч крыш по всей России. Большинства проблем можно избежать, следуя простым правилам профилактики и обслуживания.",
      },
      {
        heading: "Какую снеговую нагрузку выдерживает крыша",
        text: "Согласно СП 20.13330.2017, расчётная снеговая нагрузка в Московской области составляет 180 кгс/м². Однако реальный мокрый снег после оттепели весит 300–400 кг/м³. Если на вашей кровле скопился слой более 20–25 см мокрого снега, начинайте уборку. Для сухого рыхлого снега критический слой — 40–50 см. Не ждите скрипа конструкций.",
      },
      {
        heading: "Как правильно чистить крышу",
        text: "Используйте пластиковую лопату или специальную раздвижную штангу с мягким скребком — металлический инструмент царапает покрытие и разрушает гидроизоляцию. Убирайте снег полосами от конька к карнизу, оставляя слой 3–5 см для защиты покрытия. Никогда не работайте на обледенелой кровле без страховки. Лучше доверить уборку профессионалам, оснащённым альпинистским снаряжением.",
      },
      {
        heading: "Наледь и ледяные дамбы: почему они образуются",
        text: "Наледь на карнизе — симптом плохой теплоизоляции чердака. Тёплый воздух из жилых помещений нагревает кровельное покрытие, снег тает и стекает к холодному карнизу, где замерзает. Образуется ледяная дамба, которая подпирает воду под покрытие. Решение — не колоть лёд (это повреждает кровлю), а устранить причину: улучшить утепление и вентиляцию чердака.",
      },
      {
        heading: "Кабельный антиобледенительный обогрев",
        text: "Современное решение проблемы наледи — резистивный или саморегулирующийся кабель в желобах и ендовах. Система включается автоматически при температуре около 0°C и таянии снега, поддерживая водосток в рабочем состоянии. Стоимость монтажа для дома 150 м² — от 80 000 ₽. Окупается за 3–5 сезонов за счёт исключения ущерба от наледи.",
      },
      {
        heading: "Чек-лист перед зимой",
        text: "Октябрь–ноябрь: очистите желоба от листьев, проверьте крепления водостоков, осмотрите примыкания у труб и конька. Проверьте состояние вентиляционных выходов — они не должны быть заблокированы. Убедитесь, что чердак хорошо вентилируется: при правильной вентиляции температура на чердаке должна быть близка к уличной. Это исключает неравномерное таяние снега и образование наледи.",
      },
      {
        heading: "Когда вызывать профессионалов",
        text: "Если снеговая нагрузка критическая, кровля крутая или скользкая, имеются признаки повреждений — не рискуйте самостоятельно. Наша бригада выезжает на аварийную очистку кровли круглосуточно. Работаем с промышленными альпинистами, соблюдаем технику безопасности, страхуем работников и имущество заказчика.",
      },
    ],
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
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

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
                onClick={() => setActiveArticle(post)}
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

      <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
    </>
  );
}