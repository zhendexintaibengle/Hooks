import React, { useRedeucer } from 'react'
import { Layout } from "@tencent/tea-component/lib/layout"
import { Card } from "@tencent/tea-component/lib/card"
import ReducerIntro from './ReducerIntro'

const { Content } = Layout

export default function Index() {
    return (
        <Content>
            <Content.Header title="useRdeucer" />
            <Content.Body className='contentWidth'>
                <ReducerIntro />
            </Content.Body>
        </Content>
    )
}