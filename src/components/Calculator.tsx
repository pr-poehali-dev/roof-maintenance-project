import { useState } from "react";
import Icon from "@/components/ui/icon";
import type { Section } from "@/components/Navbar";

const ROOF_TYPES = [
  { id: "metal", label: "Металлочерепица", price: 850 },
  { id: "soft", label: "Мягкая кровля", price: 650 },
  { id: "prof", label: "Профнастил", price: 550 },
  { id: "seam", label: "Фальцевая кровля", price: 1200 },
  { id: "onduline", label: "Ондулин", price: 480 },
  { id: "natural", label: "Натуральная черепица", price: 1800 },
];

const WORK_TYPES = [
  { id: "repair", label: "Текущий ремонт", coeff: 1.0, unit: "м²" },
  { id: "overhaul", label: "Капитальный ремонт", coeff: 1.6, unit: "м²" },
  { id: "new", label: "Новая кровля", coeff: 1.3, unit: "м²" },
  { id: "service", label: "Обслуживание", coeff: 0.5, unit: "м²" },
  { id: "vent", label: "Вентиляция кровли", coeff: 1, unit: "шт." },
];

interface CalculatorProps {
  scrollTo: (id: Section) => void;
}

const VENT_PRICE = 1500;

export default function Calculator({ scrollTo }: CalculatorProps) {
  const [area, setArea] = useState(80);
  const [qty, setQty] = useState(5);
  const [roofType, setRoofType] = useState("metal");
  const [workType, setWorkType] = useState("repair");
  const [calcResult, setCalcResult] = useState<number | null>(null);

  const isVent = workType === "vent";

  const calcPrice = () => {
    let result: number;
    if (isVent) {
      result = qty * VENT_PRICE;
    } else {
      const rt = ROOF_TYPES.find((r) => r.id === roofType)!;
      const wt = WORK_TYPES.find((w) => w.id === workType)!;
      result = Math.round(area * rt.price * wt.coeff);
    }
    setCalcResult(result);
  };

  return (
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
              {isVent ? (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-golos text-white/70 text-sm font-medium">Количество элементов</label>
                    <div className="flex items-center gap-1">
                      <span className="font-oswald text-2xl font-bold text-orange">{qty}</span>
                      <span className="font-golos text-white/40 text-sm">шт.</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={qty}
                    onChange={(e) => { setQty(Number(e.target.value)); setCalcResult(null); }}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="font-golos text-white/25 text-xs">1 шт.</span>
                    <span className="font-golos text-white/25 text-xs">50 шт.</span>
                  </div>
                </div>
              ) : (
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
              )}

              {!isVent && (
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
              )}

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
                      {isVent
                        ? `Вентиляция кровли · ${qty} шт.`
                        : `${ROOF_TYPES.find(r => r.id === roofType)?.label} · ${area} м² · ${WORK_TYPES.find(w => w.id === workType)?.label}`}
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
  );
}