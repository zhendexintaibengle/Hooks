import React, { useContext } from 'react'
import { Card } from "@tencent/tea-component/lib/card"
// 导入context
import { NumberText } from './index'
import MoreSonContextDemo from './MoreSonContextDemo'

export const SonText = React.createContext()

export default function ContextDemo() {
    // 使用useContext获取属性
    const text = useContext(NumberText)
    // 创建子组件的context
    return (
        <Card style={{ padding: 20, minHeight: 600 }}>
            这里是子组件接收到的Data：{text}
            <SonText.Provider value={{ text: '我是子组件的Cotnext' }}>
                <MoreSonContextDemo />
            </SonText.Provider>
        </Card>
    )
}