type UserCountProps = {
  count: number
}

const UserCount = ({ count }: UserCountProps) => {
  return <p className="p1-user-count">Total users found: {count}</p>
}

export default UserCount
