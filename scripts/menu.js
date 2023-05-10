let menuData = []; // array pour stocker la data des works
let categoryData = []; // array pour stocker les data des categories
const antipasti = document.getElementById("antipasti");
const carpaccio = document.getElementById("carpaccio");
const insalate = document.getElementById("insalate");
const specialite = document.getElementById("specialite");
const pesce = document.getElementById("pesce");
const carne = document.getElementById("carne");
const pasta = document.getElementById("pasta");
const risotto = document.getElementById("risotto");
const pizza = document.getElementById("pizza");
const dessert = document.getElementById("dessert");
const retourAcceuil = document.getElementById("menuVersAcceuil");
const reservation = document.getElementById("menuVersRéservation");

const getMenu = async () => {
  await fetch("https://sheetdb.io/api/v1/rx6fpue4d9jt1")
    .then((res) => res.json())
    .then((data) => (menuData = data));
  console.log(menuData);
};

const generateMenu = (element, item) => {
  if (item.category === element.getAttribute("id")) {
    element.innerHTML += `
      <div class="card">
      <h3>${item.name}</h3>
      <p> ${item.description} </p>
      <h3> ${item.price}</h3>
      </div>
  
      `;
  }
};

const showFilteredMenu = async () => {
  await getMenu();
  menuData.forEach(function (item) {
    generateMenu(antipasti, item);
    generateMenu(carpaccio, item);
    generateMenu(insalate, item);
    generateMenu(specialite, item);
    generateMenu(pesce, item);
    generateMenu(carne, item);
    generateMenu(pasta, item);
    generateMenu(risotto, item);
    generateMenu(pizza, item);
    generateMenu(dessert, item);
  });
};

showFilteredMenu();
