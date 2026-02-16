import { useState } from 'react'
import SearchBar from './components/SearchBar'
import UserCount from './components/UserCount'
import UserList from './components/UserList'
import { usersData } from './data/users'
import { useUserSearch } from './hooks/useUserSearch'
import './App.css'

function App() {
  const [users] = useState(usersData)
  const { searchTerm, setSearchTerm, filteredUsers } = useUserSearch(users)

  return (
    <main className="app">
      <div className="container">
        <h1>User Directory</h1>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <UserCount count={filteredUsers.length} />
        <UserList users={filteredUsers} />
      </div>
    </main>
  )
}

export default App
