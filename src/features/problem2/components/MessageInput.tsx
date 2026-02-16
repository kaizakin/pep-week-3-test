type MessageInputProps = {
  value: string
  maxLength: number
  onChange: (value: string) => void
}

const MessageInput = ({ value, maxLength, onChange }: MessageInputProps) => {
  return (
    <div className="p2-message-input">
      <label htmlFor="p2-message">Type your message</label>
      <textarea
        id="p2-message"
        rows={5}
        value={value}
        maxLength={maxLength}
        placeholder="Write up to 50 characters..."
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default MessageInput
