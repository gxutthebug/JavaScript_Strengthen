

Array.prototype.myfliter = function (callback) {
    let newarr = []
    let len = this.length
    for (let i =0; i<len ; i++ ){
       if(callback(this[i],i,this)) {
      
            newarr.push(this[i])
        
        
       }
    } 

    return newarr
}

let arr = [{name:'yfm',age:18} , {name:'yfm2',age:18},{name:'yfm3',age:22}]



let newarr =arr.myfliter( item =>{
    return item.age===18
})

console.log(newarr)



let obj = {
    a:'ok',
    b:3
}


let obj2 = Object.create(obj)

console.log('?')
console.log(obj2)
arr.push(obj2)
console.log(arr)