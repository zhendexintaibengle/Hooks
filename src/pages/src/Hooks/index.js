import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import useContext from '../Hooks/useContext/index'
import useReducer from '../Hooks/useReducer/index'
import { getWindowHeight } from '../../common/utils'

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
    if (hash === '#/hooks') {
        props.history.push('/hooks/useContext')
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
                    <Menu.Item key='useContext'>
                        <Link to='/hooks/useContext'>useContext</Link>
                    </Menu.Item>
                    <Menu.Item key='useReducer'>
                        <Link to='/hooks/useReducer'>useReducer</Link>
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
                    <Route path='/hooks/useContext' component={useContext} />
                    <Route path='/hooks/useReducer' component={useReducer} />
                </Content>
            </Layout>
        </Layout >
    )
}