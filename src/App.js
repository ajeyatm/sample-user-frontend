import './App.css'
import ListUsers from './components/ListUsers'
import AddUser from './components/AddUser'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Users</h2>
      </header>

      <AddUser />
      <ListUsers />
    </div>
  )
}

export default App
