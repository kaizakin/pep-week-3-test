type TemperatureInputsProps = {
  celsius: string
  fahrenheit: string
  onCelsiusChange: (value: string) => void
  onFahrenheitChange: (value: string) => void
}

const TemperatureInputs = ({
  celsius,
  fahrenheit,
  onCelsiusChange,
  onFahrenheitChange,
}: TemperatureInputsProps) => {
  return (
    <div className="p3-input-grid">
      <label htmlFor="p3-celsius">Celsius</label>
      <input
        id="p3-celsius"
        type="number"
        value={celsius}
        placeholder="Enter Celsius"
        onChange={(event) => onCelsiusChange(event.target.value)}
      />

      <label htmlFor="p3-fahrenheit">Fahrenheit</label>
      <input
        id="p3-fahrenheit"
        type="number"
        value={fahrenheit}
        placeholder="Enter Fahrenheit"
        onChange={(event) => onFahrenheitChange(event.target.value)}
      />
    </div>
  )
}

export default TemperatureInputs
