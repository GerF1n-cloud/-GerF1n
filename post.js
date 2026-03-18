// Всі пости
const posts = [
  {
    id: 1,
    title: "Моя нетипова дівчина",
    description: "Йокої — манґака, який ночами розносить газети, аби лишень сплатити оренду, адже його власні роботи майже не продаються. Але одного дня до нього приходить Сайто-сан — дівчина, яка називає себе його шанувальницею і спеціально приїхала здалеку, щоб зустрітися з ним. Дуже швидко Йокоі розуміє, що те, як Сайто-сан бачить світ, що відчуває й про що думає, відрізняється від більшості людей… Разом вони намагаються знайти своє місце у світі в цій теплій та незвичній історії у жанрі повсякденності.",
    image: "https://u.cubeupload.com/Andrii/d6c01.jpg",
    tags: ["Драма", "Романтика", "Повсякденність", "Психологія"],
    sections: ["Розділ 1: У гості", "Розділ 2: Ночівля", "Розділ 3: Удар", "Розділ 4: Такий як я", "Розділ 5: Запитай Йокої", "Розділ 6: Ба-бах!", "Розділ 7: Спогад", "Розділ 8: Пробач мені", "Розділ 9: Звичайна людина", "Розділ 10: Хіба це не боляче?", "Розділ 11: Десять секунд.", "Розділ 12: Здається, я тебе розумію.",]
  },
  {
    id: 2,
    title: "Вітаємо в Кафе Любові",
    description: "У потаємному кутку тихої вулички стоїть дивне кафе. Його власником є Інґю, хтивий маленький інкуб із слабкістю до людських геніталій. Як же він заманює свою здобич і поглинає їхню, кхм, життєву силу? Зазвичай достатньо простого чару! Та ось одного дня до кафе заходить надзвичайно вродливий чоловік на ім’я Канґін, і Інґю вже готовий здійснити свої хитрі наміри. Та цього разу все йде не зовсім за планом…",
    image: "https://u.cubeupload.com/Andrii/dfb02.jpg",
    tags: ["Еротика", "Комедія", "Романтика", "Яой", "Надриродне",],
    sections: ["Розділ 1", "Розділ 2", "Розділ 3", "Розділ 4", "Розділ 5", "Розділ 2", "Розділ 6", "Розділ 7", "Розділ 8",]
  }
];

// Чекаємо, поки DOM завантажиться
document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const post = posts.find(p => p.id === id);

  if(!post) {
    alert("Пост не знайдено!");
    return;
  }

  document.getElementById("title").innerText = post.title;
  document.getElementById("description").innerText = post.description;
  document.getElementById("image").src = post.image;
  document.getElementById("tags").innerHTML =
    post.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

  // Розділи
  const sectionsContainer = document.getElementById("sections");
  post.sections.forEach(sec => {
    const div = document.createElement("div");
    div.className = "section";
    div.innerText = sec;
    div.onclick = () => alert(`Відкрито: ${sec}`);
    sectionsContainer.appendChild(div);
  });

  // Кнопка Назад
  document.getElementById("back-btn").onclick = () => {
    window.location.href = "index.html";
  };
});