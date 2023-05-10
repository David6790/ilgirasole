const deliveroo = document.getElementById("deliveroo");
const surplace = document.getElementById("surplace");
const lienMenu = document.getElementById("indexVersMenu");

deliveroo.addEventListener("click", function () {
  window.open(
    "https://deliveroo.fr/fr/menu/Strasbourg/la-petite-france/restaurant-il-girasole?day=today&geohash=u0ts26sbt7bh&time=1915",
    "_blank"
  );
});

surplace.addEventListener("click", function () {
  window.location.replace("/pages/menu.html");
});
