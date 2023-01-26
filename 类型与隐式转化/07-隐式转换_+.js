/*
1.1 左右两边都是基本类型
这里还需要分为两种情况：

如果存在任意一方是字符串的话，那么不是字符串的一方(x)调用String(x)来转为字符串，再进行字符串的拼接。

如果左右两边都不是字符串的话，那么左右两边（x,y）调用Number(x)+Number(y)转化为数字，再进行数字的加法。（Number(undefined)的值是NaN）


      注意：      1.bigint类型只能与string类型或者bigint类型进行+运算，否则会报错

                  2.symbol类型不能与七种任意基本类型进行+运算，否则会报错
*/ 


/*
1.2 存在任意一边是对象
如果存在任意一边是对象的话，那么会先调用对象的valueOf函数，如果valueOf函数返回的值是基本类型，那么按照基本类型来进行比较
如果valueOf返回的是对象，那么再次调用toString函数，如果toString函数返回的值是基本类型，那么按照基本类型来进行比较，
如果还不是基本类型，那么报错（不能转化为原始值-Cannot convert object to primitive value）。
*/

let obj ={
    name:'yfm',

    valueOf(){
       return 4
    }
    
}



let obj2 ={
    name:'wql',

    valueOf(){
       return {a:1}
    },
    
    toString(){
         return  5
    }
}


console.log(obj+4)  // 8

console.log(obj2+5)  // 10