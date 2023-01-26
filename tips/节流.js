// 事件触发  ----> 操作执行 ----> 关闭阀门(期间无法再次触发) ---->一段时间后阀门打开 ----->操作可以再次触发




// 节流函数1:
function throttle(fn,delay){
      let valid = true //阀门默认打开
      return function (...arg) {
        if (valid) {
            setTimeout (() =>{
              fn.apply(this,arg)
              valid = true
            },delay)
          
            valid = false
        }  else {
            return false  // 此时阀门仍在关闭状态,不允许高频操作
        }
      }
}







// 函数节流2，频繁操作中间隔 delay 的时间才处理一次
function throttle2(fn, delay) {
    delay = delay || 200;
    let timer = null;
    // 每次滚动初始的标识
    let timestamp = 0;
    return function(...arg) {
        let now = Date.now();
        // 设置开始时间
        if (timestamp === 0) {
            timestamp = now;
        }
        clearTimeout(timer);
        timer = null;
        // 已经到了delay的一段时间，进行处理
        if (now - timestamp >= delay) {
            fn.apply(this, arg);
            timestamp = now;
        }
        // 添加定时器，确保最后一次的操作也能处理
        else {
            timer = setTimeout(function() {
                fn.apply(this, arg);
                // 恢复标识
                timestamp = 0;
            }, delay);
        }
    }
};



var count = 0;
window.onscroll = throttle(function(e) {
    console.log(e.type, ++count); // scroll
}, 500);
