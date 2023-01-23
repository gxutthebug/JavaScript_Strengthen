let arr =  [1,2,3]
// console.log(typeof ...arr)
console.log(...arr)


// ① 数组拼接 分割  浅拷贝
/*var a = [1, 2];
var b = [0, ...a, 3]

var [a, ...b] = [0, 1, 2];
console.log(b) // [1, 2]


var a = [1, 2];
var b = [...a];*/

// ② 展开运算符可以用来传实参
function a(x, y, z) { 
    console.log(x)
    console.log(y)
    console.log(z)
 }

 a(...arr)


 // ③ 可以用来做形参,来表示将多个单独的实参聚合成一个数组
 // 不同于arguments的是,这是一个真正的数组可以进行数组操作
 //  这种写法很有用。可以直接利用数组方法对传入的多参数进行逻辑处理,为什么不直接传一个数组,因为这些参数在外部很就是独立的
 function test(...args) {
   args.push('我是真正的数组')
   console.log(args);
 }
 
 test('wang', '23', 'man'); // [ 'wang', '23', 'man', '我是真正的数组']
 



 // ④对象的分割,跟上面数组的分割类似
 let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(z) // {a: 3, b: 4}





 console.log('--------------------------------------------------------------------------------------------------------')

 // 需要传入不定数量的参数，同时最后一个参数为需要指定的值
 function b() {
    console.log(arguments.length);
    console.log(arguments[2])
    console.log(arguments[arguments.length -1]);
  }
  var args = [0, 1, 2];
  b(...args, -2)
  
  console.log('--------------------------------------------------------------------------------------------------------')

