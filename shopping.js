var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
	var price = Math.floor(100*Math.random());
	cart.push({[item]: price});
	console.log(`${item} has been added to your cart.`);
	return cart;
} 

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
	return cart
}

function viewCart() {
	if (cart.length > 0) {
		var string = `In your cart, you have `
		for (let i = 0; i < cart.length;i++) {
		  var item = Object.keys(cart[i]); 
		  var price = cart[i][item];
		  string += `${item} at $${price}, `;
		}
		string = string.slice(0,-2) + '.'
		console.log(string)
		return string
	} else {
	    return 'Your shopping cart is empty.'
	}
}

function removeFromCart(item) {
	var status = true
	for (let i = 0; i < cart.length; i++) {
		  var cartItem = Object.keys(cart[i]); 
		  if (item === cartItem[0]) {
		  	delete cart[i]
		  	status = false
		  }

		}
		if (status === true) {
			console.log('That item is not in your cart.')
		}
		return cart
}

function placeOrder(cardNumber) {
	if (cardNumber === undefined) {
		console.log("We don't have a credit card on file for you to place your order.")
	} else {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
		cart = []
	}
}
