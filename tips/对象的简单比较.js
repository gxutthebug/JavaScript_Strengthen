/*在JS中用===比较两个对象比较的是他们的引用地址,但是我们想比较对象里面的键值对内容是否一样

我们可以把对象想转化为字符串在去比较,就能实现一个简单版的对象比较功能
*/

let obj1 = {
    a:1,
    b:2
}

let obj2 = {
    a:1,
    b:2
}


console.log(obj1==obj2) // false
console.log(obj1===obj2) // false

console.log(JSON.stringify(obj1)===JSON.stringify(obj2)) //true

console.log('----------------------------------------------------------------------------------------------')
// 值得注意的是数组方法includes()  indexOf() 的内部比较是基于===的
// 所以对象数组要想查找元素不能使用这种全等比较的方法
// 用find() findIndex()这种自定义比较规则的才行
const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }]

console.log(arr.includes({name: 'name1', id: 1})) // false

console.log(arr.indexOf({name: 'name1', id: 1}))  // -1
