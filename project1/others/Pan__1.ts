function hello(name: string) { //name;string ,TypeScript中的类型注释,parameter name is name,data type is string;
    return "Hello ," + name;
}

let userName = "Len Wang";
document.body.innerHTML = hello(userName);
let list: number = 1;
document.body.innerHTML

interface Person {    //接口
    firstName: string;
    lastName: string;
    middleInitial: string;
    fullName: string;
}

//class Person
// @ts-ignore
function Person(person: Person) {
    let fullName = person.firstName + "  " + person.middleInitial + "  " + person.lastName;
}

// @ts-ignore
function People(public firstName, public lastName, public middleInitial, public fullName) {

}

//let pjh=People("JinHao","Pan","PJH.","JinHao  PJH.  Pan");
let str1: string = `I'm PanJinHao
I love you forever.`
console.log(str1);
