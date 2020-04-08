import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { getWindowHeight } from '../../common/utils'
import index from './route/index'

const { Sider, Content } = Layout

export default function hooksIndex(props) {
    // 获取当前左侧菜单栏ID
    const leftMneuID = window.location.hash.split('/')[2]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [height, setHeight] = useState(document.body.clientHeight)
    // 屏幕刷新时，获取屏幕高度
    getWindowHeight(setHeight)

    // 获取当前hash
    const hash = window.location.hash
    // 判断当前hash是否为hooks，避免出现白屏状态,此处不使用重定向原因与上出一致
    if (hash === '#/router') {
        props.history.push('/router/react-router')
    }
    return (
        <Layout>
            <Sider width={200} className='site-layout-background'>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={[leftMneuID]}
                    style={{ height: height }}
                >
                    <Menu.Item key='react-router'>
                        <Link to='/router/react-router'>React-Router</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content
                    className='site-layout-background'
                    style={{
                        minHeight: height,
                    }}
                >
                    <Route path='/router/react-router' component={index} />
                </Content>
            </Layout>
        </Layout >
    )
}