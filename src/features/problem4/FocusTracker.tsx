import { useEffect, useRef, useState } from 'react'
import MessageHistory from './components/MessageHistory'

const FocusTracker = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [focusCount, setFocusCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const messageHistoryRef = useRef<string[]>([])

  useEffect(() => {
    document.title = `Focuses: ${focusCount} | Saved: ${messages.length}`

    return () => {
      document.title = 'React Hooks Practice'
    }
  }, [focusCount, messages.length])

  const handleFocus = () => {
    setFocusCount((count) => count + 1)
  }

  const handleSaveMessage = () => {
    const value = inputRef.current?.value.trim() ?? ''
    if (value.length === 0) {
      return
    }

    messageHistoryRef.current = [...messageHistoryRef.current, value]
    setMessages(messageHistoryRef.current)

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <section className="problem-card">
      <h2>Problem 4: Focus Tracker</h2>
      <div className="p4-input-row">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message"
          onFocus={handleFocus}
        />
        <button type="button" onClick={handleSaveMessage}>
          Save Message
        </button>
        <button type="button" onClick={focusInput}>
          Focus Input
        </button>
      </div>
      <p className="p4-focus-count">Input focused: {focusCount} times</p>
      <MessageHistory messages={messages} />
    </section>
  )
}

export default FocusTracker
