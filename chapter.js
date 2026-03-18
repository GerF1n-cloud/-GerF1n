// Дані про манґу
const data = {
  1: {
    title: "Моя нетипова дівчина",
    chapters: {
      1: 25 // кількість сторінок
    },
    folder: "img/moya-netypova-divchyna"
  }
};

// Параметри URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const ch = params.get("ch");

const manga = data[id];

if (!manga) {
  document.body.innerHTML = "Манґу не знайдено";
}

// Встановлюємо заголовок
const chapterTitle = document.getElementById("chapter-title");
chapterTitle.innerText = `${manga.title} — Розділ ${ch}`;

// Контейнер сторінок
const pagesContainer = document.getElementById("pages");

// Завантажуємо картинки
const totalPages = manga.chapters[ch];
for (let i = 1; i <= totalPages; i++) {
  const img = document.createElement("img");
  img.src = `${manga.folder}/ch${ch}/${i}.jpg`;
  
  // Перевірка, якщо не знайшло
  img.onerror = () => console.log("Не знайдено:", img.src);

  pagesContainer.appendChild(img);
}

// Кнопка назад
function goBack() {
  window.history.back();
}

// Наступний розділ
function nextChapter() {
  const next = Number(ch) + 1;
  if (manga.chapters[next]) {
    window.location.href = `chapter.html?id=${id}&ch=${next}`;
  } else {
    alert("Це останній розділ");
  }
}