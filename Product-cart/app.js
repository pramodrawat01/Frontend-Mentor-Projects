let iconCart = document.querySelector('.cart-icon')
let closeCart = document.querySelector('.close')
let body = document.querySelector('body')

let productListHTML = document.querySelector('.productList')

iconCart.addEventListener('click', ()=>{
    body.classList.toggle('showCart')
})

let productList = []


closeCart.addEventListener('click', ()=>{
    body.classList.toggle('showCart')
})


const initApp = ()=>{
    // fetch data form product.json
    fetch('products.json')
    .then(Response => Response.json())
    .then(data => {
        productList = data
        console.log(productList)
    })
}

initApp()