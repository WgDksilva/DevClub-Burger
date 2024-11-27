


const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMap = document.querySelector(".map-all");
const buttonSomar = document.querySelector("#somadora");
const filterAll = document.querySelector(".filter-All");

function formatValue(value) {
    return (moneyformat = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    }));
}

function showAll(productAll) {
    let myLi = "";
    productAll.forEach((product) => {
        myLi += `
    <li>
          <img src=${product.src}>
          <p>${product.name}</p>
          <p class="item-price"> ${formatValue(product.price)}</p>
        </li>
        `;
    });
    list.innerHTML = myLi;
}
function somarTudo() { }

function mapDiscount() {
    const newmenuOptions = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }));
    showAll(newmenuOptions);
}

function sumAll() {
    const menuOptionsTotal = menuOptions.reduce(
        (acc, product) => acc + product.price,
        0
    );

    list.innerHTML = `<li>
          <p>O valor total dos itens é R$ ${menuOptionsTotal}</p>
      </li>`;
}

function filterProduct() {
    const filterVegan = menuOptions.filter((product) => product.vegan);
    showAll(filterVegan);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMap.addEventListener("click", mapDiscount);
buttonSomar.addEventListener("click", sumAll);
filterAll.addEventListener("click", filterProduct);