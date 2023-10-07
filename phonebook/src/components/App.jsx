import { useState } from 'react'
// import { Filter } from './Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone : "000" }
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('');
  const [query, setQuery] = useState('');

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
      const newPerson = { name : newName, phone : number};
      setPersons(persons.concat(newPerson));
      setNewName("");  
      setNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: 
        <input  
            type = "text"
            value = {query}
            onChange = {updateQuery}
        />
      </div>
      <h2>Add a new</h2>
      <form onSubmit = {formHandler}>
        <div>
          name: 
          <input
            type = "text"
            value = {newName}
            onChange = {updateNewName}
          />
        </div>
        <div>
          number: 
          <input 
            type = "text"
            value = {number}
            onChange = {updateNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        displayedPersons.map(person => 
          <div key = {person["name"]}>{person["name"]} {person["phone"]}</div>
        )
      }
    </div>
  )
}

export default App
