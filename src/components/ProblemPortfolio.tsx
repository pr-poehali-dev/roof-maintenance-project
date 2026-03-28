import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface Problem {
  image: string;
  tag: string;
  title: string;
  shortDesc: string;
  whatHappened: string;
  howToFix: string;
  howToPrevent: string;
}

const PROBLEMS: Problem[] = [
  {
    image: "https://cdn.poehali.dev/projects/ca681d2b-6ac9-4728-b0ae-14b9c3d0515f/files/d190ebfd-a55f-4725-b1ab-f1f0359bbb3f.jpg",
    tag: "Биологические повреждения",
    title: "Мох и плесень на кровле",
    shortDesc: "Зелёный налёт на черепице — не просто некрасиво. Это активное разрушение кровельного покрытия.",
    whatHappened: "На кровле частного дома в течение нескольких лет активно разрастался мох. Корневые нити мха проникли под черепицу, нарушив гидроизоляционный слой. В результате под покрытием начала скапливаться влага, образовалась плесень на стропилах. Особенно пострадали северные скаты, где меньше солнца и дольше сохраняется сырость.",
    howToFix: "Специалисты выполнили механическую и химическую очистку кровли — мох и плесень были удалены специализированными составами без давления, чтобы не повредить покрытие. Повреждённые элементы черепицы заменили, гидроизоляционный слой восстановили. Стропила обработали антисептиком глубокого проникновения. Затем нанесли биоцидное покрытие на всю поверхность кровли.",
    howToPrevent: "Для предотвращения повторного роста мха необходимо ежегодно проводить осмотр кровли весной и осенью. Рекомендуется установка медных или цинковых полос вдоль конька — ионы металла при дожде стекают по скату и подавляют биологическую активность. Также важно обеспечить хорошее проветривание подкровельного пространства и не допускать застоя листьев в водостоках.",
  },
  {
    image: "https://cdn.poehali.dev/projects/ca681d2b-6ac9-4728-b0ae-14b9c3d0515f/files/b1596165-6ec8-4f00-97fe-bf7ebe6b35bf.jpg",
    tag: "Механические повреждения",
    title: "Трещины и сколы черепицы",
    shortDesc: "Разрушенная черепица открывает прямой путь воде внутрь кровельного пирога.",
    whatHappened: "После сильного ветра и выпадения крупного града несколько листов металлочерепицы получили видимые деформации и сколы. Примыкание у дымохода также было нарушено — герметик растрескался, образовав зазор шириной до 5 мм. Через эти повреждения вода начала попадать в утеплитель, и уже через два дождя на потолке верхнего этажа появились характерные пятна.",
    howToFix: "Повреждённые листы металлочерепицы были демонтированы и заменены на новые из той же партии с сохранением цвета. Примыкание у дымохода полностью переустроено: установлен фартук из оцинкованной стали с двойным нахлёстом, места соединения заполнены полиуретановым герметиком. Намокший участок утеплителя заменили на новый, пароизоляция восстановлена. Работы заняли один день.",
    howToPrevent: "После каждого серьёзного шторма или градопада рекомендуется осмотреть кровлю с земли в бинокль. Особое внимание — примыканиям у дымоходов, вентиляционных труб и мансардных окон: именно эти зоны наиболее уязвимы. Плановый осмотр с заменой герметика в примыканиях рекомендуется проводить раз в 3–5 лет.",
  },
  {
    image: "https://cdn.poehali.dev/projects/ca681d2b-6ac9-4728-b0ae-14b9c3d0515f/files/73e8f707-46d9-49eb-aaa1-8e2fb0c9fb9e.jpg",
    tag: "Зимние повреждения",
    title: "Наледь и ледяные дамбы",
    shortDesc: "Ледяной барьер на карнизе — причина протечек даже при идеальном кровельном покрытии.",
    whatHappened: "В феврале на доме образовались мощные ледяные дамбы вдоль карнизного свеса. Тающий снег с тёплой части кровли доходил до холодного карниза и замерзал, образуя ледяной барьер высотой до 25 см. Талая вода начала подтекать под кровельное покрытие, минуя водосток. В итоге — намокание утеплителя в карнизной зоне и следы протечки на стенах мансарды.",
    howToFix: "В первую очередь ледяные дамбы были удалены механически специальными пластиковыми инструментами без повреждения покрытия. Затем в карнизной зоне смонтирована система антиобледенения — саморегулирующийся нагревательный кабель в желобах и на свесах. Намокший утеплитель заменён, гидроизоляционный ковёр в зоне карниза усилен дополнительным слоем подкладочного ковра шириной 1 м.",
    howToPrevent: "Главная причина наледи — неравномерный температурный режим кровли: тёплый чердак или тёплая кровля без вентиляции. Правильно организованный вентилируемый подкровельный зазор и качественная теплоизоляция чердачного перекрытия устраняют проблему в корне. Дополнительно — антиобледенительный кабель в желобах и свесах. Ручная уборка снега должна выполняться пластиковым скребком, а не металлической лопатой.",
  },
  {
    image: "https://cdn.poehali.dev/projects/ca681d2b-6ac9-4728-b0ae-14b9c3d0515f/files/55f788a9-697b-40f6-836c-eb25ce03c4e3.jpg",
    tag: "Коррозия",
    title: "Ржавчина и коррозия металла",
    shortDesc: "Рыжие пятна на кровле — сигнал тревоги. Без лечения сквозная дыра появляется за 2–3 года.",
    whatHappened: "На крыше производственного здания в местах крепления профнастила появились рыжие пятна коррозии. Причина — использование при монтаже обычных оцинкованных саморезов вместо специальных кровельных с неопреновой шайбой. В точках крепления защитное покрытие было нарушено, а металл начал ржаветь. Несколько листов в ендове имели сквозные отверстия, через которые активно текло во время дождя.",
    howToFix: "Все точки крепления осмотрены: саморезы с признаками коррозии заменены на специализированные кровельные с полимерным покрытием и неопреновой шайбой. Поражённые листы профнастила в ендове демонтированы и заменены. Остальное покрытие обработано преобразователем ржавчины, после чего нанесено защитное полимерное покрытие в цвет кровли. Водосточная система промыта и прочищена.",
    howToPrevent: "Используйте только специальные кровельные саморезы с полимерным покрытием и неопреновой шайбой — они на 30–40% дороже обычных, но служат весь срок кровли. Раз в 2–3 года осматривайте все точки крепления и места ендов: при появлении первых следов ржавчины обрабатывайте преобразователем немедленно, пока коррозия не прошла насквозь. Для промышленных объектов рекомендуется ежегодный плановый осмотр.",
  },
];

