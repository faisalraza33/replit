// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
const item = {
    name: 'Dell XPS',
    price: 1200
}


//Implement a cart feature:

// Create pipe for processing the purchases, will take user and item and process the functions
const pipe = (f1, f2) => (...args) => f2(f1(...args));

// Fucntion to purchase items
const purchasesUsingPipe = (...fns) => fns.reduce(pipe);

// Call the pipe line Fucntion
let result = purchasesUsingPipe(
    AddItemToCart,
    AddTaxToCartItems,
    BuyItemsFromCart,
    EmptyCart,
)(user, item);

console.log(result);

// 1. Add items to cart.
function AddItemToCart(user, item) {
    let updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {
        cart: updatedCart
    });
}

// 2. Add 3% tax to item in cart
function AddTaxToCartItems(user) {
    let updatedCart = user.cart.map(item => {
        let newPrice = 1.13 * item.price
        console.log(newPrice, newPrice.toFixed(2))
        return {
            name: item.name,
            price: newPrice
        }
        //newItem.price = newItem.price.toFixed(2)        return newItem;
    });
    return Object.assign({}, user, {
        cart: updatedCart
    });
}

// 3. Buy item: cart --> purchases
function BuyItemsFromCart(user) {
    return Object.assign({}, user, {
        purchases: user.cart
    });
}

// 4. Empty cart
function EmptyCart(user) {
    return Object.assign({}, user, {
        cart: []
    });
}

//Bonus:
// accept refunds.
// Track user history.