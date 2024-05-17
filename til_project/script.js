const postBtn = document.querySelector(".btn-open")
const form = document.querySelector(".fact-form")

postBtn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    postBtn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    postBtn.textContent = "Share a Fact"
  }
})