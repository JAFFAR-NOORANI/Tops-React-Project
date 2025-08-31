// task 1  -15min 

// input  = [1,2,3,9,2,5,6,7,8,4,0], [5,8,6,11,7,7,15,13,14,12]
// output - [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// statement -merge two arrays, then sort and remove dupicaltes  withour using prefeined methods



let arr1 = [1,2,3,9,2,5,6,7,8,4,0]
let arr2 =  [5,8,6,11,7,7,15,13,14,12]

let merge = new array  (arr1 + arr2)


console.log(arr1.join(' '));
console.log(arr2.join(' '));

// function mergeArray(arr1,arr2){
//     let n = arr1.lenght;
//     let m = arr2.lenght;

//     let merged = new array (n+m);
// }
//  for (let i = 0; i < n; ++i) {
//         merged[i] = arr1[i];
//     }
//     for (let j = 0; j < m; ++j) {
//         merged[n + j] = arr2[j];
//     }

//    merged.sort((a, b) => a - b);

  
//     for (let i = 0; i < n; ++i) {
//         arr1[i] = merged[i];
//     }

//     for (let j = 0; j < m; ++j) {
//         arr2[j] = merged[n + j];
//     }



// mergeArrays(arr1, arr2);

// console.log(arr1.join(' '));
// console.log(arr2.join(' '));   