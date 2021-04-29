import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const input1 = useRef(null)
    const input2 = useRef(null)

    const counter = useRef(0)

    useEffect(() => {
        counter.current++
        input2.current.focus()
    }
    ,[value1])
    useEffect(() => {
        counter.current++
        input1.current.focus()
    }
    , [value2])

    const merge = (s1, s2) => {
        let result = []
        const [s1Array, s2Array] = [Array.from(s1), Array.from(s2)]
        const bigger = s1Array > s2Array ? s1Array : s2Array

        for (let i = 0; i < bigger.length + 1; i++) {
            result.push(s1Array[i])
            result.push(s2Array[i])
        }

        return result
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title='Exercício 01'/>
            <div className="center">
                <div>
                    <span className="text">Value: </span>
                    <span className="text">{merge(value1, value2)}</span>
                    <span className="text"> [</span>
                    <span className="text red">{counter.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" ref={input1} className="input" value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title='Exercício 02'/>
            <div className="center">
                <input type="text" ref={input2} className="input" value={value2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
