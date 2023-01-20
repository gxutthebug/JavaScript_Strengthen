function Cache (isLocal = true) {
    this.storage = isLocal ?  localStorage : sessionStorage
}

Cache.prototype.setItem = function (key , value) {
    if(value){
     this.storage.setItem(key , JSON.stringify(value))
    }
}

Cache.prototype.getItem = function (key) {
    let value = this.storage.getItem(key)
    if(value) {
     return JSON.parse(value)
    }
}

Cache.prototype.removeItem = function (key) {
  this.storage.removeItem(key)
}

Cache.prototype.clear = function () {
 this.storage.clear()
}

Cache.prototype.thelength = function () {
 return this.storage.length
}