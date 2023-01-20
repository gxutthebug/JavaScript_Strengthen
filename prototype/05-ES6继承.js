class Person {
      
    constructor(name,age) {  // 相当于原来父类里的构造函数内部属性
        this.name = name
        this.age =age
        this.height =175
        this.testarr = ['a','b','c']
    }
    
     arsenal = 4444 
     //这种非函数属性不会被挂到原型上,只是相当于在 constructor内写了this.arsenal=4444(属于内部属性)
    
    sayHello() {     // constructor外的方法属性会被挂到原型链上
        console.log('我会说话')
    }
}


class Student extends Person {
      constructor(name , age ,className) {
        super(name,age) // 用super调用父类构造器构造自己 相当于前面的构造函数继承
        this.className = className
      }

      sayHello() {     
        super.sayHello()
        console.log('我是儿子我会说话')
    }
    // 事实证明JS也能实现方法的重写,本质就是当子类和父类有相同的属性时优先访问子类的
    // 要想在子类访问父类中相同的属性方法,必须显示的加上super关键字,否则默认访问子类的,这里跟JAVA一样
}


let stu1 = new Student('yfm' , 22 , 202)
let stu2 = new Student('wql' , 18 , 201)


stu1.sayHello()
stu2.sayHello()

stu1.testarr.push('d')
console.log(stu1.testarr)
console.log(stu2.testarr)

console.log(stu1.__proto__.testarr) // undefind 说明原型链上没有

console.log(stu1.__proto__.__proto__.sayHello)  //成功打印  说明在原型链上

/* console.log(stu1.arsenal)  //4444 
 console.log(stu1.__proto__.__proto__.arsenal) // undefind 说明原型链上没有 */



 // 打印结果给寄生组合继承是一样的,说明ES6的这种类继承语法是寄生组合的语法糖

