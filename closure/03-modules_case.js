/*利用闭包实现JS模块的封装: JS模块就是有特定功能的JS文件,将所有的数据和功能封装在一个函数内 */
/*闭包封装模块的本质，有点像JAVA的私有变量，用提供的类方法来访问操作通过闭包暴露的类变量 */
function myModule() {
    var msg = 50

    function add (){
        msg++
        console.log(msg)
    }

    function cut (){
        msg--
        console.log(msg)
    }

    return {
        add,
        cut
    }
}

var module = myModule()
module.add()
module.cut()