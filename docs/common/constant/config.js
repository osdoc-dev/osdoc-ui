export default {
  doc: [
    {
      label: '介绍',
      value: 'introduction',
      module: () => import('../docs/introduction.md'),
    },
    {
      label: '开始使用',
      value: 'quick-start',
      module: () => import('../docs/quickstart.md'),
    },
    {
      label: '更新日志',
      value: 'change-log',
      module: () => import('../docs/changelog.md'),
    },
  ],
  comp: [
    {
      label: '基础组件',
      value: 'Comp',
      children: [
        {
          label: '按钮',
          value: 'Button',
          module: () => import('../../../components/button/demo/index.md'),
        },
        {
          label: '单元格',
          value: 'Cell',
          module: () => import('../../../components/button/demo/index.md'),
        },
        {
          label: '图片',
          value: 'Image',
          module: () => import('../../../components/button/demo/index.md'),
        },
      ],
    },
    {
      label: '表单组件',
      value: 'Comp',
      children: [
        {
          label: '表单',
          value: 'Form',
          module: () => import('../../../components/button/demo/index.md'),
        },
      ],
    },
    {
      label: '操作反馈',
      value: 'Comp',
      children: [],
    },
    {
      label: '业务组件',
      value: 'Comp',
      children: [],
    },
  ],
};
