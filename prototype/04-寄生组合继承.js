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

Student.prototype = Object.create(Person.prototype) // 创建一个以Person.prototype为原型对象的空对象,即单独继承了Person.prototype
// 而没有去多余的创建Person构造函数的内部属性 放入Student.prototype
Student.prototype.constructor = Student


let stu1 = new Student('yfm',22,202)
let stu2 = new Student('wql',18,201)

stu1.sayHello()
stu2.sayHello()

stu1.testarr.push('d')
console.log(stu1.testarr)
console.log(stu2.testarr)

console.log(stu1.__proto__.testarr)   // 此时显示undefined了,说明确实没有将父级的内部属性挂到子级的原型对象上

