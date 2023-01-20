function Cache (islocal = true)  {

    this.storage = islocal ?  localStorage : sessionStorage

    function setItem(key , value) {
       if(value){
        this.storage.setItem(key , JSON.stringify(value))
       }
   }

   function getItem (key) {
       let value = this.storage.getItem(key)
       if(value) {
        return JSON.parse(value)
       }
   }

   function removeItem (key) {
     this.storage.removeItem(key)
   }

   function clear () {
    this.storage.clear()
   }

   function length () {
    return this.storage.length
   }
              
   return {
    setItem,
    getItem,
    removeItem,
    clear,
    length
   }
}


let localCache =  Cache()

let sessionCache =  Cache(false)