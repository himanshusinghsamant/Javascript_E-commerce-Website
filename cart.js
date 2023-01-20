function get_element() {
  // let main_image = localStorage.getItem("main_image");
  // let product_name = localStorage.getItem("product_name");
  // let Rupees = localStorage.getItem("Rupees");
  // let value = localStorage.getItem("value");
  
  // let product_image = document.getElementById("product-image");
  // let pro_title = document.getElementById("pro-title");
  // let pro_size = document.getElementById("pro-size");
  // let pro_quantity = document.getElementById("pro-quantity");
  // let total_price = document.getElementById("total-price");
  // let product_price = document.getElementById("pro-price");
  
  // product_image.src = main_image;
  // pro_title.innerHTML = product_name;
  // pro_size.innerHTML = target_size;
  // pro_quantity.innerHTML = value;
  // total_price.innerHTML = Rupees;
  
  
  
  let target_size = localStorage.getItem("target-size");
  
  let store_pro = localStorage.getItem('itemJson')
  if (store_pro == null){
    productItemsArr = []
    localStorage.setItem('itemJson', JSON.stringify(productItemsArr))
  }
  else{
    store_pro = localStorage.getItem('itemJson')
    productItemsArr = JSON.parse(store_pro)
    localStorage.setItem('itemJson', JSON.stringify(productItemsArr))
  }
  let carthtml = ""
   productItemsArr.forEach((element,index) => {
   
    carthtml += ` <tr>
    <td id="${index}" onclick = "delete_item(this.id)"><i class="fa-solid fa-trash-can"></i></td>
    <td> ${element[0]}</td>
    <td id="pro-title">${element[1]}</td>
    <td id="pro-size">${target_size}</td>
    <td id="pro-price">${element[2]}</td>
    <td id="pro-quantity">${element[3]}</td>
    <td id="total-price">${element[2]}</td>
  </tr>`

  let subTotal = document.getElementById("sub-total");
  let shipping = document.getElementById("shipping");
  let cartTotal = document.getElementById("cart-total");
  
  
  subTotal.innerHTML = element[2];
  let total = parseInt(shipping.innerHTML) + parseInt(subTotal.innerHTML);
  cartTotal.innerHTML = total
  });
  const html = document.getElementById('table-body').innerHTML = carthtml
 
}
get_element();


function delete_item(itemIndex) {

  store_pro = localStorage.getItem('itemJson')
  productItemsArr = JSON.parse(store_pro)
  productItemsArr.splice(itemIndex, 1)
  localStorage.setItem('itemJson', JSON.stringify(productItemsArr))
  get_element()
}
// delete_item();


function applyCoupon() {
  let couponInput = document.getElementById("coupon-input");
  let apply_btn = document.getElementById("coupon-apply-btn");


  apply_btn.addEventListener("click", () => {
    if (couponInput.value == "@himanshusinghsamant") {
      let cartTotal = document.getElementById("cart-total");
      let couponTot = cartTotal.innerHTML - 100
      cartTotal.innerHTML = couponTot
      couponInput.value = ""

      const newText = document.createElement('p')
      newText.innerText = 'Your coupon code is successfully applied !'
      const coupon_cont = document.getElementById('coupon-container')
      coupon_cont.append(newText)
      newText.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
      newText.style.fontStyle = 'italic';
      newText.style.color = 'green';
      newText.style.marginTop = '10px'
   
      setTimeout(() => {
        newText.remove()
      },3000);

    } else {
      alert("Invalid coupon code, try again and enter valid coupon code");
    }
  });
}
applyCoupon();
