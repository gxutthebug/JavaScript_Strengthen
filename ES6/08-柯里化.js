/*Currying 为实现多参函数提供了一个递归降解的实现思路——把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
并且返回接受余下的参数而且返回结果的新函数，在某些编程语言中（如 Haskell），是通过 Currying 技术支持多参函数这一语言特性的。
所以 Currying 原本是一门编译原理层面的技术，用途是实现多参函数。
*/


function add(a,b) {
  return a+b
}


function add2(a) {
     return function (b) {
          return a + b
     }  // 那如果要计算多个数的和岂不是要嵌套很多层  return a+b+c....... 况且参数个数还是死的,少传参还出不了结果

}

console.log(add2(1)(2)) //3

console.log("--------------------------------------------------------------------------------------------------------------------------")
// 想要不层层嵌套地返回执行函数 , 最好的解决方案是只从始至终return一个函数出去
// 但是只return 一个函数出去不就是死循环了吗？必须要有一个边界,到达边界就不再return函数 而是return一个结果值
// 到这里还有一个问题就是,因为是累加函数,所以下一次调用必须能访问到上一次调用的结果,就是一个累加器 ,实现累加器有两种思路:
// ① 最简单的是直接用一个外部变量保存,但这样就不是纯函数了
// ② 还有一种就是就是柯里化(利用闭包实现),初始化是难点


//  ① 像手写reduce()那里一样利用for循环重复调用  ② 手动挡递归  ③ 自动挡递归
 
let arr= [] // 这里用的还是外部变量储存,不满足纯函数原则

function addCurry() {
  let arg = Array.prototype.slice.call(arguments); // 递归获取后续参数
  arr = arr.concat(arg);
   if (arg.length === 0) { // 如果参数为空，则判断递归结束
       return arr.reduce((a,b)=>{return a+b}) // 求和
   } else {
       return addCurry;  // 如果是自动挡递归,这里就直接传参调用函数了
   }

}

console.log(addCurry(1)(2)(3)()) // 6
//console.log(addCurry(1)(2,3)()) // 6  由于不是纯函数,不能连续多次调用,不然结果不对



console.log("--------------------------------------------------------------------------------------------------------------------------")
// 写到这里,还有一个BUG,上面那个函数并不是纯函数,关联了用一个外部变量let arr= []
//  改成纯函数,但是有一个难处就是:
//用闭包保存的话那保存的那个容器数组从外部转移到函数内部后怎么初始化,你不能在addCurry()内初始化为[],这样每次调用都重置了

function addCurry2() {
  // let arg = Array.prototype.slice.call(arguments); // 递归获取后续参数
  let arr = [...arguments]
  console.log(arr)

  let fn = function () {  // 用一个内部函数把外面那个数组的初始化给隔开,最后返回这个内部函数

      if(arguments.length === 0) {
    return arr.reduce((a, b) => a + b)
      } else {
          arr.push(...arguments)
          return fn
      }
  }

  return fn

}

console.log(addCurry2(1)(2)(3)()) // 6
console.log(addCurry2(1)(2,3)()) // 6

console.log("--------------------------------------------------------------------------------------------------------------------------")
// 改用ES6的rest参数,来代替argumtens数组化可以更优雅简洁
// addCurry3(...arr)中的arr作为实参可以形成闭包


function addCurry3(...arr) {

  let fn = function (...arg2) {  // 这里定义fn然后内部再return fn 跟直接return fn 有啥区别？
      if(arguments.length === 0) {
    return arr.reduce((a, b) => a + b)
      } else {
          arr.push(...arg2)
          return fn
      }
  }

  return fn

}

console.log(addCurry3(1)(3,3)()) // 7


// 以上这几个就是柯里化函数的模版了