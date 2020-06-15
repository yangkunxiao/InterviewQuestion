vue生命周期：
beforeCreate created beforeMount mounted boforeUpdate update boforeDistory distoryed

使用keep-alive的组件：actived deactived

计算属性和普通属性的区别：

- 计算属性可以依赖于普通属性
- 计算属性，只有其依赖发生变化才会重新求值
- 计算属性可以自定义setter和getter，如果没有设置getter，则vue会将其回调函数作为getter 
```javascript
> src/core/instance/state.js#line189

const getter = typeof userDef === "function" ? userDef : userDef.get;
```

vue通信方式

父 --> 子: prop $children $ref previde  $on  

子 --> 父: prop $parent  inject  $emit

$attrs: 包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。

$listeners: 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件

中央事件总线：$emit/$on: 通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级

vuex


mixin

vue提供的一种用于分发vue组件中可复用的功能。一个混合对象可以包含任意组件中的选项。当前组件混入之后，会和当前组件的选项进行混合，并且在发生冲突时：
- 数据选项：在内部以递归的形式归并，且以组件数据优先
- 函数：同名函数、会在组件函数之前先调用
- 值为对象的选项，会被合并，如果发生冲突 以当前组件为准

directive

钩子函数：
- bind:只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- inserted:只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- update:所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有
- componentUdate: 指令所在组件的 VNode 及其子 VNode 全部更新后调用
- unbind: 只调用一次，指令与元素解绑时调用。

```javascript
//全局
Vue.directive('focus',{
    bind:function(el,binding,vnode){
        e.focus()
    }
})

//组件局部
directives:{
    focus:{
        inserted:function(el){
            el.focus()
        }
    }
}

```

指令原理概述：
在模版解析阶段，vue会将模版先解析成ast，然后对ast进行优化（主要是遍历ast，找到静态节点并打标记，避免静态节点被生成vnode等），然后将ast转换成可执行的字符串。在解析ast阶段的同时，也会将dom元素绑定的指令同时给解析到ast中，存放在vnode.data.directives中，然后在ast转换成可执行字符串的过程中，实现指令命令，最后在虚拟dom渲染的过程中触发指令的内部钩子函数，使指令生效。（在vnode进行patch的时候，会根据节点的对比结果触发一些钩子函数。更新指令的程序会监听created、update、distory，并且在这三个钩子函数触发时进行oleVnode和vnode的对比，最后根据对比结果，触发指令的钩子函数：bind、inserted、update、componentUpdated、unbind等）


v-if ：根据表达式的值，三目运算，判断渲染哪个节点。
```javascript
<li v-if="has">1</li>
<li v-else>2</li>


编译之后：
(has) ? _c('li',[_v("if")]) : _c('li',[_v("else")])
```

v-on：
v-on指令解析之后，会被解析到vnode.data.on中，在虚拟dom进行patch的过程中，会根据不同的时机触发不同的事件钩子。事件绑定的相关处理逻辑绑定了crate和update钩子函数，即在patch的过程中，每当dom元素被craete或者update的时候就会触发事件绑定的逻辑处理。
而事件处理逻辑是一个叫做updateDOMListeners的函数。
```javascript
function updateDOMListeners (oldVnode: VNodeWithData, vnode: VNodeWithData) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  //获取vnode上绑定的事件
  const on = vnode.data.on || {}
  //获取oldVnode上绑定的事件
  const oldOn = oldVnode.data.on || {}
  //获取绑定元素
  target = vnode.elm
  normalizeEvents(on)
  //使用updateListeners判断是否在dom上添加或更改事件
  updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context)
  target = undefined
}

```
该函数接受vnode和oldVnode两个参数，用于对比程序是应该绑定原生事件还是解绑原生事件。

如果，oldVnode和vnode都没有绑定事件，则直接return

如果oldVnode中有而vnode中没有，则说明需要删除原生的绑定事件，调用remove方法中的el.removeEventLitener。

如果vnode中有，而oldVnode中没有，则证明需要给元素绑定事件，调用add中的el.addEventListener

此外，在add的时候，处理函数handler被函数wrap（高阶函数createOnceHandler）包裹，目的是实现once功能。

vue中所有带$的属性和方法：
数据属性相关：
- $set
    - Array: splice --> notify
    - Object: target[key] = value --> notify
- $delete
    - Array: splice --> notify
    - Object: delete --> notify
- $watch
    - new Watcher --> 根据dep.id判断是否已经被收集依赖

事件相关：
- $on
    - 参数 {string | Array<string>} event (数组只在 2.2.0+ 中支持)
    - {Function} callback
    -  如果event参数为数组 则循环遍历数组
    - 否则，则将回调函数添加到事件列表中 。vm._events是一个对象，用于存储事件。
- $off
    - 参数 {string | Array<string>} event (只在 2.2.2+ 支持数组)
    - {Function} [callback]
    - 如果参数为数组 循环调用this.$off
    - 如果只提供事件名，则移除该事件名的所有监听函数
    - 如果同时提供了事件名和监听函数，则获取该事件名对应的事件 循环遍历 找到事件形同的回调 移除。
- $once
    - {string} event
    - {Function} callback
    - 只执行一次 
