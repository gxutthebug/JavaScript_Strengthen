// arguments 是一个类数组对象，是传给一个函数的参数列表
// 当实参很多时,就不方便使用形参一个个接收

// arguments转数组(展开运算符可以对类数组使用)
function fun2() {
    let newArr = [...arguments];  //  let newArr = Array.from(arguments);也可以
    //     let newArr = Array.prototype.slice.call(arguments);   //用的数组调用slice()改变this,变成arguments.slice() ; 也可以
    newArr.push(1)
    console.log(newArr)
   }
   fun2("a", 0, { name: "cao" });  // ['a',0,{ foo: "Hello, arguments" },1]

   
// 可修改, 在正常的模式下，arguments对象是允许在运行时进行修改的。

function f4() {
    arguments[0] = 'sex';
    console.log(arguments[0]); // sex
}
f4('name', 'age');

console.log("-------------------------------------------------------高级应用------------------------------------------------------------------")



// 判断形参与实参个数
function fn (a, b, c) {
    if (fn.length != arguments.length) {
        console.log('形参和实参的个数不一致');
    } else{
        console.log('形参和实参的个数一致');
    }
}
fn(1, 2);


// 利用arguments.callee()来实现递归调用(callee属性，返回正被执行的Function对象。)
let sum = function (n) {
    if (n == 1) {
        return 1;
    } else {
        return n + arguments.callee(n - 1); // 5 4 3 2 1
    }
}


// 模拟方法重载

function doAdd() {
    if(arguments.length == 1) {
        console.log(arguments[0] + 5);
    } else if(arguments.length == 2) {
        console.log(arguments[0] + arguments[1]);
    }
}
doAdd(10);  // 15
doAdd(10, 20); // 30



console.log("-------------------------------------------------------REST参数------------------------------------------------------------------")

// 箭头函数没有自己的arguments对象(跟this一样使用的是最近一层非箭头函数的)，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
// rest本身就是一个数组不需要像arguments一样转化,储存着括号内“余下的参数”

let func = (...rest) => {
    console.log(rest)
  }
func(1, 2, 3) // [1,2,3]



/*注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
// 报错
function f(a, ...b, c) {
  // ...
}*/