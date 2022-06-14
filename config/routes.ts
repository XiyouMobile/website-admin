export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: 'wiki',
        name: 'wiki管理',
        icon: 'crown',
        component: './Newpage',
        routes: [
          { path: 'uncensored', name: '待审核', icon: 'smile', component: './Newpage' },
          { path: 'pass', name: '已通过', icon: 'smile', component: './Newpage' },
          { path: 'reject', name: '已拒绝', icon: 'smile', component: './Newpage' },
          { path: 'classification', name: '分类管理', icon: 'smile', component: './Newpage' },
          { component: './404' },
        ],
      },
      {
        path: 'dynamic',
        name: '动态管理',
        icon: 'crown',
        component: './Newpage',
        routes: [
          { path: 'list', name: '动态列表', icon: 'smile', component: './Newpage' },
          { path: 'create', name: '新建动态', icon: 'smile', component: './Newpage' },
          { component: './404' },
        ],
      },
      {
        path: 'member',
        name: '成员管理',
        icon: 'icon-viewlarger1',
        component: './Newpage',
        routes: [
          { path: 'list', name: '成员列表', component: './Newpage' },
          { path: 'add', name: '添加成员', component: './Newpage' },
          { component: './404' },
        ],
      },
      { component: './404' },
    ],
  },

  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  {
    name: 'wiki',
    icon: 'book',
    path: '/wiki',
    component: './Newpage',
    routes: [
      { path: 'publish', name: '已发布', icon: 'smile', component: './Newpage' },
      { path: 'audit', name: '待审核', icon: 'smile', component: './Newpage' },
      { path: 'delete', name: '已删除', icon: 'smile', component: './Newpage' },
      { path: 'nopass', name: '未通过审核', icon: 'smile', component: './Newpage' },
      { path: 'draft', name: '草稿', icon: 'smile', component: './Newpage' },
      { path: 'create', name: '新建', icon: 'smile', component: './Newpage' },
      { component: './404' },
    ],
  },
  {
    name: '面经',
    icon: 'read',
    path: '/interview',
    component: './Newpage',
    routes: [
      { path: 'list', name: '面经列表', icon: 'smile', component: './Newpage' },
      { path: 'my', name: '我的面经', icon: 'smile', component: './Newpage' },
      { path: 'create', name: '面经发布', icon: 'smile', component: './Newpage' },
      { component: './404' },
    ],
  },
  {
    name: '成员',
    icon: 'user',
    path: '/member',
    routes: [
      { path: 'info', name: '捐款信息', icon: 'smile', component: './user/Money/Money' },
      { path: 'list', name: '成员列表', icon: 'smile', component: './user/UserList/UserList' },
      { component: './404' },
    ],
  },
  { path: '/mine', name: '个人中心', icon: 'heart', component: './user/Myself/Myself' },
  {
    name: '设置',
    icon: 'setting',
    path: '/setting',
    component: './Newpage',
    routes: [
      { path: 'modify', name: '个人设置', icon: 'smile', component: './Newpage' },
      { component: './404' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
