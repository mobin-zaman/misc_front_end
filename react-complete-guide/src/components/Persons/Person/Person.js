import React from 'react';
import classes from './Person.css';
const person = (props) => { //this has advantage of this keyword? is the reason the private function was not working?


    return ( //classhname was missing
        <div className={classes.Person}>

            < p onClick={props.click} > I'm {props.name} and I am {props.age} years old</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}
export default person;