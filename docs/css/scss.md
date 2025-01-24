# SCSS编码规范

> 在现代开发体系当中，直接使用 CSS 项目较少，大部分项目都是通过预处理器 SCSS 或 Less 这些CSS预处理语言来进行集成。但是本身语法与CSS基本相同。本文规范，主要从SCSS预处理语言本身的一些特性能力做规范约束。

```css
/* Good case */
/* Bad case */
```

## 模块引入

#### 【强制】同一个 SCSS 文件中的所有模块引入必须放在同一块，并且在文件最顶部，不允许分开

```scss
/* Good case */
@import 'base/config';
@import 'base/reset';
@use 'base/test';

body {
  position: absolute;
}
```

## 声明

#### 【强制】任何可能会被重复使用的值，都应该被声明成变量

```scss
/* Good Case */
@import 'base/config';
@import 'base/reset';

$base-font-size: 12px;

body {
  position: absolute;
}

.selector {
  font-size: $base-font-size;
}
```

#### 【强制】变量的声明必须在文件最顶部（@import 之下）统一管理，禁止使用时才声明变量

```scss
@import 'base/config';
@import 'base/reset';

$base-font-size: 12px;
$base-font-width: 600;
$base-font-color: 28, 31, 35;

.selector {
  font-size: $base-font-size;
  color: rgba(var($base-font-color), 1);
}
```

#### 【强制】在对当前选择器进行附加选择, 伪类声明时，附加选择器的选择器声明必须在被附加选择器表达式内，以更好管理所属关系

```scss
/* Good Case */
.parent {
  position: absolute;

  &:hover {
    background: #8df;
  }

  &.active {
    display: block;
  }
}
/* Bad Case */
.parent {
  position: absolute;
}
.parent:hover {
  background: #8df;
}
.parent.active {
  display: block;
}
```
