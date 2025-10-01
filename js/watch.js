const display = document.getElementById("display");

setInterval(() => {
  const date = new Date();
  let time = date.toLocaleTimeString();
  display.textContent = time;
}, 1000);
