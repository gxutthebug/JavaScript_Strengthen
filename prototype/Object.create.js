let obj = {
    name:'yfm'
}

// 跟用{ }的作用一样
// Object.create()的作用就是创建一个对象,但是跟{ }创建不同的是
// Object.create()创建对象时可以传入参数,用来指定被创建对象的原型对象

// 创建了一个以obj为原型对象的对象
let res1 = Object.create(obj)
console.log(res1)


// 创建了一个没有原型对象的对象
let res2 = Object.create(null)
console.log(res2)