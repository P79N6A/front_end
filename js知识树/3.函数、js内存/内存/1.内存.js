/*
1.调用堆栈中函数调用的数量超出了调用堆栈的实际大小，浏览器会抛出一个错误终止运行。
    对于下面的递归就会无限制的执行下去，直到超出调用堆栈的实际大小，这个浏览器定义是的。
function foo() {
    foo();
}
foo();

2.栈数据结构：先进后出
    存基本数据类型

3.堆数据结构：json的key-value形式，不关心顺序只关心key的名字
    因为引用类型值的大小不确定不能存在栈中，但是内存地址大小是固定的可以保存在堆内存中。
    在栈内存中存放的只是该对象的访问地址。
    查询引用类型： 先从栈中读取内存地址，再通过地址找到堆中的值（按引用访问）

栈比堆的运算速度快，Object是一个复杂的结构且可以扩展：数组可扩充，对象可添加属性，都可以增删改查。
将他们放在堆中是为了不影响栈的效率。而是通过引用的方式查找到堆中的实际对象再进行操作

4.js内存生命周期
    1、分配你所需要的内存
    2、使用分配到的内存（读、写）
    3、不需要时将其释放、归还(垃圾清除机制：标记清除)

5.
  1）使用a = null释放引用，让 a 原本对应的值失去引用，脱离执行环境，在下一次垃圾收集器执行操作时被找到并释放。
  2）在局部作用域中，当函数执行完毕，局部变量也就没有存在的必要了，因此垃圾收集器很容易做出判断并回收。
    但是全局变量什么时候需要自动释放内存空间则很难判断，因此在开发中，需要尽量避免使用全局变量。

*/