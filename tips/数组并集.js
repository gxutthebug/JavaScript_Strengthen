const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9]

// 思路筛选出arr2内不存在arr1中的元素,然后与arr1拼接
/* concat(): 
array1.concat(array2, array3,..., arrayX),concat可以合并多个数组
array1.concat(array2,'a','b') , 除了可以以数组为单位合并还可以合并单个元素*/

const result = arr1.concat(arr2.filter(v => !arr1.includes(v)))
console.log(result) //[1, 2, 3, 4, 5, 8, 9, 6, 7]


//数组对象
// 思路一: 同上
const arr3 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];

const arr4 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

const result2 =arr3.concat(arr4.filter( a =>{ 
    return !arr3.some( b =>{ 
       return JSON.stringify(a)===JSON.stringify(b) // 箭头函数要想省略return 就不能加 {} !!
    })
 }))

console.log(result2)

