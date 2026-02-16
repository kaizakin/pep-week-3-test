type CounterStatusProps = {
  totalCharacters: number
  remainingCharacters: number
  showWarning: boolean
}

const CounterStatus = ({
  totalCharacters,
  remainingCharacters,
  showWarning,
}: CounterStatusProps) => {
  return (
    <section className="counter-status">
      <p>Total characters: {totalCharacters}</p>
      <p>Remaining characters: {remainingCharacters}</p>
      {showWarning && (
        <p className="warning">Warning: You have 10 or fewer characters left.</p>
      )}
    </section>
  )
}

export default CounterStatus
