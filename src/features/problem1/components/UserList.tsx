import type { User } from '../data/users'

type UserListProps = {
  users: User[]
}

const UserList = ({ users }: UserListProps) => {
  if (users.length === 0) {
    return <p className="p1-empty-state">No users match your search.</p>
  }

  return (
    <ul className="p1-user-list">
      {users.map((user) => (
        <li key={user.id} className="p1-user-item">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  )
}

export default UserList
