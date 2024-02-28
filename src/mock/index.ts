// import webpackMockServer from 'webpack-mock-server'
import { mock } from 'vite-plugin-mock';
const arr = [];
for (let index = 0; index < 20; index++) {
  arr.push({
    customer_name: 'wade',
    status_text: '登录成功',
    os: 'Windows 10',
    browser: 'Chrome(99.0.4844.51)',
    ip: '192.168.9.110',
    created: '2021-12-14 10:41:02',
    location: '局域网 局域网',
  });
}

const logList = {
  total: 31,
  page: 1,
  page_size: 20,
  list: arr,
};

const statusList = {
  data: [
    { label: '全部', value: 0 },
    { label: '待审核', value: 1 },
  ],
};

const routeList = {
  data: {
    menus: [
      {
        frontpath: '/store/index',
        name: '商品首页',
        title: '商品首页',
      },
      {
        frontpath: '/storemanage/index',
        name: '商品门户管理',
        title: '商品门户管理',
      },
      {
        frontpath: '/billlist/index',
        name: '商品账单',
        title: '商品账单',
      },
      {
        frontpath: '/sales/index',
        name: '促销活动',
        title: '促销活动',
      },
      {
        frontpath: '/stores/index',
        name: '商家管理',
        title: '商家管理',
      },
    ],
    ruleNames: '',
    user: {
      username: '张三',
      depart: '销售部',
    },
  },
};

const userInfo = {
  data: {
    success: true,
    user: {
      username: '张三',
    },
    token: 'abc123',
  },
};

const LogOut = {
  data: {
    message: '退出成功',
  },
};

export default [
  {
    url: '/api/getList',
    method: 'post',
    response: () => {
      return logList;
    },
  },
  {
    url: '/api/getStatusList',
    method: 'get',
    response: () => {
      return statusList;
    },
  },
  {
    url: '/api/admin/login',
    method: 'post',
    response: (res) => {
      console.log('哈哈哈');
      const { username, password } = res.body;
      if (username == 'admin') {
        return userInfo;
      } else {
        return {
          success: false,
          data: {
            user: null,
            token: null,
            msg: '用户不存在',
          },
        };
      }
    },
  },
  {
    url: '/api/admin/getinfo',
    method: 'post',
    response: () => {
      return routeList;
    },
  },
  {
    url: '/api/admin/logout',
    method: 'post',
    response: () => {
      return LogOut;
    },
  },
  {
    url: '/api/admin/updatepassword',
    method: 'post',
    response: () => {
      return statusList;
    },
  },
];

// export default webpackMockServer.add((app, helper) => {
//   app.get('/admin/login', (_req, res) => {
//     res.json([
//       {
//         id: helper.getRandomInt(1, 999),
//         name: 'pen'
//       }
//     ])
//   })
// })
// mock('/admin/login', 'get', {
//     users: [
//       { id: 1, name: 'John Doe' },
//       { id: 2, name: 'Jane Doe' },
//     ],
//   });
