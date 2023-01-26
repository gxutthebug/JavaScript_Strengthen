/* this 永远指向最后调用它的那个对象，来，跟着我朗读三遍：this 永远指向最后 调用 它的那个对象，this 永远指向最后 调用 它的那个对象，
this 永远指向最后 调用 它的那个对象*/

// ①有的函数定义在某个对象内,但是最后却用这个方法来赋值某个变量var a = obj.xxx(),此时执行a()就相当于执行obj.xxx()但是确实window调用的不是obj
// ② 有的函数定义在某个函数内(嵌套),并且在函数体内调用内部函数,这种情况也是window调用的
//  ③关于回调函数的this,回调函数本质就是传一个函数进去在函数内部再调用一个函数;本质就是上面这种情况,所以回调函数的this具体指向哪里要看
//  他在函数体内是如何调用的如果是直接调用的就是②那种情况this是window(这种还是大多数); 
//  如果是通过回调().call()的方式调用this自然就是call()的指向,若是 xxx.回调()的方式调用自然就是这个xxx了
//  但是很多我们看不到函数体里的东西,不知道这个回调是不是直接调用的,怎么能让回调函数的this可控呢? ==>把回调函数写成箭头函数的形式


/*一句话!,找函数this的指向,你别管这个函数在哪里声明定义,直接去函数调用处看,函数的this只跟调用者有关！是随时变化的*/
var name = "windowsName";
function a() {
    var name = "Cherry";

    console.log(this.name);          // windowsName

    console.log("inner:" + this);    // inner: Window
}
a();  // window是最后调用者

console.log('---------------------------------------------------------------------------------------------------------------')

var name2 = "windowsName";
var b = {
    name2: "Cherry",
    fn : function () {
        console.log(this.name);      // Cherry
    }
}
b.fn();  // b是最后调用者

console.log('---------------------------------------------------------------------------------------------------------------')

var name3 = "windowsName";
var c = {
    // name: "Cherry",
    fn : function () {
        console.log(this.name);      // undefined
    }
}
window.c.fn(); // c是最后调用者

console.log('---------------------------------------------------------------------------------------------------------------')


var name4 = "windowsName";
var d = {
    name4 : null,
    // name: "Cherry",
    fn : function () {
        console.log(this.name);      // windowsName
    }
}

var f = d.fn; // 注意！这句只是赋值！并没有调用,真正调用d里面这个fn()的是下面这句
f();   // window才是最后的调用者

console.log('---------------------------------------------------------------------------------------------------------------')

var name5 = "windowsName";

function fn() {
    var name5 = 'Cherry';
    innerFunction();
    function innerFunction() {
        console.log(this.name);      // windowsName
    }
}

fn() //fn()执行只是在fn()内部执行了  innerFunction() , innerFunction()的最后调用者还是window

console.log('---------------------------------------------------------------------------------------------------------------')



function A(exe) {
    this.exe = exe;
    this.exe();  // 打印的A
    exe();    // 打印的window
}

new A(function () { console.log(this); })


