 /**
  * @description 封装 Storage, 默认情况下， 返回的是 localStorage
  * @param {String} 
  * @param {String} 
  * @return void
  */


 class PackagedStorage {
     constructor(isLocal = true) {
         this.storage = isLocal ? localStorage : sessionStorage;
     }

     setItem(key, value) {
         this.storage.setItem(key, JSON.stringify(value));
     }

     key(index) {
         return this.storage.key(index);
     }

     getItem(key) {
         return JSON.parse(this.storage.getItem(key));
     }

     clear() {
         this.storage.clear();
     }

     removeItem(key) {
         this.storage.removeItem(key);
     }

 }

 const packagedLocalStorage = new PackagedStorage();
 const packagedSessionStorage = new PackagedStorage(false);

 export {
     packagedLocalStorage,
     packagedSessionStorage
 }