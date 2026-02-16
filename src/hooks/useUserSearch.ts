import { useEffect, useState } from 'react'
import type { User } from '../data/users'

export const useUserSearch = (users: User[]) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users)

  useEffect(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    const nextUsers = users.filter((user) =>
      user.name.toLowerCase().includes(normalizedSearch),
    )

    setFilteredUsers(nextUsers)
  }, [searchTerm, users])

  return {
    searchTerm,
    setSearchTerm,
    filteredUsers,
  }
}
