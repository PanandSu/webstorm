let x = 1;
if (x > 2) {
    console.log("x is bigger than 2");
} else {
    console.log("x is smaller than 2");
}

//if else statement
let y = 14;
if (y % 4 === 0) {
    console.log(y - 3);
} else if (y % 4 === 1) {
    console.log(y - 2);
} else if (y % 4 === 2) {
    console.log(y - 1);
} else {
    console.log(y);
}

//switch statement
let z = 13;
switch (z % 4) {
    case 0:
        console.log("4*n");
        break;
    case 1:
        console.log("4*n+1");
        break;
    case 2:
        console.log("4*n+2");
        break;
    case 3:
        console.log("4*n+3");
        break;
}

/*
expression=result_i,i belongs to(result1,result2,result3,...result_n)
switch(expression) {
    case result1:block1;break;
    case result2:block2;break;
    case result3:block3;break;
    .....
    case result_n:block_n;break;
}
 */



