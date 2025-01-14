// Pertanyaan romantis
const questions = [
  "Apakah kamu tahu aku selalu memikirkanmu?",
  "Apakah kamu merasa nyaman saat bersamaku?",
  "Apakah aku membuat harimu lebih bahagia?",
  "Apakah kamu percaya bahwa aku mencintaimu?",
  "Apakah kamu merasa spesial saat aku bersamamu?",
  "Apakah kamu ingin aku selalu ada di sisimu?",
  "Apakah kamu tahu aku tidak bisa tanpa kamu?",
];

const questionsContainer = document.getElementById("questions-container");
const finalButton = document.getElementById("final-button");
const resultContainer = document.getElementById("result-container");

let currentQuestion = 0;

// Fungsi untuk menampilkan pertanyaan
function showQuestion() {
  if (currentQuestion < questions.length) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    questionDiv.innerHTML = `
      <p>${questions[currentQuestion]}</p>
      <button class="yes-button">Ya</button>
    `;

    questionsContainer.appendChild(questionDiv);

    // Event listener untuk tombol "Ya"
    questionDiv.querySelector(".yes-button").addEventListener("click", () => {
      questionDiv.remove();
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        finalButton.classList.remove("hidden");
      }
    });
  }
}

// Event listener untuk tombol akhir
finalButton.addEventListener("click", () => {
  finalButton.classList.add("hidden");
  resultContainer.classList.remove("hidden");
});

// Mulai program dengan pertanyaan pertama
showQuestion();
