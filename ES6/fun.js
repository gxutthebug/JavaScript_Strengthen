// arr = [1,2,3,4,5]


// let aa = arr=>{
//     arr.push(6)
// }

// aa(arr)

// console.log(arr) // [ 1, 2, 3, 4, 5, 6 ]

/*--------------------------------------------------------------------------------------------------------------------------*/

// arr = [1,2,3,4,5]


// let aa = arr=>{
//     arr = [4,4,4]
// }

// aa(arr)

// console.log(arr) // [1,2,3,4,5]

/*---------------------------------------------------------------------------------------------------------------------------*/

nums = [1,2,3,4,5,6]

let a = nums=>{
    let index = 2
     
    let b = index=>{
        nums[index] = 99
        console.log(nums.length) // 6 可以正常输出
    }

    b(index)
}

a(nums)

console.log(nums)  // [ 1, 2, 99, 4, 5, 6 ]



// let c = (index) => {
//     if(index>5){
//         return
//     }
//     console.log("啦啦啦啦啦")   // 输出了5次"啦啦啦啦啦"
//     index++
//     c(index)
// }

// c(1)


let c = (index) => {
    if(index<5){
        console.log("啦啦啦啦啦")
    }    
    index++
    c(index)   // 这样写会造成栈溢出,因为即使后续没有执行打印操作,方法也会一直递归下去
               // 因为没有出口
}

c(1)