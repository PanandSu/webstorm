function largest(arr){
    let arr_max = [];
    for(let i=0; i<arr.length; i++){
        let item_max = arr[i][0];
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] > item_max) {
                item_max = arr[i][j];
            }
        }
        arr_max.push(item_max);
    }
    return arr_max;
}
x= largest([1, 2, 9, 7, 5], [1, 2, 3,],[3,7,6,2,1,3],[8,0,4,7])
console.log(x)
