import { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { Display } from './Display'
import { Details } from './Details'
import phoneService from '../services/server'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('');
  const [query, setQuery] = useState('');

  useEffect( () => {
    console.log("effect");
    phoneService.getAllData()
      .then(response => setPersons(response["data"]));
  }, []);

  const displayedPersons = persons.filter(person => 
   person["name"].toLowerCase().includes(query.toLowerCase())
  );

  function updateQuery(e) {
    setQuery(e.target.value);
  }

  function updateNewName (e) {
    setNewName(e.target.value);
  }

  function updateNumber(e) {
    setNumber(e.target.value);
  }

  function formHandler(e) {
    e.preventDefault();
    if (!persons.map(person => person.name).includes(newName)) {
      const newPerson = { name : newName, number : number};
      phoneService.addNew(newPerson)
        .then(response => {
          console.log(response);
          setPersons(persons.concat(newPerson));
          setNewName("");  
          setNumber("");
        });
    } else {
      if (window.confirm(`${newName} is already in phonebook. Do you want to update their number?`)) {
        let toUpdate = persons.find(person => person["name"] === newName);
        let newPerson = {...toUpdate, number : number};
        phoneService.updateEntry(newPerson["id"], newPerson)
         .then(response => console.log(response));
        setNewName("");  
        setNumber("");
      } 
    }
  }

  function deleteDetails(name) {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      // console.log(persons.filter(person => person["name"] !== name));
      phoneService.deleteEntry(persons.find(person => person["name"] === name))
        .then(response => console.log(response));
      setPersons(persons.filter(person => person["name"] !== name));
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query = {query} updateQuery = {updateQuery} />
      <h3>Add a new</h3>
      <Details
        formHandler = {formHandler}
        newName = {newName}
        updateNewName = {updateNewName}
        number = {number}
        updateNumber = {updateNumber}
      />
      <h3>Numbers</h3>
      <Display 
        toDisplay = {displayedPersons} 
        deleteEntry = {deleteDetails}
      />
    </div>
  )
}

export default App
