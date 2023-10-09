import { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { Display } from './Display'
import { Details } from './Details'
import { getAllData, addNew, deleteEntry } from '../services/server'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('');
  const [query, setQuery] = useState('');

  useEffect( () => {
    console.log("effect");
    getAllData()
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
      addNew(newPerson)
        .then(response => {
          console.log(response);
          setPersons(persons.concat(newPerson));
          setNewName("");  
          setNumber("");
        });
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  function deleteDetails(name) {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      // console.log(persons.filter(person => person["name"] !== name));
      deleteEntry(persons.find(person => person["name"] === name))
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
