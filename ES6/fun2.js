function a (a,nums) {
    // this.fun()
    // a {}

    this.a = a
    this.nums = nums
    this.obj = {
        name:"yfm",
        age:18,
        club:"arsnal"
    }
 
    this.fun()

    // 打印结果
    // a {
    //     a: 4,
    //     nums: [ 1, 2, 3 ],
    //     obj: { name: 'yfm', age: 18, club: 'arsnal' }
    //   }

    this.fun2() // 20
}

a.prototype.fun = function() {
    console.log(this)
}

a.prototype.fun2 = function() {
    this.obj.age=20
    console.log(this.obj.age)
}

let aa = new a(4,[1,2,3])

// a.bb = function(){
//     console.log("??")
// }

// console.log(a)