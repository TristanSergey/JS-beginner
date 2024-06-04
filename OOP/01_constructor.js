const User = function (email, password) {
    this.email = email;
    this.password = password;
};

const user1 = new User('a@a.ru', 123);
console.log(user1);
const user2 = new User('b@b.ru', 123);
console.log(user2);
console.log(user2 instanceof User);

const Book = function (title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
};

Book.prototype.read = function () {
    this.isRead = true;
};

const lordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien');
lordOfTheRings.read();
console.log(lordOfTheRings);

const product_1 = { id: 1, name: 'milk', count: 1 };
const product_2 = { id: 2, name: 'shugar', count: 1 };
const product_3 = { id: 3, name: 'chees', count: 1 };

function Cart() {
    this.products = [];
}

const cart = new Cart();

Cart.prototype.addProduct = function (product) {
    if (this.products.find(item => item.id === product.id)) {
        return;
    }
    this.products.push(product);
};

Cart.prototype.inc = function (id) {
    const item = this.products.find(item => item.id === id);
    if (item) {
        item.count++;
    }
    return this.products;
};

Cart.prototype.dec = function (id) {
    const item = this.products.find(item => item.id === id);
    console.log(item);
    if (item.count > 1) {
        item.count--;
    } else {
        this.products = this.products.filter(item => item.id !== id);
    }
    return this.products;
};

cart.addProduct(product_1);
cart.addProduct(product_2);
cart.addProduct(product_3);
cart.inc(1);
cart.inc(2);
cart.inc(2);
console.log(cart);
cart.dec(2);
console.log(cart);
cart.dec(2);
console.log(cart);
cart.dec(2);
cart.dec(1);
console.log(cart);
cart.dec(1);
console.log(cart);
