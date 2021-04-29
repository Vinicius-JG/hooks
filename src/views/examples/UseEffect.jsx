import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [number, setNumber] = useState(0)
    const [fatorial, setFatorial] = useState(1)

    const [isEven, setIsEven] = useState('')

    const calcFatorial = (num) => {
        const n = parseInt(num)
        if (n < 0) return -1
        if (n === 0) return 1
        return  n * calcFatorial(n - 1)
    }

    useEffect( () => setFatorial(calcFatorial(number)), [number])
    useEffect( () => setIsEven(number % 2 === 0 ? 'Sim' : 'Não'), [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercício 01'/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title='Exercício 02'/>
            <div className="center">
                <div>
                    <span className="text">É par? </span>
                    <span className="text red">{isEven}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
