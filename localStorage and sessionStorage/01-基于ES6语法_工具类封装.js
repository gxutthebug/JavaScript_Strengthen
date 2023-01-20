class Cache {
    constructor(isLocal = true) {
         this.storage = isLocal ?  localStorage : sessionStorage
    }

   setItem(key , value) {
       if(value){
        this.storage.setItem(key , JSON.stringify(value))
       }
   }

   getItem (key) {
       let value = this.storage.getItem(key)
       if(value) {
        return JSON.parse(value)
       }
   }

   removeItem (key) {
     this.storage.removeItem(key)
   }

   clear () {
    this.storage.clear()
   }

   length () {
    return this.storage.length
   }
}

let localCache = new Cache()

let sessionCache = new Cache(false)