/*parseInt() 函数可解析一个字符串,并返回一个整数;与Number最大的不同是,
遇到不规则但是首字母为数字的字符串,parseInt()可以解析并返回第一个数字*/

console.log(parseInt('3,4,5')) // 3
console.log(parseInt('a+4')) // NAN
console.log(parseInt('4+a'))  // 4
// 上面三种情况用Number()全都是NaN