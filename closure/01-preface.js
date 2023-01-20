
// 高阶函数类型1:函数作为参数传参,用处就是可以实现回调函数
function fn (a,b,callback) {
     console.log(a+b);
     callback && callback() // 短路运算,意思是如果callback函数存在(有传入),就屌用
}

fn(1,2,function () {
    console.log("我是传入的回调函数,我被调用了")
})


// 高阶函数类型2:函数作为返回值返回,用处就是可以实现闭包;下面列举了几种常见闭包

//  function a () {
//     var num =10 
    
//     function b (){
//         console.log(num)   b函数中访问了其他函数内部的局部变量,b就是闭包;
                              //并且为了外部能通过b()也访问到num这个局部变量，我们可以在a () 内调用 b() 外部通过直接调用a ()实现
                              // 还有一种写法就是我们把b()作为返回值返回出去，外面接收并调用，所以闭包常常被认为是函数内部返回一个函数(就像下面那样)
//     }

//     b()
//  }

//   a(); 


// 常见闭包 1

function a () {
    var num =10 
    
    function b (){
        console.log(num)
        num++
    }

    return b
 }

  var c = a()
  c() 
  c() 
  c()

  // 常见闭包 2

  function show (msg,time) {
       var msg2 ='202'
       setTimeout(function () {
               console.log(msg+msg2)
       } , time)
  }

  show('姚丰茂',3000)
  /*这种闭包跟上面那种有什么不同呢,本质上还是函数嵌套 内层函数访问外层函数的变量形成闭包*/
  /*不同点1,内层函数是一个回调函数,回调函数可以自己调用不与要我们return出去*/
  /*不同点2,内层函数除了访问外层函数声明的变量还访问了传进来的实参*/
  
//   这种方式就是preface中的第三种解决方案

