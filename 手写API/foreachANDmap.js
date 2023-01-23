
let arr =[1,2,3]


arr.forEach((item,index)=>{
    console.log(this,item,index) // 这里的this打印结果是window,说明forEach内部调用回调函数时没有用call改变this指向
})