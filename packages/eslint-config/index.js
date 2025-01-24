module.exports = {
  extends: ['./rules/base/es6.js', './rules/base/style.js'].map(require.resolve),

  // parser: 字段用于指定代码的解析器
  parser: require.resolve('@babel/eslint-parser'),

  // parserOptions: 指定解析器的选项
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },

  root: true,
};
