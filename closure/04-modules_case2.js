/*利用闭包实现JS模块的另一种方式: 引入全局模块,因为立即执行函数是没办法return东西给变量接收的,所以直接在立即执行函数内直接把要暴露的方法挂到全局对象window上*/
/*注意：在node环境中没有window这个对象,用node跑这个代码会报错;只能在html文件内引入用浏览器编译(script标签)*/
(function (window) {  /*其实不传window在正常情况下也能用;但是打包代码时会有问题,传入window在代码打包时更优雅*/

    var msg = 50

    function add (){
        msg++
        console.log(msg)
    }

    function cut (){
        msg--
        console.log(msg)
    }

   window.myModule2 = {
    add,
    cut
}

} ) (window)

myModule2.add()
myModule2.cut()