// 只传入回调函数;此时默认累加器的初始值为数组索引0上的值,reduce从数组索引1开始遍历执行回调

let a= [1,2,3,4].reduce(function(auto,value,index,arr){
    return auto + value
})
console.log(a) // 10

// 除了传入回调函数,还传入第二个参数,即累加器auto的初始值;此时reduce从 数组的索引0开始遍历执行回调

let b= [1,2,3,4].reduce(function(auto,value,index,arr){
    return auto + value
},10)
console.log(b) // 20

console.log('------------------------------------------------------------------------------------------')

// reduce()的九大应用场景
// reduce()的应用一般分为两种: ①求和统计  ②前后拼接



// 1.普通数组求和

let sum1 = [ 0, 1, 2, 3 ].reduce(( previousValue, currentValue ) => previousValue + currentValue,0)
console.log(sum1)




// 2.对象数组求和

let sum2 = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , 0
)
console.log(sum2) // logs 6



//3. 数组降维
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( previousValue, currentValue ) => previousValue.concat(currentValue),
    []
  )
  console.log(flattened)

  

 // 4. 统计元素个数
 let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})

console.log(countedNames)



// 5. 对象属性分类
//  本质是一种拼接,初始空对象内容的拼接

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }  
      acc[key].push(obj)
/*if (!acc[key]) {
        acc[key] = []
        acc[key].push(obj)
      }  
      else{
        acc[key].push(obj)
}*/  // 相当于if else内都要 acc[key].push(obj)
      return acc
    }, {})
  }
  
  let groupedPeople = groupBy(people, 'age')

  console.log(groupedPeople)
  
  // {
  //   '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
  //   '21': [ { name: 'Alice', age: 21 } ]
  // }




// 6. 把对象组数内的内部数组全部提取出来拼接成一个,并包含一个给定的初始值

  let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]
  
  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(previousValue, currentValue) {
    return [...previousValue, ...currentValue.books]
  }, ['Alphabet'])
  

  console.log(allbooks)
  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]



  //  7.数组去重

  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

  let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue)
    }
    return previousValue
  }, [])
  
  console.log(myArrayWithNoDuplicates)


