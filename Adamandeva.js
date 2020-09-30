class Apple {
    constructor(weight) {
        this.weight = 10;
    }
    getWeight(weight){
        return this.weight
    }
}
class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.saySomething = function (text) {
            console.log(text);
        }
    }

    eatApple(apple) {
        if (apple.weight > 0) {
            apple.weight--;
            this.weight++;
            console.log(this.name + 'cắn một miếng, nhem nhem!')
        }

    }

}
