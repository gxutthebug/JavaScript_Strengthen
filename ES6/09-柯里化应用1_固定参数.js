// ①固定参数,实现类似bind()那种效果

/*
已知一个 ajax 函数，它有 3 个参数 url、data、callback   */
    function ajax(url, data, callback) {
          // ............
           console.log(url, data, callback)
        }


/*
不用柯里化是怎样减少传参的呢？通常是以下这样，写死参数位置的方式来减少传参：
            function ajaxTest1(data, callback) {
                  ajax('http://www.test.com/test1', data, callback);
             }
*/

// 使用柯里化解决
  
  function CurryingAjax (ajax,...arg) {  // 传入需要裁剪的函数对象 和 需要固定的参数

        return  function AfterReduceArg_Ajax (...arg2) {
            return ajax.apply(this,arg.concat(arg2)) //ajax arg因为闭包被保存了下来
        }
    
  }


 let AfterReduceArg_Ajax =  CurryingAjax(ajax,'yfm')

 AfterReduceArg_Ajax('arsenal',22)  // yfm arsenal 22

 // AfterReduceArg_Ajax是柯里化函数CurryingAjax返回的,参数裁剪版的ajax ; 我们往AfterReduceArg_Ajax()传入剩余参数。
 // AfterReduceArg_Ajax函数内部帮我们真正调用真正的ajax

 /*注意:  CurryingAjax()只能固定一次参数,想要反复多次固定可以写成递归return的形式,每一次递归调用都把arg2 拼接到前面的arg上
 */

// 但这样无限递归return,到什么时候停止开始出结果(真正调用ajax)呢,你要给它一个递归的临界值
/* 
function CurryingAjax2 (ajax,...arg) {  

    return  function AfterReduceArg_Ajax2 (...arg2) {
        arg.concat(arg2)
        return AfterReduceArg_Ajax2 
    }

}
*/
function CurryingAjax2 (ajax,...arg) {  
    /*注意:这里不能直接写成   return  function AfterReduceArg_Ajax2(...arg2){
                                return AfterReduceArg_Ajax2   return后边不能定义变量/函数;所以你层的那个AfterReduceArg_Ajax2 无效
                                }
                                           */
    // 你想递归return自己 , 就要先定义再return
   let AfterReduceArg_Ajax2 = function (...arg2) {
         if(arg.length >= 3){  //BUG !!!!!!! 没有这种写法！
            ajax.apply(this,arg)
            console.log('?')
         }
         else{
            arg = arg.concat(arg2)  // 注意！！！，concat不会改变原函数一定要用变量接收
            //console.log(arg)
            console.log(arg.length)
            return AfterReduceArg_Ajax2 
         }
    }

  return AfterReduceArg_Ajax2
}


CurryingAjax2(ajax,'yfm')('arsenal',21) //[ 'yfm', 'arsenal', 21 ]
