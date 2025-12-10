import { Phone, ChevronDown, Check, Users, Clock, Star, ArrowRight, Award, TrendingUp, Shield, MapPin, MessageCircle, Search, FileCheck, Rocket, Building2, Briefcase, UserCheck, Send, Package, Boxes, Factory, HardHat, Utensils, Target, Zap, Calendar, Quote } from 'lucide-react';
import { useState } from 'react';
import imgMaleLoadersInAWarehouseSlavicAppearance from "figma:asset/bc1ea0ab6a88bdad43fa5498ebffdf936df417e1.png";
import imgWarehousePickersRussianAppearance from "figma:asset/94f0e5a30c3fcfdd04b79580f36d5a9fa6ccebcb.png";
import imgForkliftOperatorsInAWarehouseRussianAppearance from "figma:asset/b42fd87761b43921a9a47502066dc6840b787af2.png";
import imgGeneralWorkersInAWarehouseRussianAppearance from "figma:asset/c218a6b21618aa8e7b0d54cf54b555c49394d9d0.png";
import imgPhotosOfAGirlFromTechnicalSupportSittingInAnOfficeWearingHeadphonesWithAMicrophoneGreenBackground from "figma:asset/1b0c09d1bf8a2b08611871bb68904119511410e4.png";
import imgPhotosOfAGirlFromTechnicalSupportSittingInAnOfficeWearingHeadphonesWithAMicrophoneGreenBackground1 from "figma:asset/7e45f05f31f4c5b27a35bb0c65065f5389916704.png";
import imgRussiaMap from "figma:asset/dff52f181b3c9958373b1f45a3ee8a70902fbde2.png";
import JobPage from './JobPage';
import ServicesPage from './ServicesPage';

