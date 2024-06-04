'use strict';

// Этот код - тоже самое что и вот этот код
const Book = function (title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
};

Book.prototype.read = function () {
    this.isRead = true;
};

// Вот этот код
class BookClass {
    isRead = false;
    constructor(title, author) {
        // constructor - зарезервированное слово.
        // isRead = false;  можно и здесь указать
        this.title = title;
        this.author = author;
    }
    read() {
        this.isRead = true;
    }
}

// Принято использовать второй вариант. Как более привычный для программистов других языков программирования.

const lordOfTheRings = new BookClass('The Lord of the Rings', 'J.R.R. Tolkien');
console.log(lordOfTheRings);
console.log(lordOfTheRings.__proto__);
