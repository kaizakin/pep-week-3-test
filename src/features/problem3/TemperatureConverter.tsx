import TemperatureInputs from './components/TemperatureInputs'
import { useTemperatureSync } from './hooks/useTemperatureSync'

const TemperatureConverter = () => {
  const { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange } =
    useTemperatureSync()

  return (
    <section className="problem-card">
      <h2>Problem 3: Temperature Converter</h2>
      <TemperatureInputs
        celsius={celsius}
        fahrenheit={fahrenheit}
        onCelsiusChange={handleCelsiusChange}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </section>
  )
}

export default TemperatureConverter
