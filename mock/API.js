'user strict'

const qs = require('qs');
const mockjs = require('mockjs');

const menu = [
  {
    fMenuId: '01',
    fMenuName:'Button 按钮',
    fMenuPath: '/user'
  },
  {
    fMenuId: '02',
    fMenuName:'Input 输入框',
    fMenuPath: '/user'
  },
  {
    fMenuId: '03',
    fMenuName:' Other 其他',
    fMenuPath: '/user'
  },
  {
    fMenuId: '04',
    fMenuName:'Text 测试',
    fMenuPath: '/user'
  }
]
module.exports = {
  'GET /api/queryMenu' (req,res) {
    setTimeout(() => {
      res.json({
        success: true,
        menu:menu
      })
    },200)
  }
}

