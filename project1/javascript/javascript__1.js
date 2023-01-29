let a = "javascript,数据类型:number,string,boolean,null,undefined,object";
//boolean:true,false
let b = "inner function:Number,Boolean,String,Object"
let c = "逻辑:&&,and;||,or;!,not"
console.log(a);
let x = Number(undefined);
let y = Number(null);
console.log(x, y);
let z = !(4 < 9 || 5 % 2 === 0)
console.log(z);
console.log(x);
let u = Boolean(NaN);
let v = Object({name: "PanJinHao"});
let n = 100;
let msg = n % 3 === 1 ? "yes" : "no";
console.log(u, v, msg);

function hello(name) {
    return "Hello," + name + "I'm very glad to meet you!"
}

let hi = hello("PanJinHao");
console.log(hi);

function math(x, y) {
    return Math.log(x + y);
}

let maths = math(1, 1);
console.log(maths);
let w = "31415926";
if (Number(w) > Math.PI * 10 ** 7) {
    console.log("w is bigger than Math.PI");
} else {
    console.log("Math.PI is bigger than w.")
}
let arr1 = new Array()     //The Array() constructor(数组构造器)
let arr2 = [1, "PanJinnHao", "SuBingBing"]
console.log(arr2, typeof arr2);        //arr2 is an object.
console.log();
let d = 4;
d++;
console.log(d);
let e = d++;
console.log(e, d);
d--;
console.log(d);


//let f=d;
//d--;
//console.log(f,d);

//相当于

let f = d--;
console.log(f, d);

//自减
let v1 = 7;
v1--;
console.log(v1);

//自减
let v2 = 3;
let v3 = v2--;
console.log(v3, v2);
//  3,2

//自减
let v4 = 9;
let v5 = v4;
v4--;
console.log(v5, v4);
//9,8

//
let v6 = 5;
++v6;
v6++;
console.log(v6);
//6

//
let v7 = 2;
let v8 = ++v7;
console.log(v8, v7);
//

//
let v9 = 8;
++v9;
let v10 = v9;
console.log(v9, v10);
//

//C:\Users\lenovo\WebstormProjects\project1\javascript__1.js
