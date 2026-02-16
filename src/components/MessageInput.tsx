type MessageInputProps = {
  value: string
  maxLength: number
  onChange: (value: string) => void
}

const MessageInput = ({ value, maxLength, onChange }: MessageInputProps) => {
  return (
    <div className="message-input">
      <label htmlFor="message">Type your message</label>
      <textarea
        id="message"
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
