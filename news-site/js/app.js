let navbar = document.getElementById("nav");
let fixed = navbar.offsetTop

window.onscroll = function () {
fixedFunc() 
};
function fixedFunc() {
    if (window.pageXOffset >= fixed) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav");
    }
}


const date = document.getElementById("date");
date.textContent = new Date().getFullYear();


const navbarr = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const navHeight = navbarr.getBoundingClientRect().height;
  if (window.pageYOffset > navHeight){
      navbarr.classList.add("fixed-nav")
  } else {
      navbarr.classList.remove("fixed-nav")
  }
  
  if (window.pageYOffset > 500) {
      topLink.classList.add("show-link");
  } else {
      topLink.classList.remove("show-link");
  }
});



const toggles = document.querySelectorAll(".toggle");

toggles.forEach(function (toggle) {
const btn = toggle.querySelector(".toggle-btn")

btn.addEventListener("click", function () {
  toggles.forEach(function (item) {
      if (item !== toggle) {
          item.classList.remove("show-toggle-text")
      }
  });

  toggle.classList.toggle("show-toggle-text")
})
})

const news = [
  {
    id: 1,
    title: "В Бишкеке прошел концерт, посвященный памяти жертв крушения Ту-154",
    category: "culture",
    img: "https://24.kg/thumbnails/a30a9/0ecf4/23951_w473_h320.jpg",
    desc: "В этот вечер вспоминали не только артистов ансамбля (их было 64 на борту Ту-154), но и журналистов, военных, пилотов и, конечно же, доктора Лизу.",
  },
  {
    id: 2,
    title: "Названы футболисты, которые вошли в расширенный состав сборной Кыргызстана",
    category: "Sport",
    img: "https://24.kg/thumbnails/569bb/97816/251029_w473_h320.jpg",
    desc: "Сборная команда Кыргызстана под руководством главного тренера Александра Крестинина проведет учебно-тренировочный сбор в Турции. Об этом сообщили в Кыргызском футбольном союзе.",
  },
  {
  id: 3,
  title: "Продуктовая корзина Бишкека на 5 марта. Сколько денег семья тратит на еду.",
  category: "economics",
  img: "https://24.kg/thumbnails/8420f/0ae03/251344_w473_h320.png",
  desc: " За неделю стоимость минимального набора продуктов повысилась на 40,5 сома — до 6 тысяч 376 сомов.",
  },
  {
    id: 4,
    title: "Кубок Азии — 2023 по футболу. Стали известны соперники сборной Кыргызстана",
    category: "Sport",
    img: "https://kabar.kg/site/assets/files/107724/img-20191010-wa0020.jpg",
    desc: "В штаб-квартире Азиатской футбольной конфедерации состоялась жеребьевка отборочного раунда Кубка Азии — 2023. Об этом сообщил Кыргызский футбольный союз. Сборная Кыргызстана возглавила группу F и сыграет с командами Сингапура, Мьянмы и Таджикистана. Матчи пройдут в Бишкеке на стадионе имени Долона Омурзакова 8, 11 и 14 июня 2022 года.",
  },
  {
    id: 5,
    title: "Чемпионат мира по хоккею в Бишкеке: Кыргызстан разгромил Малайзию - 22:1",
    category: "Sport",
    img: "https://sport.kg/uploads/posts/2022-03/medium/1646497564_chm-bishkek-hokkej-2.jpg",
    desc: "В Бишкеке продолжается чемпионат мира по хоккею с шайбой в четвертом дивизионе.",
  },
  {
    id: 6,
    title: "Сотрудники исправительных колоний приняли участие в турнире по кок-бору",
    category: "Sport",
    img: "https://24.kg/thumbnails/0d1de/5795f/251176_w_h500_1646310800_r.jpeg",
    desc: "По ее данным, участвовали девять команд, состоящих из ветеранов и действующих сотрудников различных учреждений ведомства. Цель соревнований — развитие культуры, народных традиций, обычаев, языка и пробуждение нравственно-патриотических качеств каждого работника Службы исполнения наказаний. Мероприятие прошло возле ИК-27 в селе Молдовановка.",
  },
  {
    id: 7,
    title: "В городе Ош почтили память поэта и композитора Рыспая Абдыкадырова",
    category: "culture",
    img: "https://www.ktrk.kg/img/thumbnail/670041641975700_big.JPG",
    desc: "В Оше 12 января состоялись памятные мероприятия ко дню рождения известного поэта и композитора Рыспая Абдыкадырова. В мероприятиях приняли участие представители мэрии города Ош, полномочного представительства Правительства в Ошской области, творческие личности и известные исполнители народных песен, творческий коллектив Ошской областной филармонии, писатели, журналисты и общественность, представители вузов города Ош.",
  },
  {
    id: 8,
    title: "Город Каракол выбран культурной столицей СНГ в 2022 году",
    category: "culture",
    img: " https://www.ktrk.kg/img/thumbnail/664501639987313_big.jpg",
    desc: "Город Каракол Иссык-Кульской области КР станет культурной столицей СНГ в 2022 году. Как сообщает Департамент информации Министерства иностранных дел КР, эстафету Каракол принял от города Душанбе, столицы Республики Таджикистан. Торжественная церемония объявления культурной столицы Содружества на 2022 год прошла 18 декабря в Государственном академическом театре оперы и балета им. С. Айни в Душанбе.",
  },
  {
    id: 9,
    title: "Музыкальный сборник на основе кыргызских мелодий выпустил один из вузов",
    category: "culture",
    img: "https://www.ktrk.kg/img/thumbnail/672041642576963_big.png",
    desc: "Университет Центральной Азии выпустил музыкальный сборник на основе кыргызских мелодий и песен. Об этом сообщили в пресс-службе вуза. Отдел культурного наследия и гуманитарных наук оказал поддержку в составлении музыкального учебника «Этносольфеджио» в рамках проекта «Кыргыз кайрык».",
  },
  {
    id: 10,
    title: "Курс доллара в Кыргызстане достиг 98 сомов",
    category: "economics",
    img: "https://st-1.akipress.org/st_gallery/63/973963.0ee7507f179f57263a9c685bcf2ccaf6.jpg",
    desc: "За ночь доллар в Кыргызстане подорожал на 1 сом. Сейчас обменные пункты столицы и коммерческие банки покупают «американца» по 95-96,7 сома, а продают — по 98 сомов. Официальный курс установлен Национальным банком на отметке в 96,6636 сома.",
  },
];

  const btnsAll = document.querySelector(".all");
  const btnsSport = document.querySelector(".sport");
  const btnsCulture = document.querySelector(".culture");
  const btnsEconomics = document.querySelector(".economics");
  const productsInner= document.querySelector(".news__inner");

  window.addEventListener("load", function () {
    displayNewsItems(news);
  });

  function displayNewsItems(news) {
      let displayNews = news.map(function (item) {
        return `<article key="${item.id}" class="news__item">
        <img
          class="news__item-photo"
          src="${item.img}"
          alt=""
        />
        <div class="news__item-info">
          <header>
            <h3>${item.title}</h3>
          </header>
          <p class="news__item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
      });

      displayNews = displayNews.join("");
      productsInner.innerHTML = displayNews;
      return displayNews;
  }

  btnsAll.addEventListener("click", () => {
    
    displayNewsItems(news)
  });

  btnsSport.addEventListener("click", () => {
    const sportView = news.filter((word) => 
    word.category === "Sport");
    displayNewsItems(sportView)
  });

  btnsCulture.addEventListener("click", () => {
    const cultureView = news.filter((word) => 
    word.category === "culture");
    displayNewsItems(cultureView)
  });

  btnsEconomics.addEventListener("click", () => {
    const economicsView = news.filter((word) => 
    word.category === "economics");
    displayNewsItems(economicsView)
  });
