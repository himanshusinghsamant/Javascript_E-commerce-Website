let main_image = document.getElementById("main-img");

// ---------> function for get the items from the shop component --------------------->
function get_items() {
  let GetI = localStorage.getItem("image");
  // console.log(GetI)
  main_image.src = GetI;
}
get_items();

// --------> function for increment the quantity of the selected product ---------------->

function increment() {
  const Rupees = document.getElementById("rupees");
  const minus = document.getElementById("btn-1");
  const plus = document.getElementById("btn-2");
  plus.addEventListener("click", () => {
    let value = document.getElementById("value");
    let val = (value = value.innerHTML++);
    if (val >= 1) {
      Rupees.innerHTML = parseFloat(Rupees.innerHTML) + 450;
      minus.style.display = "initial";
    }

    if (value === 4) {
      plus.style.backgroundColor = "red";
      plus.style.color = "white";
      alert("Do you really want to increase more quantities");
    }
  });
}
increment();

// --------> function for decrement the quantity of the selected product ---------------->
function decrement() {
  const Rupees = document.getElementById("rupees");
  const minus = document.getElementById("btn-1");
  const plus = document.getElementById("btn-2");

  minus.addEventListener("click", () => {
    let value = document.getElementById("value");
    let val = (value = value.innerHTML--);
    // console.log(val)
    Rupees.innerHTML = parseFloat(Rupees.innerHTML) - 450;
    if (value <= 2) {
      Rupees.innerHTML = 450;
    }
    if (value <= 2) {
      // console.log((value = 0));
      minus.style.display = "none";
    }

    if (value === 5) {
      plus.style.backgroundColor = " aquamarine";
      plus.style.color = "black";
    }
  });
}
decrement();

// -----> function for adding the size of product in select-size ---------------->

function add_size() {
  let size = document.querySelectorAll(".size-option");
  // console.log(size)
  for (let i = 0; i <= size.length; i++) {
    size[i].addEventListener("click", (e) => {
      let tar_size = e.target.innerHTML;
      localStorage.setItem("target-size", tar_size);
    });
  }
}

// ---------> function for adding the selected items in the cart by clicking add to cart button ---------------------->

function add_to_cart() {
  const add_cart_btn = document.getElementById("add-cart-btn");
  add_cart_btn.addEventListener("click", () => {
    let main_image = document.getElementById("main-img").src;
    // console.log(main_image)
    let product_name = document.getElementById("pro-name").innerHTML;
    const Rupees = document.getElementById("rupees").innerHTML;
    let value = document.getElementById("value").innerHTML;

    let store_pro = localStorage.getItem("itemJson");
    if (store_pro == null) {
      productItemsArr = [];
      productItemsArr.push([main_image, product_name, Rupees, value]);
      localStorage.setItem("itemJson", JSON.stringify(productItemsArr));
    } else {
      store_pro = localStorage.getItem("itemJson");
      productItemsArr = JSON.parse(store_pro);
      productItemsArr.push([main_image, product_name, Rupees, value]);
      localStorage.setItem("itemJson", JSON.stringify(productItemsArr));
    }
    // console.log(productItemsArr);
    add_size();
  });
}
add_to_cart();
