/*用==进行变量比较时,如果左右两个值的 类型不同,就会将左右变量先用Number()强转为数字类型再比较

 注意:①如果左右两边的值类型相同,就会直接比较内容,如果是引用类型内容就比较地址(相当于===)
*/

// ![]是一个布尔值,！true为flase,Number(flase) = 0
console.log(![]==0) // true

// []是一个对象,Number([]) = Number('') = 0
// 因为数组的toString()被重写过,[].toString = ''
console.log([]==0) // true

console.log(![]==[]) // true

// 因为{}.toString = '[Object , Object]' ; 这里的toString是Object原型对象上的toString() 没有被重写
// Number('[Object , Object]') = NAN 
console.log(!{}=={}) // false

// 注意！:这里两个引用类型值比较,是相同类型不需要进行类型转换,又因为引用类型的比较是比较的地址(自然不相等)
console.log([]==[]) // false 
console.log({}=={}) // false 
console.log({}==[]) // false

// 注意！ : 第二个特殊点
console.log(undefined == null) // true
// 按理说一个转成Number是NAN 另一个是 0 ,应该是false才对
// 但其实这个比较是程序内部定好的,特殊记

