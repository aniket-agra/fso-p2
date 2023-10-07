import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone : "000"
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState("");

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
      <form onSubmit = {formHandler}>
        <div>
          name: <input
                  type = "text"
                  value = {newName}
                  onChange = {updateNewName}
                />
        </div>
        <div>
          number: <input 
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
      <ul>
        {
          persons.map(person => 
            <li key = {person["name"]}>{person["name"]} {person["phone"]}</li>
          )
        }
      </ul>
      
    </div>
  )
}

export default App
