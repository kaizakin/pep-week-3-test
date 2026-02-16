import CounterStatus from './components/CounterStatus'
import MessageInput from './components/MessageInput'
import { useCharacterCounter } from './hooks/useCharacterCounter'

const LiveCharacterCounter = () => {
  const CHARACTER_LIMIT = 50
  const { message, updateMessage, totalCharacters, remaining, showWarning } =
    useCharacterCounter(CHARACTER_LIMIT)

  return (
    <section className="problem-card">
      <h2>Problem 2: Live Character Counter</h2>
      <MessageInput
        value={message}
        maxLength={CHARACTER_LIMIT}
        onChange={updateMessage}
      />
      <CounterStatus
        totalCharacters={totalCharacters}
        remainingCharacters={remaining}
        showWarning={showWarning}
      />
    </section>
  )
}

export default LiveCharacterCounter
