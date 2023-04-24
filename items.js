let productItemsData = [
  {
    id: "Shirt_1",
    product: "Shirt",
    name: "Leaf print design - shirt",
    price: 450,
  },
  {
    id: "Shirt_2",
    product: "Shirt",
    name: "flower print design - shirt",
    price: 550,
  },
  {
    id: "Shirt_3",
    product: "Shirt",
    name: "cartoon check design - shirt",
    price: 499,
  },
  {
    id: "Shirt_4",
    product: "Shirt",
    name: "Turmeric colour with leaf design - shirt",
    price: 599,
  },
  {
    id: "Shirt_5",
    product: "Shirt",
    name: "White with checks - shirt",
    price: 450,
  },
];
// console.log(productItemsData)

let box = document.getElementById("Shirt_2");





function set_items() {
    let All_items = document.querySelectorAll(".items");
    
    for(let i = 0; i<All_items.length; i++){
        All_items[i].addEventListener("click", (e) => {
          window.location.href=('Sproduct.html')
          let image = e.target.src
          let tag = e.target.span
          // console.log(tag)
          localStorage.setItem('image',image)
          });
    }
    
    
}
set_items();


