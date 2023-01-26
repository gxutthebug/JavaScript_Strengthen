// bind()其实就是利用科里化固定参数
// 适用于部分参数高度一致的多次调用 ; 或者回调函数做参数时要传入参数的情况


Function.prototype.mybind = function (thisarg,...args) {
    if (typeof this !== 'function') {
        return 
    }

    let self = this //转存一下避免混乱
   // let args = Array.prototype.slice.call(arguments,1) 原始方法,剔除第一个this参数的参数数组
   
    return function (...args2) {
        return this.apply(thisarg,args.concat(args2))
    }
    
}


let obj = {
    age :18
}

function a (a,b) {
    console.log(this)
    console.log(a)
    console.log(b)
}


let b = a.bind(obj,4)

b(5)
/*{ age: 18 }
4
5
*/