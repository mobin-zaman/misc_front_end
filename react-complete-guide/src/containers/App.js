import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';




//${} it allows to dynamically insert something
class App extends Component {

  constructor(props) {
    super(props);

    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfda', ame: 'Max', age: 28 },
      { id: '1341', name: 'FuckNo', age: 48 },
      { id: '134134', ame: 'Dynampic', age: 24 }
    ], otherState: 'some other value',
    showPersons: false
  }


  static getDerivedStateFromProps(props) {
    console.log('[App.js] getDerivedStateFrom')
  }

  //you use handler for event handler functions, good practise
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;



    this.setState({
      persons: persons
    })
  }


  deletePersonHandler = (personIndex) => {

    //const persons = this.state.persons.slice(); //it simply copies the whole array, not the pointer
    const persons = [...this.state.persons]; //it spreads the array 
    persons.splice(personIndex, 1); //this simply removes one element from the array
    this.setState({ persons: persons });

  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {



    let persons = null;

    if (this.state.showPersons) {
      persons = (

        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>

      );


    }

    //these are the class names in the css files
    // let classes = ['red', 'bold'].join(' '); //OUTPUT: red bold




    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>

    );
  }
}

//Radium() is a higher order component
export default App;
