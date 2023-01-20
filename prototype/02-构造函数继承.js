function Person (name , age) {
    this.name=name
    this.age = age
    this.height =175
    this.testarr = ['a','b','c']
}

Person.prototype.sayHello = function () {console.log('会说话')}
// 无法继承父级原型对象上的东西

function Student (name, age,className) {
    Person.call(this, name, age) // 在这里调用Person的构造函数但是却把Person构造函数内的this改成了指向了Student的实例对象; 其实就相当于吧Person内那两句属性赋值语句粘贴到了这里
                                 // 但是实际上这里执行了 Person构造函数,用别人的构造函数构造我自己的实例对象
                                 //  由于Person.call(this, name, age)构造的属性最终是挂载到具体子类的实例对象上的,自然不会存在实例共享原型对象的问题！！！！
    this.className =className
}

let stu1 =new Student('yfm',22,202)
// console.log(stu1)
// console.log(stu1.name)



/*
构造函数继承的缺点是：
①子类只能继承父类实例对象的属性和方法，无法继承父类原型上的属性和方法
②构造子级实例时会引起父级构造函数的执行,不太科学规范,即Person构造函数执行了两次，第一次是改变Student的原型时，第二次是通过call方法调用Person时，多了一次性能开销

其中①可以通过组合继承来优化,而②可以通过寄生组合继承优化
*/