# `stylelint-config`

> TODO: description

## Usage

```
const stylelintConfig = require('stylelint-config');

// TODO: DEMONSTRATE API
```

## 规则配置

```json
{
  "extends": ["stylelint-config-standard", "stylelint-config-standard-scss"],
  "rules": {
    // 指定缩进为2个空格
    "indentation": [2, { "baseIndentLevel": "auto" }],

    // 限制每行的最大长度为120个字符，但注释行除外
    "max-line-length": [120, { "ignore": ["comments"] }],

    // 禁止使用通用选择器（*）
    "selector-max-universal": 0,

    // 禁止在声明之前添加空行
    "declaration-empty-line-before": "never",

    // 当选择器列表有多行时，要求逗号后必须换行
    "selector-list-comma-newline-after": "always-multi-line",

    // 限制使用ID选择器的数量（最多3个）
    "selector-max-id": 3,

    // 限制CSS嵌套的最大深度为3层
    "max-nesting-depth": 3,

    // 限制一个选择器中类选择器的数量最多为3个，超出警告
    "selector-max-class": [3, { "severity": "warning" }],

    // 禁止在声明中使用!important
    "declaration-no-important": true,

    // 禁止在url()函数中使用引号
    "function-url-quotes": "never",

    // 禁止使用命名颜色（如red、blue等）
    "color-named": "never",

    // 禁止@import规则出现在无效的位置
    "no-invalid-position-at-import-rule": true,

    // 禁止未知的@规则（允许SCSS特定的@规则）
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    // 允许空块
    "block-no-empty": null,

    // 禁止声明块中重复的属性，但允许连续重复且值不同的属性
    "declaration-block-no-duplicate-properties": [
      true,
      { "ignore": ["consecutive-duplicates-with-different-values"] }
    ],

    // 允许特异性递减的选择器
    "no-descending-specificity": null,

    // 允许空源代码
    "no-empty-source": null,

    // 多行块的闭合大括号前必须换行
    "block-closing-brace-newline-before": "always-multi-line",

    // 单行块的闭合大括号前必须有空格
    "block-closing-brace-space-before": "always-single-line",

    // 多行块的开启大括号后必须换行
    "block-opening-brace-newline-after": "always-multi-line",

    // 块的开启大括号前必须有空格
    "block-opening-brace-space-before": "always",

    // 单行块的开启大括号后必须有空格
    "block-opening-brace-space-after": "always-single-line",

    // 指定16进制颜色的大小写为小写
    "color-hex-case": "lower",

    // 指定16进制颜色的长度为短形式
    "color-hex-length": "short",

    // 注释内必须有空白符
    "comment-whitespace-inside": "always",

    // 声明的冒号前不允许有空格
    "declaration-colon-space-before": "never",

    // 声明的冒号后必须有空格
    "declaration-colon-space-after": "always",

    // 单行声明块中最多允许1个声明
    "declaration-block-single-line-max-declarations": 1,

    // 声明块尾必须有分号，严重性为错误
    "declaration-block-trailing-semicolon": ["always", { "severity": "error" }],

    // 零长度不允许有单位，但自定义属性除外
    "length-zero-no-unit": [true, { "ignore": ["custom-properties"] }],

    // 值列表中逗号后必须有空格（单行）
    "value-list-comma-space-after": "always-single-line",

    // 要求双斜杠注释内必须有空白符
    "scss/double-slash-comment-whitespace-inside": "always"
  }
}
```
