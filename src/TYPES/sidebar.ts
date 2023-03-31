export const body = document.querySelector('body') as HTMLElement;
export const sidebar = body.querySelector('nav') as HTMLElement;
export const toggle = body.querySelector(".toggle") as HTMLElement;
export const searchBtn = body.querySelector(".search-box") as HTMLElement;
export const modeSwitch = body.querySelector(".toggle-switch") as HTMLElement;
export const modeText = body.querySelector(".mode-text") as HTMLElement;

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
