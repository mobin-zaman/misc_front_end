import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];

    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1> testing out</h1>
            <p className={assignedClasses}> this is really working</p>
            <button className={buttonClass} alt={props.showPersons}
                onClick={props.clicked}> Toggle Persons
        </button>
        </div>
    );
};

export default cockpit; 
