// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 200},
//     {id: 4, title: 'Gamepad', price: 50},
// ];

// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <img src="http://placehold.it/150x100" alt="">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };

// const renderPage = (list) => {
//     const productList = list.map(item => renderProduct(item.title,item.price));
    

//     document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item)).join(''))
// };

// // Запятые убрались, но сломал передачу значений.

// // const renderPage = list => {
// //     const productsList = list.map(item => renderProduct(item.title,item.price));
// //     console.log(productsList);
// //     document.querySelector('.products').innerHTML = productsList;
// // };

// renderPage(products);


class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
   productsSum(){
        for(let product of this.goods){
            s += item.price;
        }
   }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Cart{
    constructor(){

    }

    totalPrice(){

    }

    deleteItem(){

    }
}

class CartItem{

}

let list = new ProductList();