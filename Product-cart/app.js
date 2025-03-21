let iconCart = document.querySelector('.cart-icon')
let closeCart = document.querySelector('.close')
let body = document.querySelector('body')
let itemCount = document.querySelector('.cart-icon span')

let productListHTML = document.querySelector('.productList')
let listCartHTML = document.querySelector('.listCart')

iconCart.addEventListener('click', ()=>{
    body.classList.toggle('showCart')
})

let productList = []
// to store 
let carts = []


closeCart.addEventListener('click', ()=>{
    body.classList.toggle('showCart')
})

const addDataToHTML = ()=>{
    productListHTML.innerHTML = ''
    if(productList.length>0){
        productList.forEach( (product)=>{
            let newProduct = document.createElement('div')
            newProduct.classList.add('item')
            newProduct.innerHTML = `
            <div class="item" id = "${product.id}">
                <img src="${product.image}">
                <h2>"${product.name}"</h2>
                <div class="price">"${product.price}"</div>
                <button class="addCart">
                    add to cart
                </button>
            </div>
            `
            productListHTML.appendChild(newProduct)
        })
    }

}

productListHTML.addEventListener('click', (event)=>{
    let clickedItem = event.target
    if(clickedItem.classList.contains('addCart')){
        let product_id = clickedItem.parentElement.id
        addToCart(product_id)

        // return a object of info
        // let info = {
        //     product_id : clickedItem.parentElement.id,
        //     product_img : clickedItem.parentElement.image,
        //     product_name : clickedItem.parentElement.name,
        //     product_price : clickedItem.parentElement.price
        // }
        // addToCart(info)
    }
})

// adding product to cart
const addToCart =(product_id)=>{
    
    // have to understand this line (21 minute)
    let positionInCart = carts.findIndex( (value) => value.product_id == product_id)

    if(carts.length <= 0 ){
        carts = [{
            product_id : product_id,
            quentity : 1
        }]
    }
    else if(positionInCart < 0 ){
        carts.push({
            product_id : product_id,
            quentity : 1
        })
    }else{
        carts[positionInCart].quentity += 1
    }
    //console.log(carts)
    // display cart in webpage by calling this fun
    addCartToHTML()
    // save the data to memorey or local storage
    addCartToMemory()
}

const addCartToMemory = ()=>{
    localStorage.setItem('cart', JSON.stringify(carts))
}

const addCartToHTML = ()=>{
    listCartHTML.innerHTML = ''
    let totalQuentity = 0
    if(carts.length > 0){
        carts.forEach( (cart) =>{
            totalQuentity += cart.quentity
            let newCart = document.createElement('div')
            newCart.classList.add('item')
            newCart.dataset.id = cart.product_id
            
            let productIndex = productList.findIndex( (value) => value.id == cart.product_id)
            let info = productList[productIndex]
            
            newCart.innerHTML = `
                <div class="image">
                    <img src="${info.image}" alt="img1">
                </div>
                <div class="name">
                    ${info.name}
                </div>
                <div class="totalPrice">
                   ${info.price * cart.quentity}
                </div>
                <div class="quentity">
                    <span class="minus">-</span>
                    <span>${cart.quentity}</span>
                    <span class="plus">+</span>
                </div>
            `
            listCartHTML.appendChild(newCart)
        })
    }
    itemCount.textContent = totalQuentity
}

//  increse or decrese items in cart
listCartHTML.addEventListener('click', (event)=>{
    let positionClick = event.target
    if(positionClick.classList.contains('minus')  || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id
        let type = 'munus'
        if(positionClick.classList.contains('plus')){
            type = 'plus'
        }
        changeQuantity(product_id, type)
    }
})

const changeQuantity = (product_id, type)=>{
    let positionItemInCart = carts.findIndex((value)=>value.product_id == product_id)
    if(positionItemInCart >= 0){
       switch (type) {
        case 'plus':
            carts[positionItemInCart].quentity += 1
            break;
       
        default:
            let valueChange = carts[positionItemInCart].quentity -1
            if(valueChange > 0){
                carts[positionItemInCart].quentity = valueChange
            }else{
                carts.splice(positionItemInCart, 1)
            }
            break;
       }
    }
    addCartToMemory()
    addCartToHTML()
}


const initApp = ()=>{
    // fetch data form product.json
    fetch('products.json')
    .then(Response => Response.json())
    .then(data => {
        productList = data
        addDataToHTML()

        // get carts from memory / local storage
        if(localStorage.getItem('cart')){
            // JSON.parse convert the stringfy data into array
            carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML()
        }
        
    })
}

initApp()