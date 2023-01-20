/*我们重点关注一下Object类型转number的过程，对象在转number之前，会先转换为基础类型，再转换为number类型，这个过程称为ToPrimitive。
ToPrimitive过程先回检查对象是否存在valueOf方法，如果存在并且valueOf返回基本类型的值，则使用该值进行强制类型转换，
如果没有，则使用toString方法返回的值进行强制类型转换。
*/

var arr = [1, 2]
console.log(Number(arr))    // NaN
// 因为arr.toString()等于"1,2"，强制转换后为NaN

// 重写数组的toString()在试试,结果果然变了
arr.toString = function() { return '43' }
console.log(Number(arr))    // 43

// 重写数组的valueOf(),结果竟然也变了
arr.valueOf = function() { return '22' }
console.log(Number(arr))    // 22

// 让我们来看看全过程
var obj1 = {}
console.log(obj1.valueOf())
console.log(obj1.toString())
console.log(Number(obj1))   // NaN


var obj2 = {
    valueOf: function () {
        return '99' // valueOf返回基本类型的值,不再往下调用toString
    }
}
console.log(obj1.valueOf())
console.log(obj1.toString())
console.log(Number(obj2))    // 99




var obj3 = {
    valueOf: function () {
        return {}
    },
    toString: function () {
        return {}
    }
}

//console.log(Number(obj3))    // 如果你故意重写toSring,让toSring()返回的依然是Object类型的话就会报错