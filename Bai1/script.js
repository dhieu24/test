var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];

var arrFinal = [];

for(let i = 0; i < arr1.length; i ++) {
    for(let j=0; j< arr2.length; j++){
        if(arr1[i] != arr2[j]) {
            if(arrFinal.includes(arr1[i]) == false) {
                arrFinal.push(arr1[i]);
                console.log(arrFinal);
            }
            
        }
        else if (arr1[i] == arr2[j]){
            arrFinal.slice(arr1[i]);
            break;
        }

    }
    
}
console.log(arrFinal);