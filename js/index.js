// update customize product price
function updateProductPrice( number, product, price) {
    const optionInput = document.getElementById(number + product + '-button'); 
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = price;
    calculateTotalPrice();
}

// getting input for calculating price
 function getPrice (product) {
     const productPrice = document.getElementById(product + '-price');
     const priceCollected = parseInt(productPrice.innerText);
     return priceCollected;
 }

// calculate total price
 function calculateTotalPrice() {
    const bestPrice = 1299;
    const memoryPrice = getPrice('memory');
    const storagePrice = getPrice('storage');
    const deliveryPrice = getPrice('delivery');
    const subTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    
    //update on the html
    document.getElementById('total-price').innerText = subTotal;
    document.getElementById('promo-price').innerText = subTotal;
}

// handle and calculate promo button
document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');

    //use promo code and calculate total
    if(promoInput.value == "stevekaku") {
        const promoOutput = document.getElementById('promo-price');
        const promoParcentage = (promoOutput.innerText / 100) * 20;
        promoOutput.innerText = parseFloat(promoOutput.innerText) - promoParcentage;
        console.log(promoOutput.innerText);
    }
    // input value and disable promo button
    document.getElementById('promo-button').disabled=true;
    promoInput.value = "";
})

// handle memory product
document.getElementById('first-memory-button').addEventListener('click', function () {
    updateProductPrice('first-', 'memory', 0);
});
document.getElementById('second-memory-button').addEventListener('click', function () {
    updateProductPrice('second-', 'memory', 180);
});

//handle storage product
document.getElementById('first-storage-button').addEventListener('click', function () {
    updateProductPrice('first-', 'storage', 0);
});
document.getElementById('second-storage-button').addEventListener('click', function () {
    updateProductPrice('second-', 'storage', 100);
});
document.getElementById('third-storage-button').addEventListener('click', function () {
    updateProductPrice('third-', 'storage', 180);
});

//handle delivery product 
document.getElementById('first-delivery-button').addEventListener('click', function () {
    updateProductPrice('first-', 'delivery', 0);
});
document.getElementById('second-delivery-button').addEventListener('click', function () {
    updateProductPrice('second-', 'delivery', 20);
});
