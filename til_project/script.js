const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
// console.log(CATEGORIES.find((cat) => cat.name === "society").color)

// Selecting DOM Elements:
const postBtn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");


// Load data from Supabase:
async function loadFacts() {
  const res = await fetch('https://wldluonwobsxnvjlsizu.supabase.co/rest/v1/facts', {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZGx1b253b2JzeG52amxzaXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NjAyNjMsImV4cCI6MjAzMTQzNjI2M30.BJV4nUXie1Te38VSJfQBWGM87XdH2yGGnB1tgOqfqD8",
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZGx1b253b2JzeG52amxzaXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NjAyNjMsImV4cCI6MjAzMTQzNjI2M30.BJV4nUXie1Te38VSJfQBWGM87XdH2yGGnB1tgOqfqD8"
    }
  });
  const data = await res.json();
  
  // Using filter:
  // const filteredData = data.filter((fact) => fact.category === 'society');
  createFactsList(data);
}
loadFacts();


// Creating DOM Elements-- Facts in the list
factsList.innerHTML = "";
// createFactsList(initialFacts);
// createFactsList([{text: 'Matt'}])
function createFactsList(dataArray) {
  const htmlArr = dataArray.map((fact) => 
    `<li class="fact">
    <p>
    ${fact.text}
      <a href="${fact.source}" target="_blank" class="source">(Source)</a> 
    </p>
      <span 
        class="tag" 
        style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category)?.color}">
        ${fact.category}</span>
    </li>
    `);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggling Form Visibility:
postBtn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    postBtn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    postBtn.textContent = "Share a Fact"
  }
})