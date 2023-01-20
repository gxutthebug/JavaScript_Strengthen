/*JS在任何用得到bool值的地方都会自动的将值强转为bool变量
① if(x)
② let a = x ? 1 : 2 中的x位置
③  !x  x这个值会被隐式强转,所以!x一定代表一个bool变量
④  arr.filter(function () {
     return x
})
.......................
*/