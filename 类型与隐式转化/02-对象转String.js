// 基础类型强制转string类型在规范中明确说明了，也比较符合我们的直觉
// 但是Object类型转成字符串取不符合我们的直觉
console.log(String({ a: 2 }))           // "[object Object]"
console.log(String([1, 2]) )              // "1,2"
console.log(String(/reg/g))               // "/reg/g"

// 实际上在对Object类型进行String转换的时候，
// 会调用原型链上的toString方法，并作为结果返回
// 可以看到Object的子类型之间toString并不一致
var arr = [1, 2];
arr.toString()             // "1,2"
String(arr)                // "1,2"

// 重写toString
arr.toString = function() { return this.join('/') };
String(arr)                // "1/2"
// 可见Object类型在强制转换为string类型的时候，
// 实际是调用了该类型原型上的toString方法，
// 而Object的各个子类型基本都重写了toString方法
// 所以在进行toString操作的时候表现有差异
