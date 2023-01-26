// 函数缓存,用于函数组合(管道函数)



const multi10 = function(x) { return x * 10; }
const add100 = function(x) { return x + 100; }
const compose = function(f,g) { 
    return function(x) { 
        return f(g(x))
    }
}

console.log(compose(add100, multi10)(7))


console.log('---------------------------------------------------------------------------------------------------------------------')

// 多函数组合可以用reduce

const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x


const pipe = (...functions) =>{ // pipe返回的是一个组合后的管道函数
     return (initialValue) =>{
      return functions.reduce((acc, fn) =>{
        return fn(acc)
       },initialValue)
     }
}


// 我们对闭包的解释：“闭包是一个函数内有另外一个函数，内部的函数可以访问外部函数的变量，这样的语法结构是闭包。
//”与我们对柯里化的解释“把接受多个参数的函数变换成接受一个单一参数（或部分）的函数，并且返回接受余下的参数和返回结果的新函数的技术”，
//这两种说法几乎是“等效的”，只是从不同角度对 同一问题 作出的解释，就像 lambda 演算和图灵机对希尔伯特第十问题的解释一样。
