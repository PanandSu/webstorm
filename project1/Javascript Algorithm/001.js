function max(x, y){
    if(x>=y){
        return x;
    }
    else{
        return y;
    }
}
console.log(max(7, 9))
function add(x, y){
    return x+y;
}
console.log(add(7, 9))
function  f(x, y){
    return x ** 2 + y ** 2;
}
console.log(f(7, 9))

function maxi(x,y,z){
    if (x>=y){
        let zz=x;
        return zz;
    }
    else{
        let zz=y;
        return zz;
    }
    if (zz>=z){
        return zz;
    }
    else{
        return z;
    }
}
console.log(maxi(7, 9, 61))
