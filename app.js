const countInput = document.getElementById("count");
const selectShape = document.getElementById("shape");
const colorInput = document.getElementById("color");
const addButton = document.getElementById("addcolor");
const output = document.getElementById("output");

addButton.addEventListener("click", () => {
  output.innerHTML = "";

  const count = Number(countInput.value);
  const shape = selectShape.value;
  const color = colorInput.value.trim();

  if (count <= 0 || color === "") {
    alert("Please Enter valid number and color");
    return;
  }
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.classList.add("shape");
    if (shape === "circle") {
      div.classList.add("circle");
    }
    div.style.backgroundColor = color;
    output.appendChild(div);
  }
});
