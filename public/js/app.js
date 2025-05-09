
// MODAL
const modalBtn = document.querySelector(".modal-btn")
const modalOverlay = document.createElement("div")
modalOverlay.classList.add("modal-overlay")
modalOverlay.setAttribute("id", "bookingModalOverlay")

modalOverlay.innerHTML = `  <div class="form-group"><button class="close-modal-btn">&times;</button>
<input type="text" placeholder="Your Name" required>
</div>`

document.body.appendChild(modalOverlay)

const closeBtn = modalOverlay.querySelector(".close-modal-btn")

function open() {
  modalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}


function close() {
  modalOverlay.classList.remove("active")
  document.body.style.overflow = ""
}

modalBtn.addEventListener("click", function (e) {
  e.preventDefault()
  open()
})


closeBtn.addEventListener("click", close)

modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    close()
  }
})



// Specials filter

const navLinks = document.querySelectorAll(".nav-link")
const tabs = document.querySelectorAll(".tab")

//! adding event listener to navigation links

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    navLinks.forEach(nav => nav.classList.remove("active"))
    tabs.forEach(pane => pane.classList.remove("active"))
    this.classList.add("active")
    const targetTabId = this.getAttribute("href").substring(1)
    const targetTab = document.getElementById(targetTabId)
    if (targetTab) {
      targetTab.classList.add("active")
    }
  });
});



// Menu filter
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
  })
});


filterMenu("all")





const nav = document.getElementById("nav")
const header = document.getElementById("header")
const label = document.getElementById("label")
const labelfalse = document.getElementById("false")
const body = document.body

label.addEventListener("click", () => {
    nav.style.left = "1vh"
    body.style.overflow = "hidden"
    body.classList.add("ag")
})


labelfalse.addEventListener("click", () => {
    nav.style.left = "-100vw"
    body.style.overflow = "auto"
    body.classList.remove("ag")
})


let currentcaro = 0;
