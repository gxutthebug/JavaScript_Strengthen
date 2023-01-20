// 下面这几个方法强调找出符合的元素的位置或者其本身的值

// 这种单值传入的,在简单比较全等时可以节省很多代码量
console.log([1, 2, 3].indexOf(4))  //-1 如果存在反回索引
/* 如果我们只想要返回false / true 可以这样: 
 return [1, 2, 3].indexOf(4) > -1   
 虽然find() findIndex() 也可以实现类似操作限制返回值 不过没必要........可以直接用some()*/

console.log([1, 2, 3].find((item) => item === 3)) //3 如果数组中无值返回undefined


console.log([1, 2, 3].findIndex((item) => item === 3)) //2 如果数组中无值返回-1


 console.log('----------------------------------------------------------------------------------------------')


// 而下面这几个个强调判断是否存在而不是找出(返回true/flase)

console.log([1, 2, 3].includes(4)) // false

console.log([1, 2, 3,4].some(item => { return item > 2 })) 


console.log([1, 2, 3].every(item => { return item > 2 }))