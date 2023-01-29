function binaryAgent(str){
    return str.split("").map(binaryword =>String.fromCharCode(parseInt(binaryword, 2))).join("");
}
x= "1001001 100000 1101100 1101111 1110110 1100101 100000 1111001 1101111 1110101 100000 1110111 110011 1100011 1110011 1100011 1101000 1101111 1101111 1101100 100001";
console.log(binaryAgent(x))
