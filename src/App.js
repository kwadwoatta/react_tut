import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'coam3', name : 'Prince', age: 19},
      {id: 'c04mc', name: 'Priscilla', age: 19},
      {id: 'vmoe3', name: 'Alfreda', age: 11}
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();  // OR
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    // const Person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }
 
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              // changed = {this.state.nameChangedHandler()} 
              name = {person.name} 
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)} /> 
          })}
            
        </div>   
      )
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red bold']
    }

    return (  
        <div className="App">
          <h1>Hi I'm a react app</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button 
          style = {style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null', 'Hi, I\'m a react app'))
  }
}

export default App;
