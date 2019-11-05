class Product {
    constructor(nameProduct, calories){

        this.nameProduct = nameProduct;
        this.calories = calories;
    }
}

class Dish {
    constructor(dishName) {
        this.dishArray = [];
        this.dishName = dishName;
    }
    addProduct(name , grams) {
        this.dishArray.push({name, grams});
        // console.log(this.dishArray);
        // console.log(name);
    }
    getCalories(){
        this.allCalories = [];
        let sumCalories = 0;
        for(let i = 0; i < this.dishArray.length; i++){
            let sumDish = (this.dishArray[i].name.calories * this.dishArray[i].grams) / 100;
            sumCalories+= sumDish
        }
        this.allCalories.push(sumCalories);
        return  this.allCalories
    }

}
class CaloriesCalculator {
    constructor(){
        this.newDish =[]
    }
    addDish(dish) {
        this.newDish.push(dish);
        // console.log(this.newDish);
    }
    getTotalCalories(){
        let calories = 0;
        this.newDish.forEach(dish => {
            calories += dish.getCalories();
        })
        return calories;
    }
    getAllDishesInfo() {
        console.log(this.newDish[0]);
        let render = []
        for(let i = 0; i < this.newDish[0].dishArray.length; i++){
            let str1 = this.newDish[0].dishArray[i].grams;
            let str2 = this.newDish[0].dishArray[i].name.nameProduct;
            let str3 = this.newDish[0].dishArray[i].name.calories
            render.push(str2 + ', ' + str1 + 'гр ' + str3 + 'ккал\n');



        }
        console.log('============================================');
        const dishes = this.newDish[0].dishName + ' 1'  + ' порция, ' + calories + ' ккал' + '\n' + ',' + render;
        console.log(dishes);
        console.log('============================================');
    }

}

const meat = new Product('Филе говядина', 158);

const rice = new Product('Рис', 130);

const onion = new Product('Лук', 40);

const carrot = new Product('Морковь', 41);



const plov = new Dish('Плов');

plov.addProduct(meat, 100);
//
plov.addProduct(rice, 150);

plov.addProduct(onion, 25);

plov.addProduct(carrot, 25);
plov.getCalories()


const calculator = new CaloriesCalculator();

calculator.addDish(plov);

const calories = calculator.getTotalCalories();

console.log(calories); // должно вывести 373.25



const totals = calculator.getAllDishesInfo();

console.log(totals);
