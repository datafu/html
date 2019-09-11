
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


##学习手册
> https://github.com/lefex/DSA/issues/45

##参考资料
>https://developer.mozilla.org/zh-CN/
>https://demo.cssworld.cn/
> https://css.doyoe.com/
