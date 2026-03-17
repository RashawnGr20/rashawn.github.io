window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const site = document.getElementById("site");

  loader.style.display = "none";
  site.classList.remove("hidden");
});