




## css学习
### 今天主要是学习滚动菜单栏的学习

**代码文件: scroll.html**

#### 不换行
使用标签`<span>` ,但是他会折行,所以我们需要设置属性让他不折行,我们使用属性 `nowrap`
```
#nav-box {
    white-space: nowrap;
    background-color: #0077FF;
}
```
#### 滚动区域实现
css中有一个属性`overflow`，可以进行超出区域的处理。

```
#nav-box {
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    background-color: #0077FF;
}

```
#### 让按钮滚动到中心区域
 直接对DOM 进行操作
```
element.scrollTo(x, y);

```

#### 选择器
* 伪选择器 
  设置子属性 使用`>`
```
  div > span {
    font-size: 20px;
    color: white;
    margin-right: 20px;
    line-height: 40px;
}
```
### 选择器学习
**代码文件: selector.html**
**参考文档**
> https://mp.weixin.qq.com/s/V00q_cJrpPoEUXD7Yxvyug

* css简单标签


* 伪选择器（pseudo-selectors）：它包含伪类（pseudo-classes）和伪元素（pseudo-elements）。这类选择器不是真正意义上的选择器，它作为选择器的一部分，起到选择器匹配元素的限定条件。比如，匹配 dom 树中某个元素的第一个孩子，匹配鼠标点击后的状态等

```
/* 匹配超链接样式 */
a {
    color: blue;
    font-weight: bold;
}

/* 访问后的状态 */
a:visited {
    color: yellow;
}
```

* A B {} : A 元素的所有后代元素 B 都会起作用。下面的例子中 div p {}，它会遍历 div 中所有的子元素 p，只要找到 p 元素就应用对应的 CSS 样式，故所有的  p 元素都变成了红色；
这个选择器经常使用,可以理解为父子选择器
```
div p {
    color: red;
}

```

* A > B {} : A 元素的直接子节点会起作用，也就是只适用于 A 节点的第一层所有的子节点。例子中 div > p { } , 只会找到 div 的第一层子节点 p

```
div > p {
    color: red;
}

<div>
       <p>只有我有吃的</p>
       <section>
           <p> 我没有吃的</p>
       </section>
</div>


```

*  组选择器 A, B：A 和 B 元素具有同一规则的 CSS 样式，不同元素使用逗号隔开

```

div,p {
    color: red;
}

```

#### 规则
做一些规则指定,比如设置css只适用于那些场景
这个 CSS 只适用于屏幕超过 375px 的设备：
```
@media (min-width: 801px) {
  body {
    margin: 0 auto;
    width: 800px;
  }
}
```


##学习手册
> https://github.com/lefex/DSA/issues/45

##参考资料
>https://developer.mozilla.org/zh-CN/
>https://demo.cssworld.cn/
> https://css.doyoe.com/
