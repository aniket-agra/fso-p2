import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function updateNewName (e) {
    setNewName(e.target.value);
  }

  function formHandler(e) {
    e.preventDefault();
    const newPerson = { name : newName};
    setPersons(persons.concat(newPerson));
    setNewName("");
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map((person, indx) => <li key = {indx}>{person["name"]}</li>)
        }
      </ul>
      
    </div>
  )
}

export default App
