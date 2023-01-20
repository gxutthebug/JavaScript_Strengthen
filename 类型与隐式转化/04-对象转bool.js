/*对象转bool没啥特别的,反正除了一开始那几种情况其余全是true,对象转bool自然也是ture*/

let arr = []
let obj= {
    a:1
}
console.log(Boolean(arr)) // true
console.log(Boolean(obj))  // true