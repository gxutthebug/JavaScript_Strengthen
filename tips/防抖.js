// 事件触发 ----> 开启一个定时器 ------>事件再次触发则清除上一个重新开一个定时器 --------定时结束调用处理函数
 
function debounce(fn, delay=200) {
    // delay = delay || 200;  // 给默认值的另一种写法
    let timer = null;
    return function(...arg) {
        // 每次操作时，清除上次的定时器
        clearTimeout(timer);
        timer = null;
        // 定义新的定时器，一段时间后进行操作
        timer = setTimeout(function() {
            fn.apply(this, arg);
        }, delay);
    }
};

var count = 0;


// window.onscroll = function () {}  不防抖时window.onscroll直接赋值处理函数

window.onscroll = debounce(function(e) {
    console.log(e.type, ++count); // scroll
}, 500);
