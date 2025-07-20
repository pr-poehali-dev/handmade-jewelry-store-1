import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gold/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Gem" className="h-8 w-8 text-gold" />
              <span className="text-2xl font-display font-bold text-bronze">Золотая Мастерская</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-bronze hover:text-gold transition-colors">Каталог</a>
              <a href="#collections" className="text-bronze hover:text-gold transition-colors">Коллекции</a>
              <a href="#master" className="text-bronze hover:text-gold transition-colors">О мастере</a>
              <a href="#gallery" className="text-bronze hover:text-gold transition-colors">Галерея</a>
              <a href="#contact" className="text-bronze hover:text-gold transition-colors">Контакты</a>
              <Button className="bg-gold hover:bg-gold-dark text-white">Заказать</Button>
            </div>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-gold/10 text-gold border-gold/20">
                Ручная работа • Премиум качество
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-bronze mb-6 leading-tight">
                Ювелирные 
                <span className="text-gold block">Шедевры</span>
                Ручной Работы
              </h1>
              <p className="text-xl text-bronze/70 mb-8 max-w-lg">
                Эксклюзивные украшения, созданные с любовью и мастерством. 
                Каждое изделие — уникальное произведение искусства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white px-8 py-4 text-lg">
                  <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 text-lg">
                  <Icon name="Video" className="mr-2 h-5 w-5" />
                  Видеообзоры
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-bronze/20 rounded-full blur-3xl"></div>
              <img 
                src="/img/a25c9ede-117c-42c9-a651-44223af9e736.jpg" 
                alt="Ювелирные изделия"
                className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section id="collections" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-bronze mb-6">
              Избранные Коллекции
            </h2>
            <p className="text-xl text-bronze/70 max-w-2xl mx-auto">
              Откройте для себя наши эксклюзивные коллекции, каждая из которых рассказывает свою уникальную историю.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-gold/20 hover:border-gold/40 transition-all duration-300 hover-scale">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/89e2347d-17df-4d9f-9f7c-27590e38abe7.jpg"
                  alt="Классическая коллекция"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bronze/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-semibold text-bronze mb-3">Классика</h3>
                <p className="text-bronze/70 mb-4">Вечные формы и элегантные линии для особых моментов</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  Смотреть коллекцию
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-gold/20 hover:border-gold/40 transition-all duration-300 hover-scale">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/a25c9ede-117c-42c9-a651-44223af9e736.jpg"
                  alt="Современная коллекция"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bronze/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-semibold text-bronze mb-3">Авангард</h3>
                <p className="text-bronze/70 mb-4">Смелые решения и современный дизайн для ярких личностей</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  Смотреть коллекцию
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-gold/20 hover:border-gold/40 transition-all duration-300 hover-scale">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/9bda6896-04f0-409e-9523-0451a81abe22.jpg"
                  alt="Эксклюзивная коллекция"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bronze/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-semibold text-bronze mb-3">Эксклюзив</h3>
                <p className="text-bronze/70 mb-4">Уникальные изделия по индивидуальному заказу</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  Смотреть коллекцию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Master Section */}
      <section id="master" className="py-20 px-4 bg-gradient-to-r from-cream to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/9bda6896-04f0-409e-9523-0451a81abe22.jpg"
                alt="Мастер за работой"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-display font-bold">15+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-bronze mb-6">
                О Мастере
              </h2>
              <p className="text-lg text-bronze/80 mb-6 leading-relaxed">
                Александра Смирнова — ювелир с 15-летним опытом, выпускница Московской школы ювелирного искусства. 
                Каждое изделие создается вручную с использованием традиционных техник и современных технологий.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-display font-bold text-gold mb-2">500+</div>
                  <div className="text-bronze/70">довольных клиентов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-display font-bold text-gold mb-2">1000+</div>
                  <div className="text-bronze/70">созданных изделий</div>
                </div>
              </div>
              <Button size="lg" className="bg-bronze hover:bg-bronze/90 text-cream">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Preview */}
      <section id="gallery" className="py-20 px-4 bg-bronze text-cream">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Видеообзоры Украшений
          </h2>
          <p className="text-xl text-cream/80 mb-12 max-w-2xl mx-auto">
            Рассмотрите каждое изделие в разном освещении и под разными углами
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-cream/10 border-cream/20 hover:bg-cream/20 transition-colors group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center">
                    <Icon name="Play" className="h-16 w-16 text-cream group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-2">Кольцо "Солнце"</h3>
                    <p className="text-cream/70">Обзор в дневном и вечернем освещении</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Order */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-bronze mb-6">
              Заказать Украшение
            </h2>
            <p className="text-xl text-bronze/70">
              Свяжитесь с нами для создания уникального изделия или консультации
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-gold/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold text-bronze mb-6">Оставьте заявку</h3>
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Ваше имя" className="border-gold/30 focus:border-gold" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="border-gold/30 focus:border-gold" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" className="border-gold/30 focus:border-gold" />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите желаемое изделие..." className="border-gold/30 focus:border-gold min-h-[120px]" />
                  </div>
                  <Button size="lg" className="w-full bg-gold hover:bg-gold-dark text-white">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold text-bronze mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="h-5 w-5 text-gold" />
                    <span className="text-bronze/80">Москва, ул. Арбат, 15</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-gold" />
                    <span className="text-bronze/80">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-gold" />
                    <span className="text-bronze/80">info@goldmaster.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-gold" />
                    <span className="text-bronze/80">Пн-Пт: 10:00-19:00, Сб: 11:00-17:00</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-display font-semibold text-bronze mb-4">Мы в соцсетях</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-gold text-gold hover:bg-gold hover:text-white">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gold text-gold hover:bg-gold hover:text-white">
                    <Icon name="Facebook" className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gold text-gold hover:bg-gold hover:text-white">
                    <Icon name="Youtube" className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bronze text-cream py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gem" className="h-6 w-6 text-gold" />
                <span className="text-xl font-display font-bold">Золотая Мастерская</span>
              </div>
              <p className="text-cream/70">
                Эксклюзивные ювелирные изделия ручной работы с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-cream/70">
                <li><a href="#catalog" className="hover:text-gold transition-colors">Каталог</a></li>
                <li><a href="#collections" className="hover:text-gold transition-colors">Коллекции</a></li>
                <li><a href="#master" className="hover:text-gold transition-colors">О мастере</a></li>
                <li><a href="#gallery" className="hover:text-gold transition-colors">Галерея</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-cream/70">
                <li>Изготовление на заказ</li>
                <li>Ремонт украшений</li>
                <li>Оценка изделий</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-cream/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@goldmaster.ru</li>
                <li>Москва, ул. Арбат, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/70">
            <p>&copy; 2024 Золотая Мастерская. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;