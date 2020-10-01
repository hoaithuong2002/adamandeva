class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    eat(apple) {
        if (apple.isEmpty()) {
            this.speak('het tao roi hic!')
        } else {
            if (this.weight >= 10) {
                this.speak(' khong an nua dau')
            } else {
                this.weight += 1;
                apple.decrease();
            }
        }
    }

    getMaxWeight() {
        if (this.weight >= 10) {
            this.speak('tao no roi!')
        }
    }

    speak(message) {
        alert(message)
    }

    getWeight() {
        return this.weight;
    }

    getName() {
        return this.name;
    }
}