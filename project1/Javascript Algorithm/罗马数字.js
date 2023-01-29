function convert(num){
    let Ro = ['M','CM','D','CD','C','XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let Num = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let roman;
    for (let i = 0; i < Num.length; i++) {
        while (num >= Num[i]) {
            roman += Ro[i];
            num -= Num[i];
        }
    }
    return roman;
}
x = convert(9)
console.log(x)
