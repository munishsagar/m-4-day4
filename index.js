const displayCards = document.querySelector(".card_books");
const searchItem = document.querySelector(".search_item");

const searchField = document.querySelector(".search_box");
const btn = document.querySelector(".button2");
const cartList = document.querySelector(".add_cartitem");

const cartAPi = async function (search) {
  const res = await fetch("https://striveschool-api.herokuapp.com/books");
  const data = await res.json();
  const result = data;
  console.log(result);

  const showBooks = result.slice(0, 21);

  showBooks.map((el) => {
    const bookdiv = document.createElement("div");
    bookdiv.classList.add("col-4");
    bookdiv.innerHTML = `<div class="card m-3">
<img src="${el.img}" class="card-img-top  " alt="..." height="400" width="100" />
<div class="card-body card-book">
  <h5 class="card-title text-truncate">${el.title}</h5>
  <p class="card-text ">
    Some quick example text to build on the card title and make up
    the bulk of the card's content.
  </p>
 
  <button  class="btn btn-primary add_cart" value="0">Addtocart</button>
  
  <button  class="btn btn-primary delete">Skip</button>
 
</div> 
</div>
`;
    displayCards.appendChild(bookdiv);
  });

  //search book
  const searchBook = async function (search) {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/books/${search}`
    );
    const data = await res.json();
    const result1 = data;
    console.log(result1);

    /* const abc = result1.filter((el) => {
    const exa = el.price >= 20;

    return exa;
  });*/

    const div2 = document.createElement("div");
    div2.innerHTML = `<h1>${result1.title} </h1>
    <img src="${result1.img}" alt="" />
    <p> price is:${result1.price} </p>`;
    searchItem.appendChild(div2);
  };
  let btn2 = document.querySelectorAll(".add_cart");

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const inputvalue = searchField.value;
    searchBook(inputvalue);
  });

  btn2.forEach((element) => {
    element.addEventListener("click", function () {
      const cart = function (cart) {
        cart.forEach((el) => {
          const cartdiv = document.createElement("div");
          cartdiv.classList.add("col");
          cartdiv.innerHTML = `<div> 
  <li>${el.title}</li>
  </div>`;

          searchItem.appendChild(cartdiv);
        });
      };
      cart(showBooks);
    });
  });
};
cartAPi();

const datafetch = async function () {
  const respponseData = await fetch(
    "https://www.themealdb.com/api/json/v1/1/searc.php?s="
  );
  const getData = await respponseData.json();

  console.log(getData);
};

datafetch();
