function f(x) {
    return x * Math.log(x);
}

console.log(f(Math.E), f(0));

function sayHello(name) {
    return "Hello" + "," + name + "!";
}

console.log(sayHello("PanJinHao"), sayHello("SuBingBing"));

function Cla(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.birthyear = bornYear
}

function bornYear() {
    return new Date().getFullYear() - this.age;
}

let cla1 = new Cla(19, "PanJinHao", "male");
let cla2 = new Cla(18, "SuBingBing", "female");
console.log(cla1.name, c, cla1.gender, cla2.name, cla2.birthyear());

function myMath(x) {
    this.sqrt = function (x) {
        return Math.sqrt(x);
    }
}

console.log(myMath.sqrt(2))



