import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../App'
const Show = () => {
    const [num, SetNum] = useState(0)
    const numRef = useRef(0) // 返回的 ref 对象在组件的整个生命周期内保持不变。
    const inputRef = useRef<HTMLInputElement>(null)// 获取dom节点
    const didUpdate = useRef(false)// 模拟componentDIdUpdate。点击按钮，组件更新打印update
    const theme = useContext(ThemeContext)

    const style={
        'background':theme.background,
        'color': theme.color
    }

    useEffect(()=>{
        if(inputRef && inputRef.current) {
            inputRef.current.focus()
        }
    })

    useEffect(()=>{
        if(didUpdate && didUpdate.current){
            console.log('didUpdate')
        }else{
            didUpdate.current = true
        }
    },[num])

    const ShowNum = () => {
        setTimeout(()=>{
            console.log('num：'+num)
            console.log('numref'+numRef.current)
        },
        3000)
    }

    return (
        <>
            <input type='text' ref = {inputRef}/>
            <div>{num}</div>
            <button style={style} onClick={()=>{
                    SetNum(num+1)
                    numRef.current++
                }}>num++</button>
            <button onClick={ShowNum}>console</button>
        </>
    )
}

export default Show