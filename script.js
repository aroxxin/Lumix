const input = document.getElementById("searchInput");
const historyBar = document.getElementById("historyBar");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const query = input.value.trim();
    if (query !== "") {
      const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
      window.open(url, "_blank");
      addToHistory(query);
      input.value = "";
    }
  }
});

function addToHistory(query) {
  const chip = document.createElement("div");
  chip.className = "history-chip";
  chip.textContent = query;
  chip.onclick = () => {
    const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(url, "_blank");
  };
  historyBar.appendChild(chip);
}
