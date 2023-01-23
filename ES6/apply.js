// apply跟call不同的是,apply的参数是以整个数组形式传入的,而不像call那样需要一个个传
// apply最大的作用就是使得多参数函数可以 "集中式传参",因为function().apply(this,arr)虽然是整个数组的传进去,但其内部还是会将arr一个个解开后在传入function()
// 这就使得 Math.max()   Math.min()  push()这种原本只能一个个参数往里传的函数可以实现"集中式传参"


 // 重点！！！！！！！！！！！！！！！！
// 值得注意的是用apply()调用push()时要把push()的this指向改成调用数组,这仅仅因为push()内部需要用到这个指向调用数组的this;而Math.max()不需要,因为其内部不用this
// 由此可见apply()的使用出发点是 “集中式传参”,使用apply()改this仅仅是因为保证被调用函数的正常执行
// 而对于call()而言,使用的出发点就是改变被调用函数的this指向(多使用在回调函数的执行调用 和 调用父构造函数上)


// ①找出数组中最大/小的数字
const numbers = [5, 6, 2, 3, 7];

// 使用 Math.min/Math.max 以及 apply 函数时的代码
let max = Math.max.apply(null, numbers); // 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..)
let min = Math.min.apply(null, numbers);



/*注意：如果按上面方式调用 apply，有超出 JavaScript 引擎参数长度上限的风险。一个方法传入过多参数（比如一万个）时的后果在不同 JavaScript 引擎中表现不同。
（JavaScriptCore 引擎中有被硬编码的参数个数上限：65536）。
这是因为此限制（实际上也是任何用到超大栈空间的行为的自然表现）是不明确的。一些引擎会抛出异常，
更糟糕的是其他引擎会直接限制传入到方法的参数个数，导致参数丢失。比如：假设某个引擎的方法参数上限为 4（实际上限当然要高得多），这种情况下，上面的代码执行后，
真正被传递到 apply的参数为 5, 6, 2, 3 ，而不是完整的数组。如果你的参数数组可能非常大，那么推荐使用下面这种混合策略：将数组切块后循环传入目标方法：*/


function minOfArray(arr) {   // 数组分段
    let min = Infinity;
    let QUANTUM = 32768;  // 取一个不太可以超出极限的参数个数,这个数就是段长
  
    for (let i = 0, len = arr.length; i < len; i += QUANTUM) {
      const submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len))); // 这里不能写slice(i,i+QUANTUM)
      // 因为数组分割到最后一段时,很有可能是不足段长的,此时你段尾再取i+QUANTUM就数组越界了
      // submin得到的就是每一段中的最小值

      min = Math.min(submin, min);    // 把每一次的最小值跟上一次的最小值比较,最后得到整段数组的最小值
    }
  
    return min;
  }
  
  let min2 = minOfArray([5, 6, 2, 3, 7]);
console.log("------------------------------------------------------------------------------------------------------------------------------")


// ②用push()连接数组
// 在VUE中为了数据动态响应,你往往需要用push()连接数组而不能用contat()
// 但是push()不能像contat()一样整个数组的进行传参,如果要实现数组拼接就要借助循环一个个push()
// 巧妙利用apply集中传参
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]


console.log("------------------------------------------------------------------------------------------------------------------------------")

// ③制作一个对象构造器,弯来绕去不如一个foreach直接................

Function.prototype.construct = function (aArgs) {
    let oNew = Object.create(this.prototype);
    console.log(this) // [Function: MyConstructor]
    console.log(this.prototype) // {}
    this.apply(oNew, aArgs);  // MyConstructor.construct(myArray),this是MyConstructor() ; 这里就是在construct()内调用MyConstructor()
    // 调用时利用apply给MyConstructor()集中传参,构建一个以aArgs内元素为键值的对象,该对象的原型是MyConstructor().prototype
    return oNew; 
  };


  function MyConstructor() {
    for (let nProp = 0; nProp < arguments.length; nProp++) {
      this['property' + nProp] = arguments[nProp];
    }
  }
  
  let myArray = [4, 'Hello world!', false];
  let myInstance = MyConstructor.construct(myArray);


  console.log(myInstance) 

  /*MyConstructor {
  property0: 4,
  property1: 'Hello world!',
  property2: false
}*/