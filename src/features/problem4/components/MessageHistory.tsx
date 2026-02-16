type MessageHistoryProps = {
  messages: string[]
}

const MessageHistory = ({ messages }: MessageHistoryProps) => {
  if (messages.length === 0) {
    return <p className="p4-empty">No messages saved yet.</p>
  }

  return (
    <ul className="p4-history-list">
      {messages.map((message, index) => (
        <li key={`${message}-${index}`}>{message}</li>
      ))}
    </ul>
  )
}

export default MessageHistory
