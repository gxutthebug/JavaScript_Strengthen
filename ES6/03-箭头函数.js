/*使用剪头函数也是JS中改变this指向的方式之一,箭头函数需要记着这句话：
“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头
函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。*/

// 前面我们提到,回调函数如果使用普通写法,其this很有可能指向window,我们可以改用箭头函数来明确回调函数的this指向
var name = "windowsName";

    var a = {
        name : "Cherry",

        func1: function () {
            console.log(this.name)     
        },

        func2: function () {
            setTimeout(  function () {
                this.func1()
            },100);
        }

    };

//  a.func2()     //  this.func1 is not a function ,这行会报错，
//  因为在不使用箭头函数的情况下，最后调用 setTimeout 的对象是 window，但是在 window 中并没有 func1 函数。
//   虽然是a调用的func2(),但是该回调的调用者却不是a,前面讲this指向时说过了


var name2 = "windowsName";

    var b = {
        name2 : "Cherry",

        func1: function () {
            console.log(this.name)     
        },

        func2: function () {
            setTimeout( () => {
                this.func1()
            },100);
        }

    };

    b.func2()     // Cherry
 //  箭头函数没this,他借用了本函数执行时最近一层非箭头函数的this指向,在这里是借用了func2()当时的this 即b

