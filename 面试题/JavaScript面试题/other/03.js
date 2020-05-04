//Set WeakSet Map WeakMap

/**
 * Set：类似数组，是一种新的数据类型，成员不允许重复，只有键值莫可以键名（或者说键值即键名）.
 *  可以接受一个数组或者其他具有Sysmol.iterable接口的数据结构作为参数初始化
 * API：add(value) delete(value) has(value) clear() size() constructor() 
 */

 /**
  * WeakSet: 成员必须是对象
  *    API：add(value) has(value) delete(value)、无size属性
  *     无法使用for of,因为内部成员都是弱引用，随时都可能消失
  */

  /**
   * Map：类似对象，但是支持各种格式的值作为键。
   * API：size()
   *      set(key,value)
   *      get(key)
   *      has(key)
   *      delete(key)
   *      clear()
   */

   /**
    * WeakMap:首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。
    * 
    */