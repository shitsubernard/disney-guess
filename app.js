const input = document.getElementById("guessInput");
const button = document.getElementById("guessButton");
const suggestionsContainer = document.getElementById("suggestions");
const resultContainer = document.getElementById("result");
const guessTable = document.getElementById("guessTable");

let eligibleCharacters = [...characters];
let secretCharacter = null;

const labels = ["image", "gender", "isHuman", "hasPowers", "isVillain", "sings", "firstAppearance", "films"];
const labelNames = ["Foto", "Gênero", "É Humano?", "Tem poderes?", "É vilão?", "Canta?", "Ano de estreia", "Filmes"];

// =======================
// Cabeçalho da tabela
// =======================
function createTableHeader() {
  const headerRow = document.createElement("div");
  headerRow.classList.add("table-row");
  labelNames.forEach(name => {
    const cell = document.createElement("div");
    cell.classList.add("table-cell", "header-cell");
    cell.textContent = name;
    headerRow.appendChild(cell);
  });
  guessTable.appendChild(headerRow);
}
createTableHeader();

// =======================
// Autocomplete
// =======================
function showSuggestions(filter = "") {
  const filtered = eligibleCharacters.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));

  const top = filtered.slice(0, 5);
  suggestionsContainer.innerHTML = "";

  if (top.length === 0) { 
    suggestionsContainer.style.display = "none"; 
    return; 
  }

  top.forEach(character => {
    const div = document.createElement("div");
    div.classList.add("suggestion-item");

    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;
    img.classList.add("suggestion-image");

    const span = document.createElement("span");
    span.textContent = character.name;

    div.appendChild(img);
    div.appendChild(span);

    div.addEventListener("click", () => {
      input.value = character.name;
      suggestionsContainer.style.display = "none";
      validateInput();
    });

    suggestionsContainer.appendChild(div);
  });

  suggestionsContainer.style.display = "block";
}

// Eventos de input
input.addEventListener("focus", () => showSuggestions(input.value));
input.addEventListener("input", () => { showSuggestions(input.value); validateInput(); });
document.addEventListener("click", e => {
  if (!input.contains(e.target) && !suggestionsContainer.contains(e.target)) {
    suggestionsContainer.style.display = "none";
  }
});

// Validação do input
function validateInput() {
  const guess = input.value.trim().toLowerCase();
  const isValid = eligibleCharacters.some(c => c.name.toLowerCase() === guess);
  button.disabled = !isValid;
}
button.disabled = true;

// Sorteio do personagem secreto
function chooseRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  secretCharacter = characters[randomIndex];
  console.log("🎯 Personagem secreto:", secretCharacter.name);
}
chooseRandomCharacter();

// Chute
button.addEventListener("click", () => {
  const guess = input.value.trim();
  if (!guess) return;

  const guessedCharacter = eligibleCharacters.find(c => c.name.toLowerCase() === guess.toLowerCase());
  if (!guessedCharacter) return;

  resultContainer.innerHTML = "";

  // cria linha da tabela
  const row = document.createElement("div");
  row.classList.add("table-row");

  labels.forEach(label => {
    const cell = document.createElement("div");
    cell.classList.add("table-cell");

    if (label === "image") {
      const img = document.createElement("img");
      img.src = guessedCharacter.image;
      img.alt = guessedCharacter.name;
      img.classList.add("character-img");
      cell.appendChild(img);

    } else if (label === "films") {
      const guessedFilms = guessedCharacter.films;
      const secretFilms = secretCharacter.films;

      const guessedSet = new Set(guessedFilms);
      const secretSet = new Set(secretFilms);
      const intersection = guessedFilms.filter(f => secretSet.has(f));

      cell.textContent = guessedFilms.join(", ");

      if (guessedFilms.length === secretFilms.length && intersection.length === guessedFilms.length) {
        cell.classList.add("green"); // todos iguais
      } else if (intersection.length > 0) {
        cell.classList.add("yellow"); // interseção parcial
      } else {
        cell.classList.add("red"); // nenhum em comum
      }

    } else if (label === "firstAppearance") {
      const value = guessedCharacter[label];
      const secretValue = secretCharacter[label];

      if (value === secretValue) {
        cell.textContent = value;
        cell.classList.add("green");
      } else {
        const arrow = value < secretValue ? "⬆️" : "⬇️";
        cell.textContent = `${value} ${arrow}`;
        cell.classList.add("red");
      }

    } else {
      let value = guessedCharacter[label];
      if (typeof value === "boolean") value = value ? "Sim" : "Não";

      let secretValue = secretCharacter[label];
      if (typeof secretValue === "boolean") secretValue = secretValue ? "Sim" : "Não";

      cell.textContent = value;
      if (value === secretValue) cell.classList.add("green");
      else cell.classList.add("red");
    }

    row.appendChild(cell);
  });

  guessTable.appendChild(row);

  input.value = "";
  button.disabled = true;
  suggestionsContainer.style.display = "none";

  // se acertou
  if (guess.toLowerCase() === secretCharacter.name.toLowerCase()) {
    const msg = document.createElement("div");
    msg.textContent = `🎉 Você acertou! É ${secretCharacter.name}!`;
    msg.classList.add("message");
    resultContainer.appendChild(msg);

    eligibleCharacters = eligibleCharacters.filter(c => c.name !== secretCharacter.name);

    setTimeout(() => {
      if (eligibleCharacters.length === 0) {
        resultContainer.innerHTML = "🎉 Parabéns! Você adivinhou todos os personagens!";
        return;
      }
      chooseRandomCharacter();
    }, 2000);
  } else {
    eligibleCharacters = eligibleCharacters.filter(c => c.name.toLowerCase() !== guess.toLowerCase());
  }
});