interface ProblemModalProps {
  problem: Problem | null;
  onClose: () => void;
}

function ProblemModal({ problem, onClose }: ProblemModalProps) {
  useEffect(() => {
    if (problem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [problem]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!problem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <div
        className="bg-coal-light border border-white/10 rounded-2xl w-full max-w-3xl animate-fade-in-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-coal-light border-b border-white/8 rounded-t-2xl px-8 py-5 flex items-center justify-between z-10">
          <span className="font-golos text-xs text-orange font-medium uppercase tracking-widest">{problem.tag}</span>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={16} className="text-white/60" />
          </button>
        </div>

        <div className="px-8 py-8">
          <div className="w-12 h-1 bg-orange mb-6 rounded-full" />
          <h1 className="font-oswald text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {problem.title}
          </h1>

          <img
            src={problem.image}
            alt={problem.title}
            className="w-full h-64 object-cover rounded-xl mb-8 border border-white/8"
          />

          <div className="space-y-6">
            <div>
              <h2 className="font-oswald text-xl font-semibold text-orange mb-3 flex items-center gap-2">
                <Icon name="AlertTriangle" size={18} className="text-orange" />
                Что произошло
              </h2>
              <p className="font-golos text-white/65 text-base leading-relaxed">{problem.whatHappened}</p>
            </div>
            <div>
              <h2 className="font-oswald text-xl font-semibold text-orange mb-3 flex items-center gap-2">
                <Icon name="Wrench" size={18} className="text-orange" />
                Как исправили
              </h2>
              <p className="font-golos text-white/65 text-base leading-relaxed">{problem.howToFix}</p>
            </div>
            <div>
              <h2 className="font-oswald text-xl font-semibold text-orange mb-3 flex items-center gap-2">
                <Icon name="Shield" size={18} className="text-orange" />
                Как не допустить
              </h2>
              <p className="font-golos text-white/65 text-base leading-relaxed">{problem.howToPrevent}</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/30">
              <Icon name="BookOpen" size={14} />
              <span className="font-golos text-xs">Krishidzen — портфолио проблем</span>
            </div>
            <button
              onClick={onClose}
              className="btn-outline px-5 py-2 rounded-lg text-sm"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProblemPortfolioProps {
  scrollTo: (id: string) => void;
}

export default function ProblemPortfolio({ scrollTo }: ProblemPortfolioProps) {
  const [activeProblem, setActiveProblem] = useState<Problem | null>(null);

  return (
    <>
      <section id="portfolio" className="py-24 bg-coal section-pattern relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="diagonal-line" />
              <span className="font-golos text-sm font-medium text-orange uppercase tracking-widest">Реальные случаи</span>
              <div className="diagonal-line" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
              Портфолио <span className="text-orange">проблем</span>
            </h2>
            <p className="font-golos text-white/50 text-lg max-w-2xl mx-auto">
              Фотографии реальных кровельных проблем — что произошло, как исправили и как больше не допустить
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEMS.map((problem) => (
              <div
                key={problem.title}
                className="bg-coal-light border border-white/8 rounded-xl overflow-hidden card-hover group cursor-pointer"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal-light via-coal/40 to-transparent" />
                  <span className="absolute top-3 left-3 bg-orange/90 text-white font-golos text-xs font-medium px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {problem.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-oswald text-lg font-semibold text-white mb-2 group-hover:text-orange transition-colors leading-snug">
                    {problem.title}
                  </h3>
                  <p className="font-golos text-white/45 text-sm leading-relaxed mb-4">
                    {problem.shortDesc}
                  </p>
                  <button
                    onClick={() => setActiveProblem(problem)}
                    className="flex items-center gap-2 text-orange font-golos text-sm font-medium hover:gap-3 transition-all"
                  >
                    <Icon name="BookOpen" size={14} />
                    Читать
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => scrollTo("contacts")} className="btn-orange px-10 py-4 rounded text-base">
              Есть похожая проблема? Звоните
            </button>
          </div>
        </div>
      </section>

      <ProblemModal problem={activeProblem} onClose={() => setActiveProblem(null)} />
    </>
  );
}