- $emit
    - 使用event从vm._events获取对应的事件
    - 循环遍历，将参数传给每一个事件，且使用try catch捕获错误
```javascript
//在vue原型上挂载$on方法
  Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
    const vm: Component = this
    if (Array.isArray(event)) {
        //如果event参数为数组 则循环遍历数组
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn)
      }
    } else {
        //否则，则将回调函数添加到事件列表中
        //vm._events是一个对象，用于存储事件。
      (vm._events[event] || (vm._events[event] = [])).push(fn)
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true
      }
    }
    return vm
  }
  //在vue原型上挂载$once方法
  Vue.prototype.$once = function (event: string, fn: Function): Component {
    const vm: Component = this
    function on () {
      vm.$off(event, on)
      fn.apply(vm, arguments)
    }
    on.fn = fn
    vm.$on(event, on)
    return vm
  }
  //在vue原型上挂载$off方法
  Vue.prototype.$off = function (event?: string | Array<string>, fn?: Function): Component {
    const vm: Component = this
    // all 如果没有参数 默认移除所有事件
    if (!arguments.length) {
      vm._events = Object.create(null)
      return vm
    }
    // array of events
    //如果是数组
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn)
      }
      return vm
    }
    // specific event 获取所有对应的事件
    //如果只有事件名，不存在回调 则返回vm
    const cbs = vm._events[event]
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null
      return vm
    }
    // specific handler
    let cb
    let i = cbs.length
    while (i--) {
      cb = cbs[i]
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1)
        break
      }
    }
    return vm
  }
  //在vue原型上挂载$emit方法
  Vue.prototype.$emit = function (event: string): Component {
    const vm: Component = this
    if (process.env.NODE_ENV !== 'production') {
      const lowerCaseEvent = event.toLowerCase()
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          `Event "${lowerCaseEvent}" is emitted in component ` +
          `${formatComponentName(vm)} but the handler is registered for "${event}". ` +
          `Note that HTML attributes are case-insensitive and you cannot use ` +
          `v-on to listen to camelCase events when using in-DOM templates. ` +
          `You should probably use "${hyphenate(event)}" instead of "${event}".`
        )
      }
    }
    let cbs = vm._events[event]
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs
      const args = toArray(arguments, 1)
      const info = `event handler for "${event}"`
      for (let i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info)
      }
    }
    return vm
  }
```


生命周期相关：

- $forceUpdate
    - 直接调用watcher的update方法更新组件
- $destroy
    - 触发beforeDestroy生命周期钩子
    - 从父组件中将该组件移除
    - 移除自身的watcher
    - 移除用户自定义的watcher
    - 触发destroyed
    - 解除所有的事件监听
- $nextTick
- $mount

```javascript
//在vue原型上挂载公共方法$forceUpdate
  Vue.prototype.$forceUpdate = function () {
    const vm: Component = this
    //调用私有方法update触发更新操作
    if (vm._watcher) {
      vm._watcher.update()
    }
  }
  //在vue原型上挂载公共方法$destory
  Vue.prototype.$destroy = function () {
    const vm: Component = this
    if (vm._isBeingDestroyed) {
      return
    }
    //触发boforeDestory生命函数钩子
    callHook(vm, 'beforeDestroy')
    vm._isBeingDestroyed = true
    // remove self from parent
    const parent = vm.$parent
    //清除当前组件和父组件之间的关联 将当前组件从父组件中移除
    //如果有父组件 且父组件没有执行销毁操作 且不是抽象组件
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm)
    }
    //去除组件上所有的watcher

    // teardown watchers
    //去除组件自带的watch
    if (vm._watcher) {
      vm._watcher.teardown()
    }
    //去除用户主动使用vm.$watch实现的监听
    let i = vm._watchers.length
    while (i--) {
      vm._watchers[i].teardown()
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--
    }
    // call the last hook...
    //如果为true 则组件正在执行销毁
    vm._isDestroyed = true
    // invoke destroy hooks on current rendered tree
    //解除模版中所有的指令
    vm.__patch__(vm._vnode, null)
    // fire destroyed hook
    //触发destrotyed
    callHook(vm, 'destroyed')
    // turn off all instance listeners.
    //移除所有的事件监听
    vm.$off()
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null
    }
  }

```


computed 和 watch、method的区别
- 内部实现不同。Vue源码实现computed的时候，会先获取computed的handle的函数或者自定义的getter，然后会判断当前执行环境是否是服务器端，做不同的处理。如果是不是服务器端，则调用createcreateComputedGetter，返回一个函数，在函数内部收集该computed的依赖（如果有的话）。然后通过使用Object.definePrototype给每一个computed内的成员设置监听。
- 而初始化methods的时候，直接获取vm实例上的methods，遍历methods，如果methods不是一个函数则使用一个空函数代替，然后挂载到vm上。
- watch只能依赖一个特定的属性，只有该属性发生变化的时候，才会触发回调函数。且watch可以设置options：deep、immdiate。deep：深度监听。immdiate是否在初始化的时候立即执行回调函数。
- 触发方式不同。computed之后根据其依赖的变动触发，如果依赖没有发生改变，再次访问直接返回上次的缓存。而method则每次调用都会重新计算。