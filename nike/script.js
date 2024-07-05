const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "blue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "white",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "Black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
const productTitle = document.querySelector(".productTitle ");
const productImage = document.querySelector(".productImage");
const productPrice = document.querySelector(".productPrice");
const productSize = document.querySelectorAll(".size");
const productColor = document.querySelectorAll(".color");
const buyButton = document.querySelector(".buyButton");
const productBtn = document.querySelector(".productButton");
const modal = document.querySelector(".payment");
const closeBtn = document.querySelector(".close");
//const colorContainer = document.querySelector(".colors");

menuItem.forEach((el, index) =>
  el.addEventListener("click", function () {
    //change the slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chossen product
    choosenProduct = products[index];
    console.log(choosenProduct);

    productTitle.textContent = choosenProduct.title;
    productPrice.textContent = `$${choosenProduct.price}`;
    productImage.src = choosenProduct.colors[0].img;

    productColor.forEach((clr, ind) => {
      clr.style.backgroundColor = choosenProduct.colors[ind].code;
    });
  })
);

productColor.forEach((clr, ind) =>
  clr.addEventListener("click", function () {
    productImage.src = choosenProduct.colors[ind].img;
  })
);

buyButton.addEventListener("click", function () {
  console.log("working");
});

productSize.forEach((size) =>
  size.addEventListener("click", function () {
    productSize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  })
);

productBtn.addEventListener("click", function () {
  console.log("Working");
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
