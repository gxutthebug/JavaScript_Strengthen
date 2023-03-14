function Person (name,age) {
     this.name =name
     this.age =age
     this.height =175
     this.testarr = ['a','b','c']
}
Person.prototype.sayHello = function () {  console.log('会说话') }

function Student (name , age , className) {
    this.name = name
    this.age = age
    this.className = className
}

Student.prototype = new Person('父亲',88)  // 这两行就是原型链继承
Student.prototype.constructor = Student


let stu1 = new Student('yfm',22,202)
let stu2 = new Student('wql',18,201)

stu1.sayHello()  // 会说话
stu2.sayHello()  // 会说话

// stu1.__proto__.height =189 这相当于直接改了prototype所以下面两个都会变成189

stu1.height=189

console.log(stu1.height) // 189
console.log(stu2.height) // 175 
console.log(stu1.__proto__ === stu2.__proto__) //true
console.log(stu1.__proto__)
console.log(stu1)  // (当子级的属性跟父级同名且都给值时,优先获取子级)


stu1.testarr.push('d') // stu1.testarr.push是查找访问再修改,不是直接赋值,所以找到了原型对象上那个testarr
// stu1.testarr = ['a']

console.log(stu1.testarr) // [ 'a', 'b', 'c', 'd' ]
console.log(stu2.testarr)  // [ 'a', 'b', 'c', 'd' ]
/*原型链继承有两个缺点：
①子级不能真正继承父级的属性(无法继承构造属性),只能把要继承父级的内部属性写固定,或者全部挂到父类原型对象上;
说白了就是无法像JAVA一样在new 子级对象的时候传入参数去用super()调用父类构造器,所以原型链继承我们一般用来继承父级的方法(方法是定死的 不需要传参构造)

②由于把父类的内部属性值全部笼统的挂到了父级的原型对象上(本质上只是继承了一个对象而不是继承一个类),导致子级的任何一个实例修改原型上的属性都会影响其他实例。
本来应该只在共享的原型对象上挂载不会被修改的方法函数,而父类的内部属性应该继承给子类让子类自己构造到本类的实例对象上的.........
(上述两个缺单都能通过构造函数继承的方式解决)


易错注意：stu1.height=189,这个操作并没有修改原型上的那个height属性,这个操作的意思是给该实例对象添加一个height=189!!,父级的height还是175
(当子级的属性跟父级同名且都给值时,优先获取子级)。同理stu1.testarr = ['a']操作也是这样
只有 stu1.__proto__.height=xxx 或者 stu1.testarr.push('d')才是真正修改到了原型对象上的东西



说白了原型链继承只是笼统的把所有父级的 内部属性值 和 原型对象属性值 挂载到子级的原型对象上，本质是在继承一个父级对象而不是一个父类
 */
