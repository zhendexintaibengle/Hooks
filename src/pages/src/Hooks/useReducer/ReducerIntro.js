import React from 'react'
import { Card } from "@tencent/tea-component/lib/card"


export default function ReducerIntro() {
    return (
        <Card style={{ padding: 20, minHeight: 600 }}>
            <h3 style={{ color: 'red' }}>1.useReducer简介</h3>
            <p>useReducer是useState的替代方案</p>
            <p>公式 : const [state,dispatch]=useReducer(reducer,initalState)</p>
            <p>接收类型为(state,action)=>newState的reducer。并返回dispatch方法，配对的当前状态</p>
        </Card>
    )
}