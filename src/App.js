import React, { Component } from "react";
import './App.css'
import Person from './Person/Person'
import person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { id: "a", name: "Lobna ", age: "20" },
      { id: "b", name: "Nessrine ", age: "20" },
      { id: "c", name: "Ranya ", age: "20" },
      { id: "d", name: "Brahim", age: "20" },
      { id: "e", name: "Lobna ", age: "20" }

    ],
    showPerson: true
  }
  switchNameHandler = () => {
    console.log("Button was clicked !!")
    const newPersons = [...this.state.persons]
    newPersons[0].name = "Ahmed"
    this.setState({
      persons: newPersons

    })
  }
  changeNameHandler = (event, person) => {

    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons[index].name = event.target.value
    this.setState({
      persons: newPersons
    })

  }
  showName = () => {
    this.setState(
      {
        showPerson: !this.state.showPerson
      }
    )
  }
  hideName = (person) => {
    const newPersons = [...this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons.splice(index, 1)


    this.setState(
      {
        persons: newPersons
      }
    )
  }


  render() {
    let personsComponents
    if (this.state.showPerson)
      personsComponents = (
        <div >
          {this.state.persons.map((person) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                changed={(event) => { this.changeNameHandler(event, person) }}
                key={person.id}
                hide={(event) => { this.hideName(person) }} />
            )
          }
          )

          }

        </div>
      )
    else
      personsComponents = null

    return (
      <div className="App">
        <h1 > Hello React App !</h1>
        <button onClick={this.switchNameHandler}>
          SwitchName
        </button>
        <button onClick={this.showName}>
          ToggleName
        </button>

        {personsComponents}


      </div>


    )
  }
}
export default App