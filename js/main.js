const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <img src="http://placehold.it/150x100" alt="">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = (list) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item)).join(''))
};

// Запятые убрались, но сломал передачу значений.

// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item.title,item.price));
//     console.log(productsList);
//     document.querySelector('.products').innerHTML = productsList;
// };

renderPage(products);