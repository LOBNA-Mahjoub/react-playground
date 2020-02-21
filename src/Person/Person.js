import React from 'react'
import './Person.css'
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.hide}> I am {props.name} and I am {props.age} years old</p>
            <input  onChange={ props.changed}/>
        </div>
    )

}
export default person 