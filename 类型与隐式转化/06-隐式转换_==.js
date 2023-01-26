/*用==进行变量比较时:
① 左右两边都是基本类型且类型不一致时：
            ①.1 undefined只会和null相等（以下不再讨论undefined、null类型）
            ①.2 Symbol类型只会和Symbol类型相等（不再讨论Symbol类型）
            ①.3 bigint类型与number类型表现的行为一致（不再讨论bigint类型，只剩下string、boolean、number三种类型）
            ①.4 只要存在boolean类型，就将boolean值转为数字（只剩下数字和字符串的情况）
            ①.5 数字和字符串的情况下，将字符串转为数字，进行数字和数字的比较

 
②左右两边有一边是引用类型时,两边隐式转化成Number 比较

③左右两边都是引用值时,直接比较这两个引用地址
*/



console.log("44"==44) //true

console.log('40' == 'yfm')  // false

console.log(null == undefined)  //true



console.log("---------------------------------------------------------------------------------------------------------------------------")
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

