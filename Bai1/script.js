
// for(let i = 0; i < arr1.length; i ++) {
//     for(let j=0; j< arr2.length; j++){
//         if(arr1[i] != arr2[j]) {
//             console.log(arrFinal.includes(arr1[i]));
//             if(arrFinal.includes(arr1[i]) == false) {
                
//                 arrFinal.push(arr1[i]);
//                 console.log(arrFinal);
//             }
            
//         }
//         else if (arr1[i] == arr2[j]){
//             console.log("aaaaaa");
//             break;
//         }

//     }
    
// }
// console.log(arrFinal);

var arr1 = [1, 2, 3, 4, 5, 10, 8];
var arr2 = [3, 4, 5, 9, 10];

var arrFinal = [];
var arrTemp = [];


for(let i = 0; i < arr1.length; i ++) {
    if(arr2.includes(arr1[i]) == false) {
        arrFinal.push(arr1[i]);
    }else if (arr2.includes(arr1[i]) == true) {
        arrTemp.push(arr1[i]);
    }
}

for(let j = 0; j < arr2.length; j++) {
    if(arrTemp.includes(arr2[j]) === false) {
        arrFinal.push(arr2[j]);
        console.log(arrFinal);
    }
}
