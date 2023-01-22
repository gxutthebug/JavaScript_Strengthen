var obj={
    a:'1'
}


 function getA() {
     console.log(this.obj.a);
 }

 var pseudoWindow = {
     obj:{
         a:'2'
     },
     getA: getA,
     getA2: function (callback) {
         callback(); // 直接调用回调,回调内的this是window的
         getA();    // 直接调用,还是window
         pseudoWindow.getA() 
         this.getA() 
         this.func = callback;
         this.func();
     }
 }

 pseudoWindow.getA2(getA)
 // 1
 // 1
 // 2
 // 2 
 // 2
 

