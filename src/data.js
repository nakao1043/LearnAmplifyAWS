import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import PrintIcon from '@material-ui/icons/Print';
import SettingsIcon from '@material-ui/icons/Settings';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'ﾀﾞｯｼｭﾎﾞｰﾄﾞ', icon: <Assessment/>, link: '/dashboard' },
    { text: 'test', icon: <Web/>, link: '/test_0224' },
    { text: 'No.2帳票', icon: <Web/>, link: '/OrderSearchPage' },
    { text: 'No.3単体フォーム', icon: <Web/>, link: '/form' },
    { text: 'No.4明細', icon: <GridOn/>, link: '/TablePage2' },
    { text: 'No.4明細(更新ボタンあり)', icon: <GridOn/>, link: '/TablePage3' },
    { text: 'No.5明細', icon: <GridOn/>, link: '/TablePage' },
    // { text: '受注', icon: <Web/>, link: '/Order' },
    // { text: '受注(更新ボタンあり)', icon: <Web/>, link: '/Order2' },
    { text: 'No.6受注', icon: <Web/>, link: '/OrderSearchPage' },
    { text: 'No.6受注(更新ボタンあり)', icon: <Web/>, link: '/OrderSearchPage2' },
    { text: '進捗', icon: <Web/>, link: '/Progress' },
    { text: 'No.7 マスタ検索', icon: <Web/>, link: '/SearchTable' },
    { text: 'No.8 データ検索', icon: <Web/>, link: '/SearchData' },
    // { text: '印刷', icon: <PrintIcon/>, link: '/PrintTest' },
    { text: '設定', icon: <SettingsIcon/>, link: '/Sample' },
    { text: 'ﾏｽﾀ', icon: <Web/>, link: '/DbSample' },
    { text: 'DB連携', icon: <Web/>, link: '/DbRelation' },
    { text: 'ﾛｸﾞｲﾝ', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
