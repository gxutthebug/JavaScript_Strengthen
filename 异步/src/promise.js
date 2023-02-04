// promise是怎么解决回调地狱的呢:
/*  一个Promise对象包装着一个异步任务,在某时刻 return 一个Promise对象就相当于 执行了该对象内包装的那个异步任务
但是与传统异步函数不同的是,promise帮你执行异步任务后并没有立即调用回调函数,而是通过一种状态标记的方式来表明回调任务的成功或失败
promise.then()方法可以捕获调用它的Promise对象的状态,帮这个Promise对象内的异步任务执行回调逻辑 */

/*
实现链式调用还有一个关键点是,promise.then()会返回一个全新的Promise对象,后面可以接着.then().........,实现了回调嵌套的扁平化
这相当于把每一个异步任务的的回调函数 通过 promise.then()提公因式写到外面了.....
*/
function ajax (url) {
    return new Promise (function(resolve,reject){
       var xhr = new XMLHttpRequest()
       xhr.open('GET',url)
       xhr.responseType = 'json'
       xhr.onload = function () {
           if (this.status ===200) {
            resolve(this.response)
           }else {
            reject(new Error(this.statusText))
           }
       }
       xhr.send()
    })
}


/*Promise对象的then方法会返回一个全新的Promise对象：
后面的then方法就是在为上一个then返回的Promise注册回调
前面then方法中回调函数的返回值会作为后面then方法回调的参数如果回调中返回的是Promise，那后面then方法的回调会等待它的结*/ 


ajax('xxxxxxx')
 .then(function successful (value){
    console.log("成功",value)
    // 我只需要在执行完异步任务成功的回调后再返回一个promise对象,就能实现异步任务的传递调用
    return ajax('xxxxxxx')
 } ,  function onreject (value){
    console.log("失败",value)
 }) .then()

 console.log("---------------------------------------------------------------------------------------------------------")

 // then的异常处理可以单独写一个接在后面,因为不管你多长的链式调用
 // 只要有一个异常就会终止执行,异常回调只会被执行一次,无论在哪一步上出异常
 // 在链式调用中,任何一个异常都会被向后传递,直到被捕获
ajax('xxxxxxx')
.then(function successful (value){
   console.log("成功",value)
}).catch(function onreject (value){
    console.log("失败",value)
 })

 console.log("---------------------------------------------------------------------------------------------------------")
// 我们还可以利用Promise.all() , 传入一个promise对象数组使得多个异步任务并行执行(捆绑)
// 此时只有只有该异步数组内所有异步任务均成功, 该Promise才会被标记为resolve
// 比如有时我们需要同时成功拿到两个接口的数据,才能进下一步逻辑处理,就可以这样捆绑
 var allpromise = Promise.all([
    ajax("xxxxx1"),
    ajax("xxxxx1")
 ])

 allpromise.then(
    value => {
        console.log(value )  // 此时value也对对应的是一个数组
    }
 ).catch()


 
 console.log("---------------------------------------------------------------------------------------------------------")


 var racepromise = Promise.race([   // 这个是谁快回调谁
    ajax("xxxxx1"),
    ajax("xxxxx1")
 ])

 allpromise.then(
    value => {
        console.log(value ) 
    }
 ).catch()


  console.log("---------------------------------------------------------------------------------------------------------")

  // resolve()是promise的一个静态方法,可以快速的把一个值转化为Promise对象,并且执行状态为resolve
  // 这个在后面的微任务测试中会经常用到
  Promise.resolve("yfm").
  then( value => {
    console.log(value) // yfm
  })


  var apromise = ajax("abcd")
  var bpromise = Promise.resolve(apromise)
  console.log(apromise===bpromise) // true