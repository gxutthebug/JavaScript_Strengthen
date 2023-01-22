// ①使用 call 方法调用父构造函数(继承那里)------略

// ②使用 call 方法调用匿名函数
// 匿名函数只能立即调用,最关键的是不能决定this指向,call()可以解决这个问题,只使用()只能立即执行并不指定this
var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }


  //③ “方法借用”:使用 call 方法调用函数并且指定上下文的 'this'
  function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
  }
  
  var obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
  };
  
  greet.call(obj);  // cats typically sleep between 12 and 16 hours


  // ④用来调用函数...........这个有点鸡肋
// 我们调用了 display 方法，但并没有传递它的第一个参数。如果没有传递第一个参数，this 的值将会被绑定为全局对象。
 var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen