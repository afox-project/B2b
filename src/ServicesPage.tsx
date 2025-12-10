import { ChevronDown, MapPin, ArrowLeft, Package, Boxes, UserCheck, Briefcase, Clock, Shield, Users, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';
import imgWarehousePickersRussianAppearance from "figma:asset/94f0e5a30c3fcfdd04b79580f36d5a9fa6ccebcb.png";
import imgMaleLoadersInAWarehouseSlavicAppearance from "figma:asset/bc1ea0ab6a88bdad43fa5498ebffdf936df417e1.png";
import imgForkliftOperatorsInAWarehouseRussianAppearance from "figma:asset/b42fd87761b43921a9a47502066dc6840b787af2.png";
import imgGeneralWorkersInAWarehouseRussianAppearance from "figma:asset/c218a6b21618aa8e7b0d54cf54b555c49394d9d0.png";

interface ServicesPageProps {
  onBack: () => void;
  onJobClick: () => void;
}

export default function ServicesPage({ onBack, onJobClick }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const categories = [
    { 
      name: 'Все услуги', 
      count: 12,
      subcategories: []
    },
    { 
      name: 'Аутсорсинг персонала', 
      count: 5,
      subcategories: [
        'Аутсорсинг на склад',
        'Аутсорсинг на стройку',
        'Аутсорсинг на производство',
        'Аутсорсинг на пищевые предприятия',
        'Персонал на металургию'
      ]
    },
    { 
      name: 'Аутстаффинг персонала', 
      count: 4,
      subcategories: []
    },
    { 
      name: 'Подбор персонала', 
      count: 2,
      subcategories: []
    },
    { 
      name: 'Лизинг персонала', 
      count: 1,
      subcategories: []
    },
  ];

  const services = [
    {
      title: 'Упаковщики',
      description: 'Профессиональные упаковщики для складов и производств',
      price: 'от 400 ₽/час',
      image: imgWarehousePickersRussianAppearance,
      category: 'Аутсорсинг персонала',
      features: ['Опыт не требуется', 'Быстрый выход от 1 дня', 'До 80 человек'],
      icon: Package,
    },
    {
      title: 'Грузчики',
      description: 'Надёжные грузчики для погрузочно-разгрузочных работ',
      price: 'от 400 ₽/час',
      image: imgMaleLoadersInAWarehouseSlavicAppearance,
      category: 'Аутсорсинг персонала',
      features: ['Физически подготовлены', 'Работа с любым грузом', 'Любое количество'],
      icon: Boxes,
    },
    {
      title: 'Комплектовщики',
      description: 'Опытные комплектовщики для складов и логистических центров',
      price: 'от 400 ₽/час',
      image: imgForkliftOperatorsInAWarehouseRussianAppearance,
      category: 'Аутстаффинг персонала',
      features: ['С опытом работы', 'Знание WMS систем', 'Высокая скорость'],
      icon: UserCheck,
    },
    {
      title: 'Кладовщики',
      description: 'Квалифицированные кладовщики со знанием 1С',
      price: 'от 450 ₽/час',
      image: imgGeneralWorkersInAWarehouseRussianAppearance,
      category: 'Подбор персонала',
      features: ['Знание 1С: Склад', 'Опыт инвентаризации', 'Ответственные'],
      icon: Briefcase,
    },
  ];

  const filteredServices = selectedCategory === 'Все услуги' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  const currentCategory = categories.find(c => c.name === selectedCategory);

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
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
              <button onClick={onBack} className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer bg-transparent border-none">Главная</button>
              <a href="#" className="text-sm text-slate-900 font-medium cursor-pointer hover:text-yellow-500 transition-colors">Услуги</a>
              <button onClick={onJobClick} className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer bg-transparent border-none">Персонал</button>
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
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer font-medium bg-transparent border-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Назад</span>
          </button>
          <span className="text-slate-300">|</span>
          <p className="text-slate-500 text-sm">Главная → Услуги</p>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Категории услуг</h3>
                <div className="space-y-2">
                  {categories.map((category, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setSelectedSubcategory(null);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between cursor-pointer border-none ${
                          selectedCategory === category.name
                            ? 'bg-yellow-400 text-slate-900 font-semibold'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{category.name}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${
                            selectedCategory === category.name ? 'text-slate-900' : 'text-slate-400'
                          }`}>
                            {category.count}
                          </span>
                          {category.subcategories.length > 0 && (
                            <ChevronDown className={`w-4 h-4 transition-transform ${
                              selectedCategory === category.name ? 'rotate-180' : ''
                            }`} />
                          )}
                        </div>
                      </button>
                      
                      {/* Subcategories */}
                      {selectedCategory === category.name && category.subcategories.length > 0 && (
                        <div className="mt-2 ml-4 space-y-1">
                          {category.subcategories.map((sub, subIdx) => (
                            <button
                              key={subIdx}
                              onClick={() => setSelectedSubcategory(sub)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer border-none ${
                                selectedSubcategory === sub
                                  ? 'text-yellow-600 font-medium bg-yellow-50'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                              }`}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-6">Статистика</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-xs text-slate-300">Проектов</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">25 000+</div>
                        <div className="text-xs text-slate-300">Сотрудников</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6">Наши гарантии</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Быстро</div>
                      <div className="text-sm text-slate-300">Выход от 1 дня</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Надёжно</div>
                      <div className="text-sm text-slate-300">Замена 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Масштабно</div>
                      <div className="text-sm text-slate-300">До 100+ человек</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {selectedCategory}
              </h1>
              <p className="text-xl text-slate-600">
                {selectedSubcategory ? (
                  <>Категория: <span className="font-semibold text-slate-900">{selectedSubcategory}</span></>
                ) : (
                  <>Найдено услуг: <span className="font-semibold text-slate-900">{filteredServices.length}</span></>
                )}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-yellow-400 cursor-pointer"
                  onClick={onJobClick}
                >
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-xl font-bold">
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-yellow-400 text-slate-900 py-3.5 rounded-xl hover:bg-yellow-500 transition-all font-semibold flex items-center justify-center gap-2">
                      Подробнее
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-slate-900 rounded-3xl p-10 lg:p-12 text-white">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Не нашли нужную услугу?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Оставьте заявку, и мы подберём персонал под ваши требования
                </p>
                <button className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-xl hover:bg-yellow-500 transition-all font-bold text-lg cursor-pointer flex items-center gap-2">
                  Оставить заявку
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
                  <span className="text-slate-900 text-xl font-bold">S</span>
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
