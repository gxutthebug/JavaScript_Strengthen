// 普通数组交集
const arr1 = [1, 2, 3, 4, 5 , 8 ,9],arr2 = [5, 6, 7, 8, 9];

const intersection = arr1.filter(function (val) { return arr2.indexOf(val) > -1 })

console.log(intersection) //[5, 8, 9]

// 数组对象
// 数组对象目前仅针对value值为简单的Number，String，Boolan数据类型 文中JSON.stringif比较对象是简写方法，完整的对象比较请看tips-对象是否相等

const arr3 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
const arr4 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
const result = arr4.filter(function (v) {
  return arr3.some(n => JSON.stringify(n) === JSON.stringify(v)) // 这里为什么不能像上面一样用indexOf呢
})
console.log(result); 
// [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]

