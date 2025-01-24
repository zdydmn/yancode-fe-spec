# CSS编码规范

> 本规约涉及 CSS 及其预编译语言（Sass、Less）的编码风格和最佳实践，部分规则可通过 [stylelint](https://stylelint.io/) 工具落地。

## 文件的基本约定

#### 【强制】缩进使用 2 个空格做为一个缩进层级，禁止使用 tab 字符

```css
/* Good case */
.demo {
  color: #000;
}
/* Bad case */
.demo {
  color: #000;
}
```

#### 【推荐】文件最大行数限制 500 行

#### 【推荐】文件名全部小写，只使用下划线（\_）或者破折号（-）连接，优先建议用'-'连接

## 空格

#### 【强制】选择器与{之间必须包含空格

#### 【强制】属性名与之后的:之间不允许包含空格，:与属性值之间必须包含空格

#### 【强制】列表型属性值书写在单行时，,后必须保留一个空格

```css
/* Good case */
.demo {
  font-family: 'Arial', 'sans-serif';
}
/* Bad case */
.demo {
  font-family: 'Arial', 'sans-serif';
}
```

## 行长度

#### 【强制】每行不得超过120个字符，除非单行不可分割；

#### 【建议】对于超长的样式，在样式值的空格处或,后换行，建议按逻辑分组

## 选择器

#### 【强制】当一个规则包含多个选择器时，每个选择器声明必须独占一行

```css
/* Good case */
.header,
.footer,
.body {
  font-size: 15px;
}
/* Bad case */
.header,
.footer,
.body {
  font-size: 15px;
}
```

#### 【强制】>、+、~选择器的两边各保留一个空格

```css
/* Good case */
main > nav {
  position: absolute;
}
label + input {
  position: absolute;
}
input:checked ~ button {
  background: #ffffff;
}
/* Bad case */
main > nav {
  position: absolute;
}
label + input {
  position: absolute;
}
input:checked ~ button {
  background: #ffffff;
}
```

#### 【建议】请勿使用\*选择器

#### 【建议】尽可能避免使用属性选择器

属性选择器相较于其他选择器，对于浏览器的性能消耗较大，且容易出现不可控情况。但是如果移动需要使用属性选择器，那么属性值要使用双引号包裹

```css
/* Good case */
.demo[id='demo1'] {
  font-family: 'Arial', 'sans-serif';
}
```

## 属性

#### 【强制】属性定义最后必须以分号结尾

#### 【强制】禁止使用!important来提升样式重要度

开发中，可以通过选择器权重来提升样式重要程度。进制使用`!important`去提高属性的权重。

```css
/* Good case */
.demo {
  color: #000;
}
/* Bad case */
.demo {
  color: #000 !important;
}
```

#### 【强制】属性定义必须一行保证只有一个定义

```css
/* Good case */
.demo {
  padding: 0;
  margin: 0;
}
/* Bad case */
.demo {
  padding: 0;
  margin: 0;
}
```

#### 【建议】如无必要，不得为 id、class 选择器增加元素选择器来做限定

避免增加性能和后续维护的成本

```css
/* Good case */
.demo {
  padding: 0;
}
/* Bad case */
.demo#id {
  padding: 0;
}
```

#### 【建议】选择器的嵌套层级建议不要大于三级

```css
/* Good case */
.demo .demo2 {
  font-weight: 600;
}
/* Bad case */
.demo .demo2 .demo3 .demo4 {
  font-weight: 600;
}
```

#### 【建议】属性在可以使用缩写时，尽可能使用缩写

注意：在进行 `padding` / `margin` / `border` 等属性缩写时，需要清楚当前需求是否需要对所有防伪进行设置，因为缩写可能会造成不必要的属性覆盖。如某些方向需要继承其他声明的值，则应该分开设置。

```css
/* Good case */
.selector {
  padding: 0 3px;
  margin: 5px;
  color: #fff;
}
/* Bad case */
.selector {
  padding: 0px 3px 0px 3px;
  margin: 5px 5px 5px 5px;
  color: #ffffff;
}
```

#### 【建议】同一规则设置下，属性在书写时，按照功能进行分组

为了提高代码的可读性，和可维护性。在书写属性的时候可以按照一下顺序分组进行书写

1. Formatting Model（布局方式、位置）: `position` / `float` / `display` / `overflow` 等
2. Box Model（尺寸）: `border` / `margin` / `padding` / `width` / `height` 等
3. Typographic（文本相关）: `font` / `line-height` / `text-align` / `word-wrap` 等
4. Visual（视觉效果）: `background` / `color` / `transition` / `list-style` 等

```css
/* Good case */
.selector {
  position: absolute;
  top: 50px;
  left: 0;
  overflow-x: hidden;

  width: 200px;
  padding: 5px;
  border: 1px solid #ddd;

  font-size: 14px;
  line-height: 20px;

  background: #f5f5f5;
  color: #333;
}
```

## 值

#### 【强制】当属性值数值为 0-1 之间的小数时，省略整数部分的 0

```css
/* Good case */
.demo {
  color: rgba(12, 23, 44, 0.8);
  opacity: 0.8;
}
/* Bad case */
.demo {
  color: rgba(12, 23, 44, 0.8);
  opacity: 0.8;
}
```

#### 【强制】url（）函数中的路径不增加引号

```css
/* Good case */
.demo {
  background: url(http://baidu.com/xxx);
}
/* Bad case */
.demo {
  background: url('http://baidu.com/xxx');
}
```

#### 【强制】属性值为 0 时，需省略单位

```css
/* Good case */
.demo {
  padding: 0;
}
/* Bad case */
.demo {
  padding: 0px;
}
```

#### 【强制】RGB 颜色值必须使用十六进制记号形式

如果带有 alpha 的颜色信息可使用rgba()，同时使用rgba()时每个逗号后面必须保留一位空格

```css
/* Good case */
.demo {
  background: #000;
  color: rgba(12, 23, 44, 0.8);
}
/* Bad case */
.demo {
  background: rgb(0, 0, 0);
  color: rgba(12, 23, 44, 0.8);
}
```

#### 【强制】颜色值不允许使用单词命名色值

```css
/* Good case */
.demo {
  color: #000;
}
/* Bad case */
.demo {
  color: black;
}
```

#### 【强制】颜色值英文必须使用小写，禁止使用大写

```css
/* Good case */
.demo {
  color: #f0f;
}
/* Bad case */
.demo {
  color: #f0f;
}
```

#### 【建议】颜色值可以缩写时，建议使用缩写形式

```css
/* Good case */
.demo {
  color: #f0f;
}
/* Bad case */
.demo {
  color: #ff00ff;
}
```

## 换行

#### 【建议】在两个代码块之间增加换行增加文件可读性

## 媒体查询

#### 【强制】使用媒体查询时，必须定义和其相关的规则在一个地方，避免单独维护媒体查询条件

```css
/* Good case */
.header {
  color: #f0f;
}
@media (...) {
  .footer {
    color: #0f0;
  }
}
.body {
  background: #fff;
}
@media (...) {
  .body {
    background: #000;
  }
}
/* Bad case */
.header {
  color: #f0f;
}
.body {
  background: #fff;
}

@media (...) {
  .footer {
    color: #0f0;
  }
  .body {
    background: #000;
  }
}
```

#### 【强制】媒体查询如果有多个逗号分割的条件时，应将每个条件单独放在一行

```css
/* Good case */
@media (min-resolution: 2dppx), (min-resolution: 192dpi) {
  color: #fff;
}
/* Bad case */
@media (min-resolution: 2dppx), (min-resolution: 192dpi) {
  color: #fff;
}
```

## 多浏览器适配

#### 【建议】带有浏览器适配的私有前缀的属性由长到短排列，按照冒号位置对齐

```css
/* Good case */
.box {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-boxl;
}
```
