const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const Close = document.getElementById('close')

if(bar){
bar.addEventListener('click',()=>{
    nav.classList.add('active')
    // nav.classList.add('active')
})}

   if(Close){
    Close.addEventListener('click',()=>{
        // console.log('button clicked')
        nav.classList.remove('active')
    })
}


const ind_itm = document.querySelectorAll('.items') 

function index_items(){
    for(let index of ind_itm){
        index.addEventListener('click',()=>{
            window.location.href = ('shop.html')
        })
    }

}
index_items()



// let mainImage = document.getElementById('main-img')
// let small = document.getElementsByClassName('small')


// small[0].addEventListener('click',()=>{
//     mainImage.src = small[0].src
// })

// small[1].addEventListener('click',()=>{
//     mainImage.src = small[1].src
// })

// small[2].addEventListener('click',()=>{
//     mainImage.src = small[2].src
// })

// small[3].addEventListener('click',()=>{
//     mainImage.src = small[3].src
// })


































