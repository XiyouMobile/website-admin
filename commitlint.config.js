module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'wip', // 开发中
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'ci', // ci
        'revert', // 回退
        'build', // 打包
        'chore', // 构建过程或辅助工具的变动
        'test', // 增加测试
        'docs', // 文档注释
        'init', // 初始化
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};
