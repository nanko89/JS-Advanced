function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  let result = document.getElementById("result");

  gradient.addEventListener("mousemove", function (event) {
    let power = event.offsetX / (event.target.clientWidth - 1);
    power = Math.trunc(power * 100);
    result.textContent = power + "%";
  });

  gradient.addEventListener("mouseout", function (event) {
    result.textContent = "";
  });
}
