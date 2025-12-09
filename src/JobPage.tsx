import { ChevronDown, Check, Users, Clock, Shield, MapPin, ArrowRight, FileCheck, Rocket, Briefcase, UserCheck, Send, ArrowLeft } from 'lucide-react';
import imgWarehousePickersRussianAppearance from "figma:asset/94f0e5a30c3fcfdd04b79580f36d5a9fa6ccebcb.png";
import imgMaleLoadersInAWarehouseSlavicAppearance from "figma:asset/bc1ea0ab6a88bdad43fa5498ebffdf936df417e1.png";
import imgForkliftOperatorsInAWarehouseRussianAppearance from "figma:asset/b42fd87761b43921a9a47502066dc6840b787af2.png";
import imgGeneralWorkersInAWarehouseRussianAppearance from "figma:asset/c218a6b21618aa8e7b0d54cf54b555c49394d9d0.png";

interface JobPageProps {
  onBack: () => void;
}

export default function JobPage({ onBack }: JobPageProps) {
  const relatedPositions = [
    { name: 'Грузчики', rate: '400', image: imgMaleLoadersInAWarehouseSlavicAppearance },
    { name: 'Комплектовщики', rate: '400', image: imgForkliftOperatorsInAWarehouseRussianAppearance },
    { name: 'Кладовщики', rate: '450', image: imgGeneralWorkersInAWarehouseRussianAppearance },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                  <span className="text-yellow-400 text-xl font-bold">S</span>
                </div>
                <span className="text-2xl font-bold text-slate-900">StaffPro</span>
              </div>
              <div className="hidden lg:flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-700 font-medium">Москва</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              <a href="#" className="text-sm text-slate-900 font-medium cursor-pointer hover:text-yellow-500 transition-colors">Услуги</a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Персонал</a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Для бизнеса</a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Контакты</a>
            </nav>

            <div className="flex items-center gap-5">
              <span className="hidden md:block font-semibold text-slate-900">8 800 000 00 00</span>
              <button className="bg-yellow-400 text-slate-900 px-7 py-3 rounded-xl hover:bg-yellow-500 transition-all font-semibold cursor-pointer">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-5 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Назад</span>
          </button>
          <span className="text-slate-300">|</span>
          <p className="text-slate-500 text-sm">Главная → Подбор персонала на склад → Упаковщики</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="space-y-20 lg:space-y-28">
          {/* Hero Section */}
          <section>
            <div className="bg-slate-50 rounded-3xl overflow-hidden">
              <div className="relative h-96 lg:h-[460px]">
                <img 
                  src={imgWarehousePickersRussianAppearance}
                  alt="Упаковщики на складе"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-12 lg:p-20">
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-slate-900 leading-tight max-w-3xl">
                  Аутсорсинг упаковщиков в <span className="text-yellow-500">Москве</span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-16 max-w-2xl leading-relaxed">
                  Предоставляем квалифицированных упаковщиков для работы на складах, производствах и в логистических центрах
                </p>

                {/* Price */}
                <div className="mb-16">
                  <div className="text-sm text-slate-500 mb-3 font-medium">Стоимость услуг</div>
                  <div className="text-6xl lg:text-7xl font-bold mb-3 text-slate-900">От 400 ₽</div>
                  <div className="text-lg text-slate-600">за час работы сотрудника</div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-20">
                  <button className="bg-yellow-400 text-slate-900 px-10 py-5 rounded-2xl hover:bg-yellow-500 transition-all font-bold text-lg cursor-pointer flex items-center gap-3">
                    Заказать персонал
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl hover:bg-slate-100 transition-all font-bold text-lg cursor-pointer border-2 border-slate-900">
                    Рассчитать стоимость
                  </button>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t-2 border-slate-200">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center">
                        <Clock className="w-7 h-7 text-yellow-400" />
                      </div>
                      <div className="font-bold text-xl text-slate-900">Быстрый выход</div>
                    </div>
                    <div className="text-lg text-slate-600">От 1 дня</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center">
                        <Users className="w-7 h-7 text-yellow-400" />
                      </div>
                      <div className="font-bold text-xl text-slate-900">Любое количество</div>
                    </div>
                    <div className="text-lg text-slate-600">До 80 человек</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center">
                        <Shield className="w-7 h-7 text-yellow-400" />
                      </div>
                      <div className="font-bold text-xl text-slate-900">С гарантией</div>
                    </div>
                    <div className="text-lg text-slate-600">Замена за 24 часа</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Position */}
          <section>
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-10">Об услуге</h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Упаковщики — одна из самых востребованных должностей на складах и в логистических центрах. 
                  Мы предоставляем проверенный персонал, готовый приступить к работе в кратчайшие сроки.
                </p>
                
                <p>
                  Наши специалисты имеют опыт работы с различными видами товаров: от продуктов питания 
                  до электроники и промышленных товаров. Все сотрудники проходят тщательную проверку 
                  и инструктаж по технике безопасности.
                </p>

                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Обязанности упаковщиков:</h3>
                  <ul className="space-y-4">
                    {[
                      'Упаковка товаров согласно стандартам',
                      'Маркировка готовой продукции',
                      'Контроль качества упаковки',
                      'Подготовка товара к отгрузке',
                      'Соблюдение норм безопасности'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How We Select */}
          <section>
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Как мы подбираем сотрудников</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              <div className="rounded-2xl p-10 bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                  <FileCheck className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Заявка и условия работы</h3>
                <p className="text-slate-600 leading-relaxed">
                  Изучаем ваши требования к персоналу, объём работ и условия. 
                  Согласовываем график и количество сотрудников.
                </p>
              </div>

              <div className="rounded-2xl p-10 bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Подбор и пр��верка кандидатов</h3>
                <p className="text-slate-600 leading-relaxed">
                  Отбираем подходящих специалистов из нашей базы, проверяем документы 
                  и проводим инструктаж по технике безопасности.
                </p>
              </div>

              <div className="rounded-2xl p-10 bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Оформление и документы</h3>
                <p className="text-slate-600 leading-relaxed">
                  Берём на себя все вопросы кадрового оформления, договоров 
                  и документооборота. Вам не нужно ничего делать.
                </p>
              </div>

              <div className="rounded-2xl p-10 bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Выход сотрудников на объект</h3>
                <p className="text-slate-600 leading-relaxed">
                  Организуем выход персонала в согласованную дату. 
                  Контролируем работу и при необходимости оперативно заменяем сотрудников.
                </p>
              </div>
            </div>
          </section>

          {/* Related Positions */}
          <section>
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Другие складские должности</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              {relatedPositions.map((position, index) => (
                <div key={index} className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white border-2 border-slate-100 cursor-pointer">
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={position.image}
                      alt={position.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">{position.name}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-900">от {position.rate} ₽</div>
                        <div className="text-xs text-slate-500">за час</div>
                      </div>
                    </div>
                    <button className="w-full bg-yellow-400 text-slate-900 py-3 rounded-xl hover:bg-yellow-500 transition-all font-semibold cursor-pointer">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-4xl font-bold mb-12 text-slate-900">Ответы на вопросы</h2>
            
            <div className="space-y-4 max-w-4xl">
              {[
                'Какой минимальный срок аутсорсинга упаковщиков?',
                'Сколько упаковщиков вы можете предоставить одновременно?',
                'Как быстро упаковщики могут приступить к работе?',
                'Что входит в стоимость услуг аутсорсинга?',
                'Как происходит замена сотрудника, если он не подошёл?'
              ].map((question, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-7 hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-lg text-slate-900 font-medium">{question}</span>
                    <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-slate-700 transition-colors flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Form */}
          <section>
            <div className="rounded-3xl p-12 lg:p-16 bg-slate-900 text-white max-w-4xl">
              <h2 className="text-4xl font-bold mb-6">
                Готовы начать работу?
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Оставьте заявку и мы подберём упаковщиков под ваши требования
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 text-lg"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 text-lg"
                />
              </div>

              <input
                type="text"
                placeholder="Количество сотрудников"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 text-lg mb-8"
              />

              <button className="w-full bg-yellow-400 text-slate-900 py-5 rounded-xl hover:bg-yellow-500 transition-all font-bold text-lg cursor-pointer flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                Отправить заявку
              </button>

              <p className="text-sm text-slate-400 text-center mt-6">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
                  <span className="text-slate-900 text-xl font-bold">S</span>
                </div>
                <span className="text-2xl font-bold">StaffPro</span>
              </div>
              <p className="text-slate-400">Профессиональный подбор персонала для вашего бизнеса</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Услуги</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Аутсорсинг персонала</li>
                <li className="hover:text-white cursor-pointer transition-colors">Аутстаффинг персонала</li>
                <li className="hover:text-white cursor-pointer transition-colors">Подбор персонала</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Компания</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors">Новости</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Контакты</h4>
              <div className="space-y-3 text-slate-400">
                <p className="font-semibold text-white">8 800 000 00 00</p>
                <p>info@staffpro.ru</p>
                <div className="flex items-center gap-2 text-green-400 pt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Работаем 24/7
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-center md:text-left">&copy; 2025 StaffPro. Все права защищены.</p>
            <div className="flex gap-8 text-slate-500">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
