//asigno elementos a variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuHamburgesa = document.querySelector('.menu');
const iconoCarrito = document.querySelector('.navbar-shopping-cart');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
//creo selector para el btn de cerrar el detalle del producto
const btnCloseProductDetail = document.querySelector('.product-detail-close');

//agrego evento click al menu de email
menuEmail.addEventListener('click', menuEmailClick);
//agrego evento click al menu de hamburgesa
menuHamburgesa.addEventListener('click', menuHamburgesaClick);
//agrego evento click al icono de carrito
iconoCarrito.addEventListener('click', iconoCarritoClick);
//agrego evento click al btn de cerrar el detalle del producto
btnCloseProductDetail.addEventListener('click', closeProductDetail);

//creo array de productos
const productList = [];
productList.push({
    name: 'Bici TREK',
    price: 100000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bici GIANT',
    price: 200000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bici SPECIALIZED',
    price: 300000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bici CANNONDALE',
    price: 400000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bici SCOTT',
    price: 500000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bici MERIDA',
    price: 600000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//funcion para mostrar el menu de email
function menuEmailClick() {
    const isAsaideClosed = shopingCartContainer.classList.contains('inactive'); //si el menu de carrito esta cerrado

    if(!isAsaideClosed) { //si el menu de carrito esta abierto
        //cierro el menu de carrito
        shopingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive'); //el nombre de la clase va sin el punto
}
//funcion para mostrar el menu de hamburgesa
function menuHamburgesaClick() {
    const isAsaideClosed = shopingCartContainer.classList.contains('inactive'); //si el menu de carrito esta cerrado
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); //si el detalle del producto esta cerrado

    if(!isAsaideClosed) { //si el menu de carrito esta abierto
        //cierro el menu de carrito
        shopingCartContainer.classList.add('inactive');
    }

    if(!isProductDetailClosed) { //si el detalle del producto esta abierto
        //cierro el detalle del producto
        productDetailContainer.classList.add('inactive');
    }

    menuMobile.classList.toggle('inactive');
}
//funcion para mostrar el menu de carrito
function iconoCarritoClick() {
    const isMenuMobileClosed = menuMobile.classList.contains('inactive'); //si el menu de hamburgesa esta cerrado
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive'); //si el menu de email esta cerrado
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); //si el detalle del producto esta cerrado

    if(!isMenuMobileClosed) { //si el menu de hamburgesa esta abierto
        //cierro el menu de hamburgesa
        menuMobile.classList.add('inactive');
    }

    if(!isMenuEmailClosed) { //si el menu de email esta abierto
        //cierro el menu de email
        desktopMenu.classList.add('inactive');
    }

    if(!isProductDetailClosed) { //si el detalle del producto esta abierto
        //cierro el detalle del producto
        productDetailContainer.classList.add('inactive');
    }

    //muestro el menu de carrito
    shopingCartContainer.classList.toggle('inactive');
}

//funcion para abrir el detalle del producto
function openProductDetail() {
    //siempre q abra el detalle del producto cierro el menu de carrito
    shopingCartContainer.classList.add('inactive'); //agrego la clase inactive
    //siempre q abra el detalle del producto cierro el menu de hamburgesa
    menuMobile.classList.add('inactive'); //agrego la clase inactive
    //muestro el detalle del producto
    productDetailContainer.classList.remove('inactive'); //remuevo la clase inactive
}

//funcion para cerrar el detalle del producto
function closeProductDetail() {
    //cierro el detalle del producto
    productDetailContainer.classList.add('inactive'); //agrego la clase inactive
}

//funcion renderiza productos
function renderProducts(arrProds) {
    //recorro el array de productos
    for (product of arrProds){
        //console.log(product.name); //muestro el nombre del producto

        //creo el elemento div
        const productCard = document.createElement('div');
        //agrego la clase al elemento div
        productCard.classList.add('product-card');

        //creo el elemento img
        const img = document.createElement('img');
        //agrego la clase al elemento img
        img.classList.add('imgCard');
        //agrego el atributo src al elemento img
        img.setAttribute('src', product.image);
        //agrego el atributo alt al elemento img
        img.setAttribute('alt', product.name);
        //agrego evento click al elemento img
        img.addEventListener('click', openProductDetail); //openProductDetail es una funcion que todavia no cree

        //creo el elemento div
        const contTextYicono = document.createElement('div');
        //agrego la clase al elemento div
        contTextYicono.classList.add('cont-textYicono');
        //creo el elemento div
        const contText = document.createElement('div');
        //creo el elemento p
        const price = document.createElement('p');
        //agrego el texto al elemento p
        price.textContent = '$' + product.price;
        //agrego la clase al elemento p
        price.classList.add('price');
        //creo el elemento p    
        const name = document.createElement('p');
        //agrego el texto al elemento p
        name.textContent = product.name;
        //agrego la clase al elemento p
        name.classList.add('name');
        //creo el elemento div
        const contIcono = document.createElement('div');
        //creo el elemento figure
        const figure = document.createElement('figure');
        //creo el elemento img
        const imgIcono = document.createElement('img');
        //agrego la clase al elemento img
        imgIcono.classList.add('imgIcono');
        //agrego el atributo src al elemento img
        imgIcono.setAttribute('src', './icons/bt_add_to_cart.svg');

        //le introduzco el elemento img al elemento figure
        figure.appendChild(imgIcono);
        //le introduzco el elemento figure al elemento div
        contIcono.appendChild(figure);

        //le introduzco el elemento p al elemento div contText
        contText.appendChild(price);
        //le introduzco el elemento p al elemento div contText
        contText.appendChild(name);
        
        //le introduzco el elemento div contText al elemento div contTextYicono
        contTextYicono.appendChild(contText);
        //le introduzco el elemento div contIcono al elemento div contTextYicono
        contTextYicono.appendChild(contIcono);

        //le introduzco el elemento img al elemento div card
        productCard.appendChild(img);
        //le introduzco el elemento div contTextYicono al elemento div card
        productCard.appendChild(contTextYicono);

        //le introduzco el elemento div card al elemento div cardContainer
        cardContainer.appendChild(productCard);
    }
}

//llamo a la funcion renderiza productos
renderProducts(productList);





