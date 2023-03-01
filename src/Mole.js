import { useEffect } from 'react'
import mole from './Assets/mole.png'


const Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)}, randSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <>
            <img style={{'width': '30vw'}} alt="mole" src={mole} onClick={props.handleMole}/>
        </>
    )
}

export default Mole