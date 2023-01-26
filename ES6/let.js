/*-----------------------------------------------------------------------------------------------*/
// 在let出现以前,javascript是没有块级作用域的，只用全局作用域 和 函数作用域(局部)
// let出现后,使用let声明变量可以使该变量具有块级作用域
// 这在复杂的代码中可以防止块内定义的变量覆盖外部的全局变量
if (true) {
    var a = 10
    let b = 20
}
console.log(a)
// console.log(b)  报错 not defind


for(var i =0 ; i<4;i++){
    console.log(i)
}
console.log(i)


for(let k =0 ; i<4;i++){
    console.log(k)
}
 console.log(k)   //报错 not defind


/*-----------------------------------------------------------------------------------------------*/
// let声明的变量没有变量提升，因为变量提升其实是一个不太好的缺陷，let就是解决这个缺陷的，使得JS更加的规范
console.log(n) //会报错
let n = 50 


/*-----------------------------------------------------------------------------------------------*/
// 用let声明的变量会有暂时性死区:在块级作用域中一单使用了let(const关键字),那么那些在被let(const关键字)声明的变量就会在这条声明语句前被禁止访问（从块的入口到这条声明语句中间这段就是死区）
// 暂时性死区有两个作用：①还是防止变量提升  ②防止外层作用域的同名变量干扰，由于死区的存在，在死区内无法访问该变量，这也就是阻止他向外层作用域找了
var m = 100
if (true) {
    console.log(m)  // 这行会报错，因为这里是死区，禁止访问m
    let m =60  // 变量声明，下面不在死区（解除）
}


/*-----------------------------------------------------------------------------------------------*/
if(true){
    let a =108

    if(true) {
        console.log(a)  // 108
    }
}


let age = 88889

if(true) {
    console.log(age)  // 88889
}

function on (){
    console.log(age)  // 88889
}

on()