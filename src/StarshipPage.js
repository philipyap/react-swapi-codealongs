import React from 'react'
import {Link} from 'react-router-dom'
import PilotList from './PilotList'

function Starship(props){
    let starship = props.location.state
    return (
        <div className="shipDiv">
            {starship ?
                <>
                <p>Name: {starship.name}</p>
                <p>Model: {starship.model}</p>
                <PilotList pilots={starship.pilots} />
                <Link to={{pathname: '/'}} className="returnBtn">Return</Link>
                </>
            :<h3>Loading ...</h3>}
        </div>
    )
}
export default Starship