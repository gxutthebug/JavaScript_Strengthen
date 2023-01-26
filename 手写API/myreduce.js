

 let a=  [1,2,3,4].reduce((pre,item) =>{
         console.log(this) // window ; 说明内部不用call
         return pre = pre + item
},0)

console.log(a)


Array.prototype.myreduce = function (callback,init) {
        
//       if(init !== undefined){  // 这里不能用  if(init) 因为当初始值为0时,会执行时else
//         for(let i = 0 ; i<this.length ; i++){     
//            init = callback(init,this[i],i,this)  
//         }
//        }else{
//         for(let i = 1 ; i<this.length ; i++){     
//             if(i===1){
//                 init = this[0]
//             }
//             init = callback(init,this[i],i,this)
//        }
// } 

      var i =0      
      var len =this.length
      var pre = init  // 相较于上面的代码,把累加器初始值,跟累加器本身视作两个独立的变量更为简洁明了
      if(init===undefined){
        pre = this[0]
        i =1
      }
    for (i;i<len;i++) {
      pre = callback(pre,this[i],i,this)  // pre是外部变量,只需要每次把计算的值覆盖上一次的就能实现累积效果
      //  这种不同覆盖同一个变量实现 “累积” / “得到最后值的思想”  随处可见, 累积并不需要递归实现
    }

       return pre  // init 
}



let b=  [1,2,3,4].myreduce((pre,item) =>{
    return pre = pre +item
},0)


console.log(b)