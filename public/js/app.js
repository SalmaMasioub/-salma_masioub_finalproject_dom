const buttons = {
  all: document.getElementById("all"),
  starters: document.getElementById("starters"),
  salads: document.getElementById("salads"),
  specialty: document.getElementById("specialty")
}
const menuitems = document.querySelectorAll(".menuu .col-12")

function filterMenu(category) {
  menuitems.forEach(item => {
    const shouldShow = category === "all" || item.classList.contains(category)
    item.classList.toggle("hidden", !shouldShow)
    if (shouldShow) {
      item.style.display = "block"
    }
  });
}


Object.entries(buttons).forEach(([category, btn]) => {
  btn.addEventListener("click", () => {
    filterMenu(category)
    setActiveButton(btn)
  })
})


filterMenu("all")
setActiveButton(buttons.all)



