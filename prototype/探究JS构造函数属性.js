// 像Obeject.create()这种只属于构造函数的方法究竟是怎么挂载上去的呢？

function Person (name,age) {
    my_name = 'yfm' // 这种写法毫无意义不加this修饰相当于什么也没写
    this.name =name
    this.age =age
    this.height =175
    this.testarr = ['a','b','c']
}
Person.my_try = "AAAAA"
Person.prototype.sayHello = function () {  console.log('会说话') }

let aa = new Person('父亲',88)
// console.log(aa.keys({
//     a:1,
//     b:2,
// }))  // 直接通过实例对象访问是访问不到构造函数属性的

// 怎么定义构造函数属性？
console.log(Person.my_name) // undefined; 直接写在构造函数里不加this不行
console.log(Person.height)  //undefined ; 直接写在构造函数里加this不行
console.log(aa)  // 打印出来没有my_try属性
console.dir(Person) // 打印构造函数却可以看到my_try属性
console.log(Person.my_try ) // AAAAA


/*
   总结：
    ①定义改造函数属性属性只能先声明好构造函数,然后在外部通过  构造函数名.属性/方法名 的形式添加
    ②构造函数属性不能通过对象实例访问 , 能且只能通过 构造函数名.属性/方法名 直接访问
    ③JS的构造函数 () { } 本质就是一个原原本本的constructor()构造器;所以构造函数 () {} 内定义的所有属性必须加this.修饰

*/