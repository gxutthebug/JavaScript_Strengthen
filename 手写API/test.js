// let obj = {
//     name:'yfm',
//     age:15
// }


// function fn (theobj) {
//     // theobj.age = 18
//     console.log(obj ===theobj )
//     let arr =[]
//     arr.push(theobj)

//     return theobj
// }



// console.log(obj === fn(obj)) 

var obj ={
    a : 'javascript',
    b : {
        x : 'world',
        y : 111
    },
    c : [1,2,3]
} 
var objCopy = Object.create(obj);
objCopy.b.x = 'worldCopy'
console.log(obj);   
console.log(objCopy.__proto__);  // 浅拷贝到原型对象上了



// 测试一下实参能不能形成闭包
function a (n){
     
    let  b = function (){
        console.log(n+1)
    }

    return b
}

let fn = a(4)

fn() // 4