// ②计算缓存

const calculateFn = (num)=>{
    const startTime = new Date()
    for(let i=0;i<num;i++){} // 大数计算
    const endTime = new Date()
    console.log(endTime - startTime)
    return "Calculate big numbers"
}

console.log(calculateFn(10_000_000_000))
console.log(calculateFn(10_000_000_000))



// const resNumsA = calculateFn(10_000_000_000)  
// const resNumsB = calculateFn(20_000_000_000)
// const resNumsC = calculateFn(30_000_000_000)


//有没有什么办法？只用函数，不增加多个全局常量，就实现多次调用，只计算一次？ ======> 柯里化

function  Curryingcalculate (fn) {
    const cacheObj = Object.create(null);    // 创建一个对象
  return function cachedFn (str) {                     // 返回一个柯里化后,带结果缓存的函数 (Vue的计算属性？)
    if ( !cacheObj [str] ) {     // 在对象里面查询，函数结果是否被计算过
        let result = fn(str);
        cacheObj [str] = result;   // 没有则要执行原函数，并把计算结果缓存起来
    }
    return cacheObj [str]      // 被缓存过，直接返回
  }
}


let cashedCalculate = Curryingcalculate(calculateFn) 

console.log(cashedCalculate(90_000_000_00))
console.log(cashedCalculate(90_000_000_00))

