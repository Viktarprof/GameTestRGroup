export const questions = [
  {
    id: 1,
    question: "ПТО – это?",
    options: [
      { id: 1, text: "Пункт технического ориентирования" },
      { id: 2, text: "Пункт таможенного оформления" },
      { id: 3, text: "Подъемно транспортное оформление" },
    ],
    isCorrect: [2],
  },
  {
    id: 2,
    question: "Аппаре́ль – это?",
    options: [
      {
        id: 1,
        text: "Пологая площадка, насыпь или платформа для подъёма и спуска техники, грузов, животных.",
      },
      {
        id: 2,
        text: "Небольшая партия товара, которая доставляется из любой точки Европы.",
      },
    ],
    isCorrect: [1],
  },
  {
    id: 3,
    question:
      "Клиент планирует загружать груз, загрузка/выгрузка возможна боковая или задняя, какой полуприцеп можете предложить Клиенту?",
    options: [
      { id: 1, text: "Реф" },
      { id: 2, text: "Тент" },
    ],
    isCorrect: [1, 2],
  },
  {
    id: 4,
    question:
      "Груз 12 метров в длину, 1,5 метра в ширину, 3,9 метра в высоту, 23 тонны будет ли это негабарит?",
    options: [
      { id: 1, text: "Да" },
      { id: 2, text: "Нет" },
    ],
    isCorrect: [1],
  },
  {
    id: 5,
    question: "Какой объем в наших автоцистернах?",
    options: [
      { id: 1, text: "30.000 литров" },
      { id: 2, text: "31.000 литров" },
      { id: 3, text: "22.500 литров" },
      { id: 4, text: "40.000 литров" },
    ],
    isCorrect: [1],
  },
  {
    id: 6,
    question: "Какой параметр характеризует группа упаковки ADR груза?",
    options: [
      { id: 1, text: "Степень опасности груза" },
      { id: 2, text: "Степень огнеопасности груза" },
      { id: 3, text: "Степень коррозийности груза" },
      { id: 4, text: "Степень ядовитости груза" },
      { id: 5, text: "Степень ядовитости и коррозийности груза" },
    ],
    isCorrect: [1],
  },
  {
    id: 7,
    question:
      "Сколько единиц наливной техники находится в данный момент в парке компании R Group?",
    options: [
      { id: 1, text: "8" },
      { id: 2, text: "10" },
      { id: 3, text: "80" },
      { id: 4, text: "34" },
    ],
    isCorrect: [4],
  },
  {
    id: 8,
    question: "Сколько секций имеют цистерны компании R Group?",
    options: [
      { id: 1, text: "Все автоцистерны имеют одну секцию." },
      { id: 2, text: "Две" },
      { id: 3, text: "Четыре" },
    ],
    isCorrect: [1],
  },
  {
    id: 9,
    question: "Импорт – это?",
    options: [
      {
        id: 1,
        text: "Процедура ввоза в страну товаров, произведенных на территории другой страны, с целью дальнейшей реализации на внутреннем рынке или реимпорта.",
      },
      {
        id: 2,
        text: "Понятие в международной торговле, означающее продажу товаров или услуг в другие страны.",
      },
    ],
    isCorrect: [1],
  },
  {
    id: 10,
    question: "Что такое MSDS?",
    options: [
      { id: 1, text: "Паспорт безопасности" },
      { id: 2, text: "Регистратор для водителя" },
      { id: 3, text: "Режим труда и отдыха" },
      { id: 4, text: "Транспортная накладная" },
    ],
    isCorrect: [1],
  },
  {
    id: 11,
    question: "Максимальная грузоподъемность рефрижератора?",
    options: [
      { id: 1, text: "21,5 т +" },
      { id: 2, text: "22,0 т" },
      { id: 3, text: "22,5 т" },
      { id: 4, text: "22,8 т" },
    ],
    isCorrect: [1],
  },
  {
    id: 12,
    question: "Какие виды паллет бывают?",
    options: [
      { id: 1, text: "Своеобразные" },
      { id: 2, text: "Европаллета" },
      { id: 3, text: "Финпаллета" },
      { id: 4, text: "Безразборная паллета" },
    ],
    isCorrect: [2, 3],
  },
  {
    id: 13,
    question: "Габариты европаллеты?",
    options: [
      { id: 1, text: "100 см *120 см" },
      { id: 2, text: "120 см *80 см" },
      { id: 3, text: "80 см * 80 см" },
      { id: 4, text: "100 см * 100 см" },
    ],
    isCorrect: [2],
  },
  {
    id: 14,
    question: "Сколько лет работает компания R-group в логистической сфере?",
    options: [
      { id: 1, text: "25 лет" },
      { id: 2, text: "12 лет" },
      { id: 3, text: "18 лет" },
      { id: 4, text: "35 лет" },
    ],
    isCorrect: [1],
  },
  {
    id: 15,
    question: "Что такое транзит?",
    options: [
      {
        id: 1,
        text: "Перевозка грузов через страну, которая не является ни страной погрузки, ни страной выгрузки грузов",
      },
      { id: 2, text: "Грузы сложенные в два яруса" },
      {
        id: 3,
        text: "Сопроводительные документы, состояние груза внутри упаковки, количество грузовых мест, вес груза.",
      },
      {
        id: 4,
        text: "Понятие в международной торговле, означающее продажу товаров или услуг в другие страны.",
      },
    ],
    isCorrect: [1],
  },
  {
    id: 16,
    question: "Правильно ли, что растаможка и затаможка это одно и тоже?",
    options: [
      { id: 1, text: "Да" },
      { id: 2, text: "Нет" },
    ],
    isCorrect: [2],
  },
  {
    id: 17,
    question: "Консолидация (укрупнение грузов) – это?",
    options: [
      {
        id: 1,
        text: "Товары могут собираться в одном месте, на складе перевозчика, либо в транспортном средстве по маршруту следования.",
      },
      { id: 2, text: "Паспорт безопасности" },
      {
        id: 3,
        text: "Морское транспортное средство, перевозящее грузы между определенными портами по расписанию.",
      },
      {
        id: 4,
        text: "Комплексный подход к управлению и осуществлению торговых сделок.",
      },
    ],
    isCorrect: [1],
  },
  {
    id: 18,
    question: "Что такое LTL (Less Than Truckload)?",
    options: [
      { id: 1, text: "Перевозка в сборном контейнере" },
      { id: 2, text: "Полная загрузка грузового автомобиля" },
      { id: 3, text: "Частичная загрузка грузовика/сборный груз" },
      { id: 4, text: "Уровень наполнения контейнера" },
    ],
    isCorrect: [3],
  },
  {
    id: 19,
    question: "Какие есть варианты загрузки груза у тентового полуприцепа?",
    options: [
      { id: 1, text: "Задняя загрузка" },
      { id: 2, text: "Боковая загрузка" },
      { id: 3, text: "Верхняя загрузка" },
    ],
    isCorrect: [1, 2, 3],
  },
  {
    id: 20,
    question: "Что такое FTL (Full Truckload)?",
    options: [
      { id: 1, text: "Перевозка в сборном контейнере" },
      { id: 2, text: "Полная загрузка грузового автомобиля" },
      { id: 3, text: "Частичная загрузка грузовика/сборный груз" },
      { id: 4, text: "Уровень наполнения контейнера" },
    ],
    isCorrect: [2],
  },
  {
    id: 21,
    question: "Что такое СВХ?",
    options: [
      { id: 1, text: "Перевозка в сборном контейнере" },
      { id: 2, text: "Склад временного хранения" },
      { id: 3, text: "Станция временного хранения" },
    ],
    isCorrect: [2],
  },
  {
    id: 22,
    question: "Что такое CMR?",
    options: [
      { id: 1, text: "Железнодорожная накладная" },
      { id: 2, text: "Автодорожная накладная" },
      { id: 3, text: "Авианакладная" },
    ],
    isCorrect: [2],
  },
  {
    id: 23,
    question: "Какие виды грузоперевозок осуществляет компания R Group?",
    options: [
      { id: 1, text: "Железнодорожные перевозки" },
      { id: 2, text: "Автомобильные перевозки" },
      { id: 3, text: "Пассажирские перевозки" },
      { id: 4, text: "Мультифидальные перевозки" },
    ],
    isCorrect: [2],
  },
  {
    id: 24,
    question: "Какое количество автопарка насчитывается у компании R Group?",
    options: [
      { id: 1, text: "Около 100 авто" },
      { id: 2, text: "Около 600 авто" },
      { id: 3, text: "Около 1000 авто" },
      { id: 4, text: "Около 500 авто" },
    ],
    isCorrect: [2],
  },
  {
    id: 25,
    question: "Какие виды рефрижераторов есть в автопарке компании R Group?",
    options: [
      { id: 1, text: "Стандартный" },
      { id: 2, text: "Цветочный" },
      { id: 3, text: "Мега" },
      { id: 4, text: "Фармацевтический" },
    ],
    isCorrect: [1, 2, 3],
  },
  {
    id: 26,
    question: "Является ли компания ООО Райзинг, таможенным перевозчиком?",
    options: [
      { id: 1, text: "Да" },
      { id: 2, text: "Нет" },
    ],
    isCorrect: [1],
  },
  {
    id: 27,
    question:
      "Сколько европаллет можно загрузить в стандартный тентованный полуприцеп?",
    options: [
      { id: 1, text: "34" },
      { id: 2, text: "33" },
      { id: 3, text: "38" },
      { id: 4, text: "31" },
    ],
    isCorrect: [2],
  },
  {
    id: 28,
    question: "На какие два вида делятся тенты?",
    options: [
      { id: 1, text: "Допельштоки/меги" },
      { id: 2, text: "Меги/стандарты" },
      { id: 3, text: "Меги/реф" },
      { id: 4, text: "Стандарт/штопр" },
    ],
    isCorrect: [2],
  },
  {
    id: 29,
    question: "Перевозит ли компания R Group наливные грузы?",
    options: [
      { id: 1, text: "Нет, нет своего транспорта" },
      { id: 2, text: "Да, есть свои бочки + привлечённые" },
      { id: 3, text: "Да, только привлеченные бочки" },
    ],
    isCorrect: [2],
  },
  {
    id: 30,
    question: "Какие классы ADR могут перевозить в бочках (цистернах) R Group?",
    options: [
      { id: 1, text: "3, 5, 7" },
      { id: 2, text: "3, 5, 6, 8, 9" },
      { id: 3, text: "1, 2, 7" },
      { id: 4, text: "1, 4, 5, 7, 9" },
    ],
    isCorrect: [2],
  },
  {
    id: 31,
    question:
      "Какие документы используются в процессе автомобильных грузоперевозок?",
    options: [
      { id: 1, text: "СГР, ТТН, CMR, TTP" },
      {
        id: 2,
        text: "Инвойс, пакинг, CMR, транзитные документы (ЕХ-1, Т1, ТИР), разрешительные сертификаты (фитосанитарный, ветеринарный, сертификат происхождения), MSDS (при опасных грузах)",
      },
      { id: 3, text: "Инвой, CRM, транзитная декларация" },
    ],
    isCorrect: [2],
  },
  {
    id: 32,
    question: "Экспорт - это?",
    options: [
      {
        id: 1,
        text: "Ввоз сырья и готовой продукции, с целью реализации на внутреннем рынке.",
      },
      {
        id: 2,
        text: "Продажа и вывоз отечественных товаров, продуктов интеллектуальной деятельности и услуг на внешний рынок",
      },
    ],
    isCorrect: [2],
  },
  {
    id: 33,
    question: "Негабаритный груз - это?",
    options: [
      {
        id: 1,
        text: "Груз у которого стандартные габариты для любого полуприцепа",
      },
      {
        id: 2,
        text: "Груз, превышающий установленные параметры по размерам либо по массе",
      },
    ],
    isCorrect: [2],
  },
  {
    id: 34,
    question: "Какие собственные спец площадки есть в компании R Group?",
    options: [
      { id: 1, text: "Тифбет" },
      {
        id: 2,
        text: "Продажа и вывоз отечественных товаров, продуктов интеллектуальной деятельности и услуг на внешний рынок",
      },
      { id: 3, text: "Семитрейлер" },
      { id: 4, text: "Телемеги" },
      { id: 5, text: "Опалубки" },
    ],
    isCorrect: [1, 2, 3],
  },
  {
    id: 35,
    question: "Какие классы опасности возит компания R Group?",
    options: [
      { id: 1, text: "2, 3, 5, 7" },
      { id: 2, text: "Все классы, кроме 7" },
      { id: 3, text: "2-6" },
      { id: 4, text: "Все классы" },
    ],
    isCorrect: [2],
  },
  {
    id: 36,
    question:
      "Отметьте виды грузов, которые перевозят посредством рефрижераторного транспорта в компании?",
    options: [
      { id: 1, text: "Фарма" },
      { id: 2, text: "Кондитерка" },
      { id: 3, text: "Цветы" },
      { id: 4, text: "Продукты питания" },
      { id: 5, text: "Сборные грузы" },
    ],
    isCorrect: [2],
  },
];


