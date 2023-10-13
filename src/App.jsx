import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <header>
        <button onClick={() => setSelectedContactId(() => null )}>Home</button>
      </header>
      <div className="table">
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
      </div>
    </>
  )};

export default App
