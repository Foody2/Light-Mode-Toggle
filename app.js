let lightmode = localStorage.getItem("lightmode");

const lightModeToggle = document.querySelector("#light-mode");

const enablelightMode = () => {
  document.body.classList.add("lightmode");

  localStorage.setItem("lightmode", "enabled");
};

const disablLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
};

if (lightmode === "enabled") {
  enablelightMode();
}

lightModeToggle.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");

  if (lightmode !== "enabled") {
    enablelightMode();
  } else {
    disablLightMode();
  }
});
