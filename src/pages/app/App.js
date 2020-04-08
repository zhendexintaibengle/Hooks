import React from "react"
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Link, HashRouter, Route } from 'react-router-dom'
import { menuArr } from '../common/config'
import hooksIndex from '../src/Hooks/index'
import routerIndex from '../src/Router/index'
// ----------------ant design组件-------------------

const { Header } = Layout
// 获取当前导航栏key
const menuID = window.location.hash
export default function Demo() {
  // 当路由为#/或者‘’时，自动跳转到下面的路由，此处不使用重定向的原因是，在页面刷新时，路由重定向会将路由重定向到'#/hooks/useContext'，体验性不好
  if (menuID === '#/' || menuID === '') {
    window.location.href = '#/hooks/useContext'
  }
  return (
    <HashRouter>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[menuID]}
          >
            {menuArr.map(v => (
              <Menu.Item key={v.key}>
                <Link to={v.path}>{v.text}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Route path='/hooks' component={hooksIndex} />
        <Route path='/router' component={routerIndex} />
      </Layout >
    </HashRouter>
  )

}