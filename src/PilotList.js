import React from 'react'
import Pilot from './Pilot'

function PilotList(props){
    let pilotList= props.pilot[0]   ?
        props.pilot.map((pilot, idx)=>{
            return <Pilot key={`in-${idx}`} pilotUrl={pilot} />
        
        })
        :
        <p>No Pilot</p>
    return(
        <>
            {pilotList}
        </>
    )
}
export default PilotList