export const mediceneTest =[
  {
    id: 1,
  question: "Który z poniższych objawów NIE jest typowy dla cukrzycy typu 2?",
  options: [
    {id: 1, text:"Częste oddawanie moczu" },
    {id: 2, text:"Nagły spadek masy ciała" },
    {id: 3, text:"Nadmierne pragnienie" },
    {id: 4, text:"Bóle stawów" },

  ],
  isCorrect:[4],
},
{
  id: 2,
question: "W jakiej kolejności pokarm przemieszcza się przez układ trawienny?",
options: [
  {id: 1, text:"Przełyk → Żołądek → Jelito cienkie → Jelito grube" },
  {id: 2, text:"Żołądek → Przełyk → Jelito cienkie → Jelito grube" },
  {id: 3, text:"Jelito cienkie → Przełyk → Żołądek → Jelito grube" },
  {id: 4, text:"Przełyk → Jelito cienkie → Żołądek → Jelito grube" },

],
isCorrect:[1],
},
{
  id: 3,
question: "Który z wymienionych objawów najczęściej towarzyszy zawałowi mięśnia sercowego?",
options: [
  {id: 1, text:"Ból promieniujący do lewej ręki i żuchwy" },
  {id: 2, text:"Ból w dolnej części pleców" },
  {id: 3, text:"Kaszel i duszność" },
  {id: 4, text:"Obrzęk nóg" },

],
isCorrect:[1],
},
{
  id: 4,
question: "W astmie oskrzelowej występuje charakterystyczna obturacja. Czym jest obturacja?",
options: [
  {id: 1, text:"Zmniejszenie drożności dróg oddechowych" },
  {id: 2, text:"Nagły spadek ciśnienia krwi" },
  {id: 3, text:"Obrzęk kończyn" },
  {id: 4, text:"Utrata masy ciała" },

],
isCorrect:[1],
},
{
  id: 5,
question: "Co oznacza termin 'insulinooporność' w kontekście cukrzycy?",
options: [
  {id: 1, text:"Stan, w którym trzustka nie produkuje insuliny" },
  {id: 2, text:"Stan, w którym komórki są mniej wrażliwe na insulinę" },
  {id: 3, text:"Nadmierne wytwarzanie glukozy przez wątrobę" },
  {id: 4, text:"Zmniejszone stężenie glukozy we krwi" },

],
isCorrect:[2],
},
{
  id: 6,
question: "Jaki objaw wyróżnia dusznicę bolesną stabilną od niestabilnej?",
options: [
  {id: 1, text:"Stabilna występuje tylko przy wysiłku, niestabilna również w spoczynku" },
  {id: 2, text:"Stabilna pojawia się w nocy, niestabilna w dzień" },
  {id: 3, text:"Stabilna wywołuje kaszel, niestabilna duszność" },
  {id: 4, text:"Stabilna objawia się bólem pleców, niestabilna bólem nóg " },

],
isCorrect:[1],
},
{
  id: 7,
question: "Jakie stawy są najczęściej zajęte przez reumatoidalne zapalenie stawów na początkowym etapie choroby?",
options: [
  {id: 1, text:"Stawy kręgosłupa" },
  {id: 2, text:"Stawy biodrowe" },
  {id: 3, text:"Stawy dłoni i nadgarstków" },
  {id: 4, text:"Stawy kolanowe " },

],
isCorrect:[3],
},
{
  id: 8,
question: "Co oznacza 'erytrocyturia' w kontekście układu moczowego?",
options: [
  {id: 1, text:"Obecność leukocytów w moczu" },
  {id: 2, text:"Obecność erytrocytów w moczu" },
  {id: 3, text:"Obecność białka w moczu" },
  {id: 4, text:"Obecność glukozy w moczu" },

],
isCorrect:[2],
},
{
  id: 9,
question: "Który z poniższych objawów najczęściej występuje w toczniu rumieniowatym układowym?",
options: [
  {id: 1, text:"Ból w klatce piersiowej" },
  {id: 2, text:"Zmęczenie i charakterystyczna wysypka na twarzy w kształcie motyla" },
  {id: 3, text:"Częste oddawanie moczu" },
  {id: 4, text:"Utrata wzroku" },

],
isCorrect:[2],
},
{
  id: 10,
question: "Jakie działanie ma insulina w organizmie?",
options: [
  {id: 1, text:"Zwiększa stężenie glukozy we krwi" },
  {id: 2, text:"Zmniejsza stężenie glukozy we krwi" },
  {id: 3, text:"Stymuluje produkcję glukozy przez wątrobę" },
  {id: 4, text:"Zwiększa poziom glikogenu w mięśniach" },

],
isCorrect:[2],
},
{
  id: 11,
question: "Która struktura w płucach jest odpowiedzialna za wymianę gazową?",
options: [
  {id: 1, text:"Oskrzela" },
  {id: 2, text:"Oskrzela główne" },
  {id: 3, text:"Pęcherzyki płucne" },
  {id: 4, text:"Przepona" },

],
isCorrect:[3],
},
{
  id: 12,
question: "Jak nazywa się zaburzenie charakterystyczne dla astmy, polegające na napadowym zwężeniu oskrzeli?",
options: [
  {id: 1, text:"Bronchospazm" },
  {id: 2, text:"Odma opłucnowa" },
  {id: 3, text:"Rozedma" },
  {id: 4, text:"Zapalenie płuc " },
],
isCorrect:[1],
},
{
  id: 13,
question: "Które z wymienionych działań jest podstawowym środkiem w leczeniu cukrzycy typu 1?",
options: [
  {id: 1, text:"Dieta niskowęglowodanowa" },
  {id: 2, text:"Stosowanie insuliny" },
  {id: 3, text:"Ćwiczenia fizyczne" },
  {id: 4, text:"Spożywanie dużej ilości wody" },

],
isCorrect:[2],
},
{
  id: 14,
question: "W jakiej kolejności przepływa krew przez serce?",
options: [
  {id: 1, text:"Przedsionek prawy → Komora prawa → Przedsionek lewy → Komora lewa" },
  {id: 2, text:"Komora lewa → Przedsionek lewy → Komora prawa → Przedsionek prawy" },
  {id: 3, text:"Przedsionek prawy → Komora lewa → Przedsionek lewy → Komora prawa" },
  {id: 4, text:"Przedsionek lewy → Komora lewa → Przedsionek prawy → Komora prawa" },

],
isCorrect:[1],
},
{
  id: 15,
question: "Jaki jest najczęstszy objaw zaawansowanej miażdżycy tętnic?",
options: [
  {id: 1, text:"Nadciśnienie" },
  {id: 2, text:"Ból głowy" },
  {id: 3, text:"Chromanie przestankowe (ból kończyn dolnych podczas chodzenia)" },
  {id: 4, text:"Duszność" },

],
isCorrect:[3],
},
{
  id: 16,
question: "W którym stadium choroby wieńcowej można zauważyć dusznicę bolesną niestabilną?",
options: [
  {id: 1, text:"Na bardzo wczesnym etapie" },
  {id: 2, text:"W zaawansowanym etapie, kiedy dochodzi do poważnego zwężenia tętnic wieńcowych" },
  {id: 3, text:"Po całkowitym wyleczeniu" },
  {id: 4, text:"Tylko u pacjentów po operacji serca" },

],
isCorrect:[2],
},
{
  id: 17,
question: "Co oznacza termin 'hiperglikemia'?",
options: [
  {id: 1, text:"Zbyt niski poziom glukozy we krwi" },
  {id: 2, text:"Zbyt wysoki poziom glukozy we krwi" },
  {id: 3, text:"Wysoki poziom cholesterolu we krwi" },
  {id: 4, text:"Niedobór insuliny" },

],
isCorrect:[2],
},
{
  id: 18,
question: "Która część układu pokarmowego odpowiada za wchłanianie większości składników odżywczych?",
options: [
  {id: 1, text:"Przełyk" },
  {id: 2, text:"Jelito cienkie" },
  {id: 3, text:"Jelito grube" },
  {id: 4, text:"Żołądek" },

],
isCorrect:[2],
},
{
  id: 19,
question: "W którym narządzie jest produkowana insulina?",
options: [
  {id: 1, text:"Wątroba" },
  {id: 2, text:"Jelito cienkie" },
  {id: 3, text:"Trzustka" },
  {id: 4, text:"Nadnercza" },

],
isCorrect:[3],
},
{
  id: 20,
question: "Co jest podstawową funkcją nerek w układzie moczowym?",
options: [
  {id: 1, text:"Produkcja hormonów" },
  {id: 2, text:"Filtracja krwi i usuwanie zbędnych produktów przemiany materii" },
  {id: 3, text:"Wchłanianie składników odżywczych" },
  {id: 4, text:"Produkcja komórek krwi" },

],
isCorrect:[2],
}
]