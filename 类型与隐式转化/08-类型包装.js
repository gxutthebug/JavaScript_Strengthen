let s = "str";
console.log(s.slice(1))  // "tr"
// 我们明明只是定义了一个基本数据类型,为什么可以像使用对象一样 xxx.function()调用方法呢？
// Number 对象 跟 bool对象方法很少用这里就不举例啦; 本质一样的 都是基本类型的自动封装

/*如上代码，第二行中访问a时，是以读模式访问的。
在以读模式访问字符串值得任何时候，后台都会自动执行以下三步：

（1）根据字符串值创建一个 String 类型的实例
（2）调用实例上的特定方法
（3）销毁实例

即相当于执行了以下三行代码：*/

// 创建String实例
let s2 = new String("str");
// 调用特定方法
s2.slice(1)
// 销毁实例
s2 = null
//s2只是JS程序帮你自动创建 并自动销毁的;程序员是访问不到

/*
引用类型和原始值包装类型的区别
引用类型和原始值包装类型的区别主要在于对象的生命周期：
（1）通过new实例化引用类型后，得到的实例会在离开作用域时被销毁
（2）自动创建的原始值包装对象则只会存在于访问它的那行代码执行期间。（所以运行时并不能给原始值添加属性和方法）
*/


let a = Number(1);
a.test ='yfm'
console.log(typeof a);   // number
console.log(a.test)  // undefined


let b = new Number(1);
b.test ='yfm'
console.log(typeof b);   // object
console.log(b.test)  // 'yfm'