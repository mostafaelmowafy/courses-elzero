// Edit The Class
let cardRe = /(\d{4}-){3}\d{4}/g;

class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    checkCard(){
        if(cardRe.test(this.#c)){
            return `Hello ${this.u} Your Credit Card Number Is ${this.#c}` ;
        }
        else{
            let s = this.#c.toString()
            
            return `Hello ${this.u} Your Credit Card Number Is ${s.slice(0,4)}-${s.slice(4,8)}-${s.slice(8,12)}-${s.slice(12,16)}`;
        }
    }
    get showData (){
        return this.checkCard()
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined