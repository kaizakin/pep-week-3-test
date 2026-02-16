import { useState } from 'react'
import SearchBar from './components/SearchBar'
import UserCount from './components/UserCount'
import UserList from './components/UserList'
import { usersData } from './data/users'
import { useUserSearch } from './hooks/useUserSearch'

const UserDirectory = () => {
  const [users] = useState(usersData)
  const { searchTerm, setSearchTerm, filteredUsers } = useUserSearch(users)

  return (
    <section className="problem-card">
      <h2>Problem 1: User Directory</h2>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <UserCount count={filteredUsers.length} />
      <UserList users={filteredUsers} />
    </section>
  )
}

export default UserDirectory
