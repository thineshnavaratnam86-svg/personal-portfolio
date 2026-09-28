const backgroundColors = [
  { name: "soft sage", value: "#e7eee3" },
  { name: "warm peach", value: "#f5e4d7" },
  { name: "sky blue", value: "#e2edf2" },
  { name: "butter yellow", value: "#f4edcf" },
  { name: "rose", value: "#f1e1e2" },
];

const colorButton = document.querySelector("#color-button");
const colorStatus = document.querySelector("#color-status");
let previousColorIndex = -1;

colorButton.addEventListener("click", () => {
  let colorIndex;

  do {
    colorIndex = Math.floor(Math.random() * backgroundColors.length);
  } while (colorIndex === previousColorIndex);

  const color = backgroundColors[colorIndex];
  document.documentElement.style.setProperty("--page-color", color.value);
  colorStatus.textContent = `The background is now ${color.name}.`;
  previousColorIndex = colorIndex;
});