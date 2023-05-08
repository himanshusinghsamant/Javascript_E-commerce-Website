function get_element() {
  let target_size = localStorage.getItem("target-size");
  let store_pro = localStorage.getItem("itemJson");
  // console.log(store_pro)
  if (store_pro == null) {
    productItemsArr = [];
    localStorage.setItem("itemJson", JSON.stringify(productItemsArr));
  } else {
    store_pro = localStorage.getItem("itemJson");
    productItemsArr = JSON.parse(store_pro);
    localStorage.setItem("itemJson", JSON.stringify(productItemsArr));
  }
  // console.log(productItemsArr)
  let carthtml = "";
  productItemsArr.forEach((element, index) => {
    //  console.log(element,index)
    carthtml += ` <tr>
    <td id="${index}" onclick = "delete_item(this.id)"><i class="fa-solid fa-trash-can"></i></td>
    <td><img src = ' ${element[0]}'/></td>
    <td id="pro-title">${element[1]}</td>
    <td id="pro-size">${target_size}</td>
    <td id="pro-price">${element[2]}</td>
    <td id="pro-quantity">${element[3]}</td>
    <td id="total-price">${element[2]}</td>
  </tr>`;
  });
  const html = (document.getElementById("table-body").innerHTML = carthtml);
  totalOfAllPro();
}
get_element();

function totalOfAllPro() {
  let emptyArray = [];
  let arry = productItemsArr;
  arry.map((element) => {
    let all_values = element[2];
    emptyArray.push(parseFloat(all_values));
  });

  let add_values = emptyArray.reduce((acc, curr) => {
    return (acc = acc + curr);
  });
  // console.log(add_values);

   let subTotal = document.getElementById("sub-total");
    let shipping = document.getElementById("shipping");
    let cartTotal = document.getElementById("cart-total");
    subTotal.innerHTML = add_values
    let total = parseInt(shipping.innerHTML) + parseInt(subTotal.innerHTML);
    cartTotal.innerHTML = total;
}

function delete_item(itemIndex) {
  store_pro = localStorage.getItem("itemJson");
  productItemsArr = JSON.parse(store_pro);
  productItemsArr.splice(itemIndex, 1);
  localStorage.setItem("itemJson", JSON.stringify(productItemsArr));
  get_element();
}
// delete_item();

function applyCoupon() {
  let couponInput = document.getElementById("coupon-input");
  let apply_btn = document.getElementById("coupon-apply-btn");

  apply_btn.addEventListener("click", () => {
    if (couponInput.value == "@himanshusinghsamant") {
      let cartTotal = document.getElementById("cart-total");
      let couponTot = cartTotal.innerHTML - 500;
      cartTotal.innerHTML = couponTot;
      couponInput.value = "";

      const newText = document.createElement("p");
      newText.innerText = "Your coupon code is successfully applied !";
      const coupon_cont = document.getElementById("coupon-container");
      coupon_cont.append(newText);
      newText.style.fontFamily =
        "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
      newText.style.fontStyle = "italic";
      newText.style.color = "green";
      newText.style.marginTop = "10px";

      setTimeout(() => {
        newText.remove();
      }, 3000);
    } else {
      alert("Invalid coupon code, try again and enter valid coupon code");
    }
  });
}
applyCoupon();
