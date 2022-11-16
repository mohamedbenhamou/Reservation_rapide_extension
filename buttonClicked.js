function med() {
  document.querySelector(".text-primary").textContent = "GLD";

  let y = document.getElementsByClassName("btn-outline-warning");
  for (i = 0; i <= y.length; i++) {
    y[i].click();
  }
}
med();
