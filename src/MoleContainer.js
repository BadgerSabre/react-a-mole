import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useState } from 'react'

const MoleContainer = (props) => {
    let [displayMole, setDisplayMole] = useState(false)

    const handleMole = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    const display = displayMole ? <Mole  setDisplayMole={setDisplayMole} handleMole={handleMole}/> : <EmptySlot setDisplayMole={setDisplayMole}/>

    return (
        <>
            {display}
        </>
    )
}

export default MoleContainer