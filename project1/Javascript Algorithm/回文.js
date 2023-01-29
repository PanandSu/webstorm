function palindrome(str){
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
    return str =str.split("").reverse().join("");
}
console.log(palindrome("1234567890qwertyuiopasdfghjklzxcvbnmABCDEFGHJKLM"))