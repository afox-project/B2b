import { Phone, ChevronDown, Check, Users, Clock, Star, ArrowRight, Award, TrendingUp, Shield, MapPin, Calendar, MessageCircle, Search, FileCheck, Rocket, Building2 } from 'lucide-react';
import { useState } from 'react';
import imgMaleLoadersInAWarehouseSlavicAppearance from "figma:asset/bc1ea0ab6a88bdad43fa5498ebffdf936df417e1.png";
import imgWarehousePickersRussianAppearance from "figma:asset/94f0e5a30c3fcfdd04b79580f36d5a9fa6ccebcb.png";
import imgForkliftOperatorsInAWarehouseRussianAppearance from "figma:asset/b42fd87761b43921a9a47502066dc6840b787af2.png";
import imgGeneralWorkersInAWarehouseRussianAppearance from "figma:asset/c218a6b21618aa8e7b0d54cf54b555c49394d9d0.png";
import imgPhotosOfAGirlFromTechnicalSupportSittingInAnOfficeWearingHeadphonesWithAMicrophoneGreenBackground from "figma:asset/1b0c09d1bf8a2b08611871bb68904119511410e4.png";
import imgPhotosOfAGirlFromTechnicalSupportSittingInAnOfficeWearingHeadphonesWithAMicrophoneGreenBackground1 from "figma:asset/7e45f05f31f4c5b27a35bb0c65065f5389916704.png";
import imgRussiaMap from "figma:asset/dff52f181b3c9958373b1f45a3ee8a70902fbde2.png";
import JobPage from './JobPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'job'>('home');

  if (currentPage === 'job') {
    return <JobPage onBack={() => setCurrentPage('home')} />;
  }

  const positions = [
    { name: 'Упаковщики', rate: '400', image: imgWarehousePickersRussianAppearance, tags: ['Опыт не требуется', 'Гибкий график'] },
    { name: 'Грузчики', rate: '400', image: imgMaleLoadersInAWarehouseSlavicAppearance, tags: ['Быстрый выход', 'Физическая работа'] },
    { name: 'Комплектовщики', rate: '400', image: imgForkliftOperatorsInAWarehouseRussianAppearance, tags: ['С опытом', 'Стабильность'] },
    { name: 'Кладовщики', rate: '450', image: imgGeneralWorkersInAWarehouseRussianAppearance, tags: ['1С: Склад', 'Ответственность'] },
  ];

  const allPositionChips = [
    'Упаковщики', 'Грузчики', 'Комплектовщики', 'Кладовщики', 'Сортировщики',
    'Операторы погрузчика', 'Приемщики товара', 'Маркировщики', 'Паллетоукладчики',
    'Стропальщики', 'Фасовщики', 'Водители электропогрузчика'
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                  <span className="text-yellow-400 text-xl font-bold">S</span>
                </div>
                <span className="text-2xl font-bold text-slate-900">StaffPro</span>
              </div>
              <div className="hidden lg:flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-700 font-medium">Санкт-Петербург</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm text-slate-900 font-medium cursor-pointer hover:text-yellow-500 transition-colors">
                Услуги
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Персонал</a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Для бизнеса</a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Новости</a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Контакты</a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <span className="hidden md:block font-semibold text-slate-900">8 800 000 00 00</span>
              <button className="bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-xl hover:bg-yellow-500 transition-all font-semibold cursor-pointer">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-3">
          <p className="text-slate-500 text-xs md:text-sm">Главная - Подбор персонала на склад</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden">
              <div className="relative h-64 md:h-80 lg:h-96">
                <img 
                  src={imgMaleLoadersInAWarehouseSlavicAppearance}
                  alt="Warehouse team"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex gap-2">
                  <div className="bg-blue-600 text-white px-2.5 py-1.5 lg:px-3 rounded-full text-xs lg:text-sm flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-amber-400 text-amber-400" />
                    Топ-услуга
                  </div>
                  <div className="bg-green-500 text-white px-2.5 py-1.5 lg:px-3 rounded-full text-xs lg:text-sm flex items-center gap-1.5 shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Быстрый подбор
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-slate-900 leading-tight">
                  Подбор персонала на склад <br className="hidden md:block" />в <span className="text-yellow-500">Москве</span>
                </h1>
                
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <div className="flex items-center gap-1 text-xs md:text-sm font-medium text-amber-600">
                    <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-amber-500 text-amber-500" />
                    4.9 рейтинг
                  </div>
                  <div className="text-xs md:text-sm font-medium text-slate-900">
                    500+ проектов
                  </div>
                  <div className="text-sm text-slate-400">•</div>
                  <div className="text-xs md:text-sm font-medium text-slate-900 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Проверено
                  </div>
                </div>
                
                <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8">
                  Полностью берем на себя подбор, проверку и кадровое оформление персонала.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <span className="text-sm md:text-base text-slate-900">Вывод до <span className="font-semibold">80 сотрудников</span></span>
                      <div className="text-xs text-slate-500 mt-0.5">одновременно на объект</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <span className="text-sm md:text-base text-slate-900">Более <span className="font-semibold">100 000</span> кандидатов</span>
                      <div className="text-xs text-slate-500 mt-0.5">в нашей базе данных</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4">
                  <button className="bg-yellow-400 text-slate-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 group text-sm md:text-base cursor-pointer font-semibold">
                    Рассчитать стоимость
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white text-slate-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer font-semibold border-2 border-slate-200">
                    <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="hidden sm:inline">8 800 000 00 00</span>
                    <span className="sm:hidden">Позвонить</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mt-4 text-slate-500 text-xs md:text-sm">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Ответим в течение 15 минут
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4" style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)'
                }}>
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold mb-1 text-slate-900">500+</div>
                <div className="text-xs lg:text-sm text-slate-600 mb-2">Проектов завершено</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  +12% за мсяц
                </div>
              </div>
              
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4" style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
                }}>
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold mb-1 text-slate-900">12 лет</div>
                <div className="text-xs lg:text-sm text-slate-600 mb-2">На рынке</div>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Check className="w-3 h-3" />
                  С 2013 года
                </div>
              </div>
              
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4" style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                }}>
                  <Star className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold mb-1 text-slate-900">4.9</div>
                <div className="text-xs lg:text-sm text-slate-600 mb-2">Средний рейтинг</div>
                <div className="flex items-center gap-0.5 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4" style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                }}>
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold mb-1 text-slate-900">24/7</div>
                <div className="text-xs lg:text-sm text-slate-600 mb-2">Поддержка клиентов</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Онлайн сейчас
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 lg:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Должности и тарифы</h2>
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Обновлено сегодня
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-8 lg:mb-10 max-w-4xl">
                {positions.map((position, index) => (
                  <div key={index} className="group rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={position.image}
                        alt={position.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">{position.name}</h3>
                        <div className="text-right">
                          <div className="text-base font-bold text-slate-900 whitespace-nowrap">от {position.rate} ₽</div>
                          <div className="text-xs text-slate-500">за час</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {position.tags.map((tag, i) => (
                          <span key={i} className="bg-slate-50 text-slate-700 px-2 py-1 rounded-lg text-xs border border-slate-200">{tag}</span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setCurrentPage('job')}
                          className="flex-1 bg-yellow-400 text-slate-900 py-2.5 rounded-lg hover:bg-yellow-500 transition-all text-sm font-semibold cursor-pointer"
                        >
                          Заказать персонал
                        </button>
                        <button 
                          onClick={() => setCurrentPage('job')}
                          className="px-3 bg-white rounded-lg text-slate-700 hover:bg-slate-100 transition-colors text-xs cursor-pointer border-2 border-slate-200">
                          Детали
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* All positions chips */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-4">Все доступные должности</h3>
                <div className="flex flex-wrap gap-2">
                  {allPositionChips.map((position, index) => (
                    <button
                      key={index}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg text-xs md:text-sm transition-all cursor-pointer"
                    >
                      {position}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* How We Work */}
            <div className="rounded-2xl lg:rounded-3xl p-6 lg:p-10 text-white overflow-hidden relative bg-slate-900">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 lg:mb-10">
                Как мы подбираем персонал
              </h2>
              
              <div className="relative">
                {/* Dotted lines - hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <line 
                      x1="12%" 
                      y1="0" 
                      x2="88%" 
                      y2="0" 
                      stroke="rgba(251, 191, 36, 0.2)" 
                      strokeWidth="2" 
                      strokeDasharray="8,8"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-2xl flex items-center justify-center bg-yellow-400 shadow-lg">
                      <Search className="w-7 h-7 lg:w-8 lg:h-8 text-slate-900" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold">Анализ потребности</h3>
                    <p className="text-slate-400 text-sm">Изучаем ваши требования, объём работ и условия</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      Консультация 15 минут
                    </div>
                  </div>
                  
                  <div className="space-y-3 lg:space-y-4">
                    <div className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-2xl flex items-center justify-center bg-yellow-400 shadow-lg">
                      <Users className="w-7 h-7 lg:w-8 lg:h-8 text-slate-900" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold">Подбор персонала</h3>
                    <p className="text-slate-400 text-sm">Находим подходящих специалистов из базы 100 000+ кандидатов</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Users className="w-3.5 h-3.5" />
                      Проверенная база
                    </div>
                  </div>
                  
                  <div className="space-y-3 lg:space-y-4">
                    <div className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-2xl flex items-center justify-center bg-yellow-400 shadow-lg">
                      <Rocket className="w-7 h-7 lg:w-8 lg:h-8 text-slate-900" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold">Вывод на объект</h3>
                    <p className="text-slate-400 text-sm">Организуем выход персонала и контролируем работу</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Shield className="w-3.5 h-3.5" />
                      С гарантией качества
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Geography */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 lg:mb-10">География наших проектов</h2>

              {/* Map */}
              <div className="mb-10 lg:mb-12">
                <img 
                  src={imgRussiaMap}
                  alt="Russia Map"
                  className="w-full h-auto"
                />
              </div>

              {/* Stats Grid - clean like in design */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
                {/* Всего городов */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Всего городов</span>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900">85</div>
                </div>
                
                {/* Выведено людей */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Выведено людей</span>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900">25 000+</div>
                </div>
                
                {/* Проектов */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Проектов</span>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900">500+</div>
                </div>
                
                {/* Рост в 2024 */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Рост в 2024</span>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-500">+35%</div>
                </div>
              </div>

              {/* Cities List */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Основные города присутствия</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-5">
                  {[
                    { name: 'Москва', count: '150+ проектов' },
                    { name: 'Санкт-Петербург', count: '120+ проектов' },
                    { name: 'Казань', count: '80+ проектов' },
                    { name: 'Екатеринбург', count: '90+ проектов' },
                    { name: 'Новосибирск', count: '60+ проектов' },
                  ].map((city, i) => (
                    <div key={i}>
                      <div className="font-semibold text-slate-900 mb-1">{city.name}</div>
                      <div className="text-sm text-slate-500">{city.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 lg:mb-8 text-slate-900">Ответили на ваши вопросы</h2>
              
              <div className="space-y-3">
                {[
                  'Как быстро вы можете предоставить персонал?',
                  'Какие документы нужны для начала работы?',
                  'Проводите ли вы проверку кандидатов?',
                  'Как происходит оплата услуг?',
                  'Что делать, если сотрудник не подошёл?'
                ].map((question, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg lg:rounded-xl p-4 lg:p-5 hover:bg-slate-100 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm md:text-base text-slate-700">{question}</span>
                      <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Form */}
            <div className="rounded-2xl lg:rounded-3xl p-6 lg:p-10 text-white bg-slate-900">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 lg:mb-4">
                Нужен персонал для вашего склада?
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-6 lg:mb-8">
                Оставьте заявку и получите расчёт стоимости в течение 15 минут
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="px-4 py-3 rounded-lg lg:rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 text-sm md:text-base"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="px-4 py-3 rounded-lg lg:rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 text-sm md:text-base"
                />
              </div>

              <button className="w-full bg-yellow-400 text-slate-900 py-3 lg:py-4 rounded-lg lg:rounded-xl hover:bg-yellow-500 transition-all mb-3 font-semibold cursor-pointer text-sm md:text-base">
                Получить расчёт стоимости
              </button>

              <p className="text-xs text-white/60 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6 lg:block hidden">
            {/* Services Menu */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Услуги</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors py-2">
                  Аутсорсинг персонала
                </div>
                
                <div className="space-y-2 pl-4 border-l-2 border-yellow-400 bg-amber-50 rounded-r-xl py-2 pr-3">
                  <div className="text-slate-900 cursor-pointer py-1.5 flex items-center justify-between font-semibold">
                    <span>Персонал на склад</span>
                    <span className="bg-slate-900 text-yellow-400 px-2 py-0.5 rounded-md text-xs font-bold">48</span>
                  </div>
                  <div className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors py-1.5">
                    Персонал на производство
                  </div>
                  <div className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors py-1.5">
                    Персонал на стройку
                  </div>
                  <div className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors py-1.5">
                    Пищевые предприятия
                  </div>
                  <div className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors py-1.5">
                    Персонал на металургию
                  </div>
                </div>
                
                <div className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors py-2 pt-4">
                  Аутстаффинг персонала
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-2xl p-8 text-white bg-slate-900">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={imgPhotosOfAGirlFromTechnicalSupportSittingInAnOfficeWearingHeadphonesWithAMicrophoneGreenBackground}
                  alt="Support"
                  className="w-16 h-16 rounded-xl object-cover ring-2 ring-yellow-400/30"
                />
                <img 
                  src={imgPhotosOfAGirlFromTechnicalSupportSittingInAnOfficeWearingHeadphonesWithAMicrophoneGreenBackground1}
                  alt="Support"
                  className="w-16 h-16 rounded-xl object-cover ring-2 ring-yellow-400/30 -ml-6"
                />
                <div className="flex items-center gap-1 bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-lg text-xs font-medium">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                  Онлайн
                </div>
              </div>
              
              <p className="text-white/90 text-sm mb-1">Анастасия К., Елена Р.</p>
              <div className="text-xs text-white/60 mb-6">Эксперты по подбору</div>
              
              <p className="text-lg mb-6">
                Оставьте обращение и мы позвоним вам <span className="text-yellow-400 font-semibold">в течение 15 минут</span>
              </p>
              
              <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl hover:bg-yellow-500 transition-all mb-3 font-semibold cursor-pointer">
                Получить консультацию
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                <Clock className="w-3.5 h-3.5" />
                Среднее время ответа: 8 мин
              </div>
            </div>

            {/* Info widget */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-yellow-200">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="w-5 h-5 text-slate-900" />
                <span className="text-slate-900 text-sm font-semibold">Бесплатная консультация</span>
              </div>
              <p className="text-sm text-slate-700 mb-3">Подберём персонал под ваши задачи и рассчитаем стоимость</p>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Check className="w-4 h-4" />
                <span>Без обязательств</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 lg:py-16 mt-12 lg:mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
                  <span className="text-xl font-bold text-slate-900">S</span>
                </div>
                <span className="text-2xl font-semibold">StaffPro</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">Профессиональный подбор персонала для вашего бизнеса</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Аутсорсинг персонала</li>
                <li className="hover:text-white cursor-pointer transition-colors">Аутстаффинг персонала</li>
                <li className="hover:text-white cursor-pointer transition-colors">Подбор персонала</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors">Новости</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>8 800 000 00 00</p>
                <p>info@staffpro.ru</p>
                <div className="flex items-center gap-1 mt-3 text-green-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Работаем 24/7
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-6 lg:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">&copy; 2025 StaffPro. Все права защищены.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-white transition-colors cursor-pointer text-center">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer text-center">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}