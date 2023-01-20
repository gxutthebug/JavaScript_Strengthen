// 只传入回调函数;此时默认累加器的初始值为数组索引0上的值,reduce从数组索引1开始遍历执行回调

let a= [1,2,3,4].reduce(function(auto,value,index,arr){
    return auto + value
})
console.log(a) // 10

// 除了传入回调函数,还传入第二个参数,即累加器auto的初始值;此时reduce从 数组的索引0开始遍历执行回调

let b= [1,2,3,4].reduce(function(auto,value,index,arr){
    return auto + value
},10)
console.log(b) // 20

console.log('------------------------------------------------------------------------------------------')

// reduce()的九大应用场景

// 1.普通数组求和
let sum1 = [ 0, 1, 2, 3 ].reduce(( previousValue, currentValue ) => previousValue + currentValue,0)
console.log(sum1)


// 2.对象数组求和
let sum2 = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , 0
)
console.log(sum2) // logs 6