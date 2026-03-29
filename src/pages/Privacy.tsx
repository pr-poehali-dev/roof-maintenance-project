import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-coal text-white">
      {/* Header */}
      <header className="bg-coal-light border-b border-white/5 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/50 hover:text-orange transition-colors font-golos text-sm"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-orange rounded-sm flex items-center justify-center">
              <Icon name="Home" size={13} className="text-white" />
            </div>
            <span className="font-oswald text-base font-bold tracking-widest uppercase">
              Krishidzen
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <h1 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-wide mb-2">
          Политика конфиденциальности
        </h1>
        <p className="text-white/40 font-golos text-sm mb-10">
          Последнее обновление: март 2026 г.
        </p>

        <div className="space-y-8 font-golos text-white/75 leading-relaxed">

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты
              персональных данных пользователей сайта Krishidzen (далее — «Сайт»). Используя Сайт и оставляя
              свои данные, вы соглашаетесь с условиями настоящей Политики.
            </p>
            <p className="mt-3">
              Оператором персональных данных является компания Krishidzen, осуществляющая деятельность
              в сфере строительства и ремонта.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              2. Какие данные мы собираем
            </h2>
            <p>При использовании Сайта мы можем собирать следующие персональные данные:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Сообщения, оставленные в форме обратной связи</li>
              <li>Технические данные: IP-адрес, тип браузера, время посещения (через аналитику)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              3. Цели обработки данных
            </h2>
            <p>Ваши данные используются исключительно для:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
              <li>Обратной связи по вашему запросу или заявке</li>
              <li>Подготовки коммерческого предложения и расчёта стоимости работ</li>
              <li>Информирования об акциях и специальных предложениях (только с вашего согласия)</li>
              <li>Улучшения качества работы Сайта</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              4. Хранение и защита данных
            </h2>
            <p>
              Мы принимаем необходимые технические и организационные меры для защиты ваших персональных
              данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
            <p className="mt-3">
              Данные хранятся на защищённых серверах и не передаются третьим лицам без вашего согласия,
              за исключением случаев, предусмотренных действующим законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              5. Передача данных третьим лицам
            </h2>
            <p>
              Мы не продаём, не обмениваем и не передаём ваши персональные данные третьим лицам.
              Исключения составляют:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
              <li>Случаи, прямо предусмотренные законодательством РФ</li>
              <li>Ваше явное согласие на такую передачу</li>
              <li>Привлечённые подрядчики, выполняющие работы исключительно по заданию оператора</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              6. Cookies
            </h2>
            <p>
              Сайт может использовать файлы cookies для улучшения работы и анализа посещаемости.
              Cookies не содержат персональных данных и не используются для идентификации личности.
              Вы можете отключить cookies в настройках вашего браузера.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              7. Ваши права
            </h2>
            <p>В соответствии с Федеральным законом № 152-ФЗ «О персональных данных» вы вправе:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
              <li>Получить информацию об обработке ваших персональных данных</li>
              <li>Потребовать уточнения, блокирования или уничтожения данных</li>
              <li>Отозвать согласие на обработку данных в любой момент</li>
              <li>Обжаловать действия оператора в Роскомнадзоре</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              8. Контактная информация
            </h2>
            <p>
              По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам
              через форму обратной связи на Сайте или по контактам, указанным в разделе «Контакты».
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white mb-3">
              9. Изменения политики
            </h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия
              всегда доступна на данной странице. Продолжение использования Сайта после внесения изменений
              означает ваше согласие с обновлённой Политикой.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 px-4 md:px-8 mt-12">
        <div className="max-w-4xl mx-auto text-center text-white/25 font-golos text-sm">
          © 2026 Krishidzen
        </div>
      </footer>
    </div>
  );
}
