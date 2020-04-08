import React, { useContext } from 'react'
import { Card } from "@tencent/tea-component/lib/card"
// 导入context
import { NumberText } from './index'
import { SonText } from './ContextDemo'

export default function MoreSonContextDemo() {
    // 使用useContext获取属性
    const text = useContext(NumberText)
    // 获取子组件的context
    const obj = useContext(SonText)
    return (
        <div>
            -- 这里是孙子组件接收到的Data：{text}
            <p>{obj.text}</p>
            <hr />
            <div>
                <h3 style={{ color: 'red' }}>useContext总结</h3>
                <div>
                    <p>1.createContext会返回一个对象，其值分别是Provider和Consumer,useContext可以直接替代Consumer,书写更方便</p>
                    <p>2.只要是Provider包含的组件，都可使用useContext获取其值</p>
                    <p>3.使用export导出创建的上下文对象，用以跨组件获取上下文</p>
                    <p>4.当组件上层最近的{'<ContentContext.Provider>'}更新时，该hooks会重新触发渲染，并使用最新传递给<b>ContentContext.Provider</b>的context的value值-----<b>注意性能</b></p>
                    <hr/>
                    <h3 style={{ color: 'red' }}>思考：</h3>
                    <p>useContext单独使用，不易维护，如何处理？</p>
                </div>
            </div>
        </div>
    )
}