// Import Figma images
import imgWarehouseIllustration from "figma:asset/41842d3ef5209dc14da94b085cb14546ba4aff6d.png";
import imgRectangle1492 from "figma:asset/1de697f5e691c20ad6c23d73033fad1f71b0e8f2.png";
import imgRectangle1493 from "figma:asset/e346651a116b89fc0b117847835da3d48c701b5f.png";
import imgRectangle1494 from "figma:asset/c2421eed3e357d5e2c5b99f2b8d7483888205985.png";
import imgRectangle1496 from "figma:asset/c08c71bd2791e1db76e5c4ab276da5c6c56afd09.png";
import imgRectangle1497 from "figma:asset/c3476833b024e17b72eb51e63843d42ca2e15855.png";
import imgRectangle1498 from "figma:asset/4ff9dc43488983a06c47aa17e8ad6b4e601142a2.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'job' | 'services'>('home');

  if (currentPage === 'job') {
    return <JobPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'services') {
    return <ServicesPage onBack={() => setCurrentPage('home')} onJobClick={() => setCurrentPage('job')} />;
  }

  const positions = [
    { name: 'Упаковщики', rate: '400', image: imgWarehousePickersRussianAppearance, description: 'Опыт не требуется', icon: Package },
    { name: 'Грузчики', rate: '400', image: imgMaleLoadersInAWarehouseSlavicAppearance, description: 'Быстрый выход от 1 дня', icon: Boxes },
    { name: 'Комплектовщики', rate: '400', image: imgForkliftOperatorsInAWarehouseRussianAppearance, description: 'С опытом работы', icon: UserCheck },
    { name: 'Кладовщики', rate: '450', image: imgGeneralWorkersInAWarehouseRussianAppearance, description: 'Знание 1С: Склад', icon: Briefcase },
  ];

  const industries = [
    { icon: Boxes, title: 'Склады и логистика', count: '150+ проектов', color: 'bg-yellow-400' },
    { icon: Factory, title: 'Производство', count: '90+ проектов', color: 'bg-slate-900' },
    { icon: HardHat, title: 'Строительство', count: '60+ проектов', color: 'bg-yellow-400' },
    { icon: Utensils, title: 'Пищевая промышленность', count: '40+ проектов', color: 'bg-slate-900' },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Быстрый вывод персонала',
      description: 'От 1 дня до вых��да на объект. Экстренная замена за 24 часа.',
      stat: 'От 1 дня'
    },
    {
      icon: Shield,
      title: 'Полное кадровое оформление',
      description: 'Берём на себя все документы, договоры и отчётность.',
      stat: '100% легально'
    },
    {
      icon: Users,
      title: 'Проверенная база кандидатов',
      description: 'Более 100 000 специалистов разных квалификаций.',
      stat: '100 000+'
    },
    {
      icon: Target,
      title: 'Гарантия качества',
      description: 'Бесплатная замена сотрудника, если не подошёл.',
      stat: '24/7'
    }
  ];

  const caseStudies = [
    {
      image: imgRectangle1492,
      company: 'Wildberries',
      project: 'Вывод 80 упаковщиков',
      result: 'Обработка 15 000 заказов в день',
      period: '6 месяцев',
    },
    {
      image: imgRectangle1493,
      company: 'Ozon',
      project: '50 комплектовщиков',
      result: 'Увеличение скорости на 40%',
      period: '12 месяцев',
    },
    {
      image: imgRectangle1494,
      company: 'X5 Retail Group',
      project: '30 кладовщиков',
      result: 'Оптимизация склада',
      period: '8 месяцев',
    },
  ];

  const testimonials = [
    {
      image: imgRectangle1496,
      name: 'Алексей Морозов',
      position: 'Руководитель логистического центра',
      company: 'Wildberries',
      text: 'Работаем со StaffPro уже год. Отличная команда, всегда оперативно решают наши задачи. Персонал выводят быстро и качественно.',
      rating: 5
    },
    {
      image: imgRectangle1497,
      name: 'Елена Соколова',
      position: 'HR-директор',
      company: 'Ozon',
      text: 'Очень довольны сотрудничеством. Профессиональный подход, все документы в порядке. Рекомендуем!',
      rating: 5
    },
    {
      image: imgRectangle1498,
      name: 'Дмитрий Васильев',
      position: 'Менеджер по операциям',
      company: 'X5 Retail',
      text: 'Лучший партнёр по подбору складского персонала. Всегда на связи, решают проблемы в моменте.',
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
              <button onClick={() => setCurrentPage('services')} className="text-sm text-slate-900 font-medium cursor-pointer hover:text-yellow-500 transition-colors bg-transparent border-none">Услуги</button>
              <button onClick={() => setCurrentPage('job')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer bg-transparent border-none">Персонал</button>
              <a href="#cases" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Кейсы</a>
              <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">О нас</a>
              <a href="#contacts" className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Контакты</a>
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

      {/* Hero Section */}
      <section className="bg-black text-white py-16 lg:py-20 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[120px] -translate-y-1/2" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="max-w-xl">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-full mb-6">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-black flex items-center justify-center text-xs font-bold text-black">W</div>
                  <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-black flex items-center justify-center text-xs font-bold text-black">O</div>
                  <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-black flex items-center justify-center text-xs font-bold text-black">X5</div>
                </div>
                <span className="text-sm text-slate-300">Работают с нами</span>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                Предоставление персонала <br />
                <span className="text-yellow-400">в Москве</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Аутстаффинг для бизнеса любого масштаба — от склада до производства
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">От 24 часов</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <Shield className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">100% легально</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">Рейтинг 4.9</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl hover:bg-yellow-500 transition-all font-bold text-lg cursor-pointer inline-flex items-center justify-center gap-2">
                  Получить персонал
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/5 border-2 border-white/10 text-white px-10 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold text-lg cursor-pointer">
                  Рассчитать стоимость
                </button>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">25 000+</div>
                  <div className="text-xs text-slate-400">Сотрудников выведено</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                  <div className="text-xs text-slate-400">Проектов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">12 лет</div>
                  <div className="text-xs text-slate-400">На рынке</div>
                </div>
              </div>
            </div>

            {/* Right: Illustration with floating elements */}
            <div className="relative">
              {/* Main illustration with glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-[80px]" />
                <img 
                  src={imgWarehouseIllustration}
                  alt="Warehouse illustration"
                  className="w-full h-auto max-w-2xl mx-auto relative z-10"
                />
              </div>

              {/* Floating card 1 - Top Left */}
              <div className="hidden lg:block absolute top-8 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Быстрый выход</div>
                    <div className="text-xs text-slate-400">От 1 дня</div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 - Top Right */}
              <div className="hidden lg:block absolute top-20 -right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">100 000+</div>
                    <div className="text-xs text-slate-400">База кандидатов</div>
                  </div>
                </div>
              </div>

              {/* Floating card 3 - Bottom Left */}
              <div className="hidden lg:block absolute bottom-12 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Гарантия</div>
                    <div className="text-xs text-slate-400">Замена 24/7</div>
                  </div>
                </div>
              </div>

              {/* Floating card 4 - Bottom Right */}
              <div className="hidden lg:block absolute bottom-20 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2 shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold">4.9 рейтинг</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add custom animation */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-slate-900 mb-2">25 000+</div>
              <div className="text-slate-600">Выведено сотрудников</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Завершённых проектов</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-slate-900 mb-2">12 лет</div>
              <div className="text-slate-600">На рынке</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-yellow-500 mb-2">4.9</div>
              <div className="text-slate-600">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Отрасли, в которых мы работаем</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Предоставляем персонал для различных сфер бизнеса по всей России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-yellow-400 cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl ${industry.color} flex items-center justify-center mb-6`}>
                  <industry.icon className={`w-7 h-7 ${industry.color === 'bg-yellow-400' ? 'text-slate-900' : 'text-yellow-400'}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.title}</h3>
                <p className="text-slate-600 font-medium">{industry.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Мы предоставляем полный спектр услуг по аутстаффингу персонала
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-yellow-500 mb-4">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Популярные должности</h2>
              <p className="text-xl text-slate-600">Актуальные тарифы на сегодня</p>
            </div>
            <button onClick={() => setCurrentPage('job')} className="hidden lg:flex text-slate-900 font-semibold hover:text-yellow-500 transition-colors cursor-pointer items-center gap-2 bg-transparent border-none">
              Все должности
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {positions.map((position, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-yellow-400 cursor-pointer" onClick={() => setCurrentPage('job')}>
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={position.image}
                    alt={position.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-sm">
                    от {position.rate} ₽/час
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{position.name}</h3>
                  <p className="text-slate-600 mb-4">{position.description}</p>
                  <button className="w-full bg-yellow-400 text-slate-900 py-3 rounded-xl hover:bg-yellow-500 transition-all font-semibold">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Как мы работаем</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Простой и прозрачный процесс от заявки до выхода персонала
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { icon: Search, title: 'Заявка', desc: 'Оставляете заявку онлайн или по телефону', number: '01' },
              { icon: Users, title: 'Подбор', desc: 'Подбираем кандидатов из нашей базы', number: '02' },
              { icon: FileCheck, title: 'Оформление', desc: 'Оформляем все документы и договоры', number: '03' },
              { icon: Rocket, title: 'Выход', desc: 'Персонал выходит на ваш объект', number: '04' },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all relative z-10">
                  <div className="flex items-center justify-between mb-6 relative">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center relative z-20">
                      <step.icon className="w-7 h-7 text-slate-900" />
                    </div>
                    <span className="text-5xl font-bold text-yellow-400/20">{step.number}</span>
                    
                    {/* Connecting line under icon */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute left-[70px] top-[28px] h-0.5 w-[calc(100%+32px+64px)] bg-yellow-400/20 z-0" 
                           style={{ 
                             borderTop: '2px dashed rgba(251, 191, 36, 0.2)',
                             background: 'none'
                           }} 
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-yellow-400 text-slate-900 px-10 py-5 rounded-2xl hover:bg-yellow-500 transition-all font-bold text-lg cursor-pointer">
              Начать работу
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Успешные кейсы</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseItem, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all border-2 border-slate-100 cursor-pointer">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={caseItem.image}
                    alt={caseItem.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm font-bold text-yellow-500 mb-3">{caseItem.company}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{caseItem.project}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Check className="w-5 h-5 text-yellow-500" />
                      <span>{caseItem.result}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-5 h-5 text-slate-400" />
                      <span>Длительность: {caseItem.period}</span>
                    </div>
                  </div>
                  <button className="text-slate-900 font-semibold hover:text-yellow-500 transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-none">
                    Читать кейс
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Отзывы клиентов</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Что говорят о нас наши партнёры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
                <Quote className="w-10 h-10 text-yellow-400 mb-6" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 mb-8 leading-relaxed text-lg">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.position}</div>
                    <div className="text-sm font-semibold text-yellow-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">География присутствия</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Работаем в 85 городах России
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-12 lg:p-16">
            <div className="mb-12">
              <img 
                src={imgRussiaMap}
                alt="Russia Map"
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-7 h-7 text-yellow-400" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">85</div>
                <div className="text-slate-600">Городов России</div>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-yellow-400" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">25 000+</div>
                <div className="text-slate-600">Выведено сотрудников</div>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-yellow-400" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-slate-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-slate-900" />
                </div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">+35%</div>
                <div className="text-slate-600">Рост в 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
              <p className="text-xl text-slate-600">
                Ответы на популярные вопросы о наших услугах
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Как быстро вы можете предоставить персонал?',
                'Какие документы нужны для начала сотрудничества?',
                'Проводите ли вы проверку кандидатов?',
                'Как происходит оплата услуг?',
                'Что делать, если сотрудник не подошёл?',
                'В каких городах вы работаете?'
              ].map((question, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-7 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-lg font-medium text-slate-900">{question}</span>
                    <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-yellow-500 transition-colors flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacts" className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Готовы начать работу с нами?
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Оставьте заявку и получите расчёт стоимости в течение 15 минут
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
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
                placeholder="Какой персонал нужен?"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 text-lg mb-8"
              />

              <button className="bg-yellow-400 text-slate-900 px-12 py-5 rounded-2xl hover:bg-yellow-500 transition-all font-bold text-lg cursor-pointer flex items-center gap-3">
                <Send className="w-5 h-5" />
                Отправить заявку
              </button>

              <p className="text-sm text-slate-400 mt-6">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
                  <span className="text-xl font-bold text-slate-900">S</span>
                </div>
                <span className="text-2xl font-bold">StaffPro</span>
              </div>
              <p className="text-slate-400 mb-6">Профессиональный подбор персонала для вашего бизнеса</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-lg">VK</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-lg">TG</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Услуги</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Аутсорсинг персонала</li>
                <li className="hover:text-white cursor-pointer transition-colors">Аутстаффинг персонала</li>
                <li className="hover:text-white cursor-pointer transition-colors">Подбор персонала</li>
                <li className="hover:text-white cursor-pointer transition-colors">Лизинг персонала</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Компания</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors">Кейсы</li>
                <li className="hover:text-white cursor-pointer transition-colors">Новости</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Контакты</h4>
              <div className="space-y-3 text-slate-400">
                <p className="font-semibold text-white text-lg">8 800 000 00 00</p>
                <p>info@staffpro.ru</p>
                <p>Москва, ул. Примерная, 123</p>
                <div className="flex items-center gap-2 text-yellow-400 pt-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
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
