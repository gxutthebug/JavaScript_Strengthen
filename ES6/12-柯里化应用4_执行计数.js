/*再举一个例子：
现在要求一个函数在达到 n 次之前，每次都正常执行，第 n 次不执行。
也是非常常见的业务场景！JavaScript 实现：*/
function before(n, func) {
  let result, count = n;
  return function(...args) {
    count = count - 1
    if (count > 0) result = func.apply(this, args)
    if (count <= 1) func = undefined
    return result
  }
}

const fn= before(3,(x)=>console.log(x))
fn(1) // 1
fn(2) // 2
fn(3) // 不执行

/*反过来：函数只有到 n 次的时候才执行，n 之前的都不执行。*/



function after(n, func) {
  let count = n || 0
  return function(...args) {
    count = count - 1
    if (count < 1) return func.apply(this, args)
  }
}

const fn2= after(3,(x)=>console.log(x))
fn2(1) // 不执行
fn2(2) // 不执行
fn2(3) // 3 

