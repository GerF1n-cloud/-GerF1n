const posts = [
  {
    id: 1,
    title: "Моя нетипова дівчина",
    description: "Йокоі — манґака, який ночами розносить газети, аби лишень сплатити оренду, адже його власні роботи майже не продаються...",
    image: "https://u.cubeupload.com/Andrii/d6c01.jpg",
    tags: ["Драма", "Романтика", "Повсякденність", "Психологія"]
  },
  {
    id: 2,
    title: "Вітаємо в Кафе Любові",
    description: "У потаємному кутку тихої вулички стоїть дивне кафе...",
    image: "https://u.cubeupload.com/Andrii/dfb02.jpg",
    tags: ["Еротика", "Комедія", "Романтика", "Яой", "Надриродне",]
  }
];

const container = document.getElementById("content");

posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${post.image}">
    <div class="card-content">
      <div>
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        <div class="tags">
          ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <button class="read-btn">Читати</button>
    </div>
  `;

  div.querySelector(".read-btn").onclick = (e) => {
    e.stopPropagation();
    window.location.href = `post.html?id=${post.id}`;
  };

  container.appendChild(div);
});