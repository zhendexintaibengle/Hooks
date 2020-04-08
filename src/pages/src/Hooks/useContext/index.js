import React from 'react'
import { Layout } from "@tencent/tea-component/lib/layout"
import ContextDemo from './ContextDemo'


const { Content } = Layout

export const NumberText = React.createContext()  //创建上下文
export default function Index() {

    // 使用Provider，给子组件注册属性
    return (
        <Content>
            <Content.Header title="useContext(不用一步一步的传入props)" />
            <Content.Body  className='contentWidth'>
                {/* 内容区域一般使用 Card 组件显示内容 */}
                    <NumberText.Provider value='这里是我传入的属性'>
                        <ContextDemo />
                    </NumberText.Provider>
            </Content.Body>
        </Content>
    )
}