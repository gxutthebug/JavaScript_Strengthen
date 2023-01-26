// foreach 与map的区别是,map会返回执行过回调函数后的新数组,foreach不会
let arr =[1,2,3]


arr.forEach((item,index)=>{
    console.log(this,item,index) // 这里的this打印结果是window,说明forEach内部调用回调函数时没有用call改变this指向
})

let newarr = arr.map( (item,index) =>{       
    console.log("这是map回调函数里面的this:")
    console.log(this)
 //   console.log(arguments[0]) // undefind , 箭头函数没有自己的arguments
        return item*item
})

console.log(newarr)


console.log("----------------------------------- 手写foreach  map----------------------------------------------------")

// 思路我们在内部遍历调用callback()时统一传了三个参数,外部用户可以只选择用1个 或2个形参接收前两个
// 如果不想一个个形参地写的话,也可以直接用rest参数接收(箭头函数没有自己的arguments)

Array.prototype.myforeach = function (callback) {
    if(typeof callback !=='function') {
        throw new Error("must be function")
    }

      for(let i = 0 ; i < this.length ; i++) {
            callback(this[i],i,this)
      }

}


// Array.prototype.mymap = function (callback) {
     
//     let newarr = []

//     if(typeof callback !=='function') {
//         throw new Error("must be function")
//     }

//     for(let i = 0 ; i < this.length ; i++) {
//         newarr.push(callback(this[i],i,this))
//     }
    
//     return newarr
// }



arr.myforeach((item,index)=>{
    console.log("这是我的foreach")
    console.log(this,item,index) 
})


let arr2 = arr.mymap((item,index)=>{
    console.log("这是我的map")
    console.log(this,item,index) 
    return item*item
})


console.log(arr2) // 1 4 9