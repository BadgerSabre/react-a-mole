import { useEffect } from 'react'
import emptySlot from './molehill.png'

const EmptySlot = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)}, randSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <>
            <img style={{'width': '30vw'}} src={emptySlot}/>
        </>
    )
}

export default EmptySlot