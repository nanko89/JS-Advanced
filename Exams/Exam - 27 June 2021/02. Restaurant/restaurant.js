class Restaurant {
constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
}

loadProducts(products) {

    for (let product of products) {
        let productName = product.split(" ")[0];
        let productQuantity = Number(product.split(" ")[1]);
        let productTotalPrice = Number(product.split(" ")[2]);

        if(productTotalPrice > this.budgetMoney) {
            this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
        }else{
            this.budgetMoney -= productTotalPrice;

            if(!this.stockProducts.hasOwnProperty(productName)) {
                this.stockProducts[productName] = 0;
            }

            this.stockProducts[productName] += productQuantity;

            this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
        }
    }

    return this.history.join("\n");
    }

    addToMenu(meal, neededProducts, price ) {
        let productsList = {};
        for (const product of neededProducts) {
            let[productName, productQuantity] = product.split(' ');
            productsList[productName] = productQuantity;
        }

        if(!this.menu.hasOwnProperty(meal)){
            this.menu[meal] = {"products":productsList, price };
            if(Object.keys(this.menu).length === 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }else{
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        }else{
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return "Our menu is not ready yet, please come later...";
        }

        return Object.entries(this.menu).map(m => `${m[0]} - $ ${m[1].price}`).join("\n");
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        let currentMeal = this.menu[meal];
        let neededProducts = Object.entries(currentMeal.products);
        let price = currentMeal.price;
        let isHaveAllProduct = true;
        for (const product of neededProducts) {
            let name = product[0];
            let quantityOrder = Number(product[1])

            if(!this.stockProducts.hasOwnProperty(name)){
                isHaveAllProduct = false;
                break;
            }

            let quantityStock = Number(this.stockProducts[name]);

            if(quantityStock < quantityOrder){
                isHaveAllProduct = false;
                break;
            }

            this.stockProducts[name] -= quantityOrder;

        }

        if(isHaveAllProduct){
            this.budgetMoney += price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
        }
    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
//kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
//kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55);
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
kitchen.makeTheOrder("Pizza")
