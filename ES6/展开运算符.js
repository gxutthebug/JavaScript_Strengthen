let arr =  [1,2,3]
// console.log(typeof ...arr)
console.log(...arr)

// 展开运算符可以用来传参
function a(x, y, z) { 
    console.log(x)
    console.log(y)
    console.log(z)
 }

 a(...arr)
 
 console.log('--------------------------------------------------------------------------------------------------------')

 // 需要传入不定数量的参数，同时最后一个参数为需要指定的值
 function b() {
    console.log(arguments.length);
    console.log(arguments[2])
    console.log(arguments[arguments.length -1]);
  }
  var args = [0, 1, 2];
  b(...args, -2)
  
