// Amazon shipping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

/*
Implement a card fearture:
1. Add items to cart.
2. Add 3% tax to item in cart
3. Buy item: cart -> purchases
4. Empty cart
Bonus
Accept refunds
Track user history
*/

// Item class
class Item {
  constructor(name, price){
    this.name = name,
    this.price = price,
  }
}
