function Person (name,age) {
    this.name =name
    this.age =age
    this.height =175
    this.testarr = ['a','b','c']
}
Person.prototype.sayHello = function () {  console.log('会说话') }

function Student (name , age , className) {
   Person.call(this,name,age)  // 这行是构造函数继承,借用了父级构造函数内的属性构造到自己的实例对象上(这部分会覆盖子级原型上的相同属性)
   this.className = className
}

Student.prototype = new Person()// 这两行就是原型链继承,但是由于有 Person.call(this,name,age)的存在,我们其实只需要继承Person.prototype内的东西
 // 然而实际是我们new 了Person的内部属性也赋给了Student.prototype,这部分显然是多余的,Person的内部属性已经在上面的构造函数继承中继承给了Student的实例对象
 // 也就是说Person的内部属性也赋给了Student.prototype没有意义,因为会被Student的实例对象上的相同属性覆盖
Student.prototype.constructor = Student


let stu1 = new Student('yfm',22,202)
let stu2 = new Student('wql',18,201)

stu1.sayHello()
stu2.sayHello()

stu1.testarr.push('d')
console.log(stu1.testarr)
console.log(stu2.testarr)

console.log(stu1.__proto__.testarr) // a b c 

/*
这种组合继承的缺点：
Person构造函数执行了两次，第一次是改变Student的原型时，第二次是通过call方法调用Person时，多了一次性能开销
其中第一次是改变Student的原型时执行Person构造函数完全是多余的(上面分析了)
有没有什么办法把继承父类的内部属性  和继承父类原型对象独立的分开继承呢(剔除那多余的部分)？

把原型链继承 换成 Obeject.create(的继承方式) =====>即下一种寄生组合继承方式
*/
