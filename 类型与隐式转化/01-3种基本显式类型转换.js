// 三种基本类型之间可以直接的！相互,分别对应三个全局函数Boolean()  Number()  String()


let str = 'hello' //代表普通字符串
let num = 0  
let bool = false
let un = undefined
let nu = null




//原始值转布尔,除了这6种其余全是TRUE
console.log(Boolean(str));  // false
console.log(Boolean(num)); // 0 false   其他为 ture
console.log(Boolean(bool));  //false
console.log(Boolean(un));   //false
console.log(Boolean(nu));  //fasle
console.log(Boolean(NaN));  //fasle


console.log('------------------------------------------------------------------------------------')
// 原始值转数字: 除了bool变量能转成0/1,null转为0，还有长成数字样的字符串能转成数字(空字符串是0),其他东西转全是NAN 
// 只需记住只有三种东西能强转为真正的数字
console.log(Number()); // 0
console.log(Number(str)); // NaN   
console.log(Number(bool)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(nu)); // 0
console.log(Number('4444')); // 4444
console.log(Number('')); // 0


console.log('------------------------------------------------------------------------------------')
//原始值转字符串: 这个最简单,你的直接就是结果......
console.log(String(num)); // -1
console.log(String(bool)); // false
console.log(String(un)); // undefined
console.log(String(NaN)); // NaN
console.log(String(Infinity)); // Infinity

console.log('------------------------------------------------------------------------------------')
/*上面三种都是基本类型转成String, Number , bool；如果换成引用类型来转换会有什么不同呢*/



