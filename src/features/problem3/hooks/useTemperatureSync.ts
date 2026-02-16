import { useEffect, useState } from 'react'

type ActiveField = 'celsius' | 'fahrenheit'

const toFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32
const toCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9

const formatNumber = (value: number) => {
  if (Number.isNaN(value) || !Number.isFinite(value)) {
    return ''
  }

  return Number(value.toFixed(2)).toString()
}

export const useTemperatureSync = () => {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')
  const [activeField, setActiveField] = useState<ActiveField>('celsius')

  useEffect(() => {
    if (activeField === 'celsius') {
      if (celsius.trim() === '') {
        if (fahrenheit !== '') {
          setFahrenheit('')
        }
        return
      }

      const parsed = Number(celsius)
      const nextValue = Number.isNaN(parsed) ? '' : formatNumber(toFahrenheit(parsed))
      if (nextValue !== fahrenheit) {
        setFahrenheit(nextValue)
      }
      return
    }

    if (fahrenheit.trim() === '') {
      if (celsius !== '') {
        setCelsius('')
      }
      return
    }

    const parsed = Number(fahrenheit)
    const nextValue = Number.isNaN(parsed) ? '' : formatNumber(toCelsius(parsed))
    if (nextValue !== celsius) {
      setCelsius(nextValue)
    }
  }, [activeField, celsius, fahrenheit])

  const handleCelsiusChange = (value: string) => {
    setActiveField('celsius')
    setCelsius(value)
  }

  const handleFahrenheitChange = (value: string) => {
    setActiveField('fahrenheit')
    setFahrenheit(value)
  }

  return {
    celsius,
    fahrenheit,
    handleCelsiusChange,
    handleFahrenheitChange,
  }
}
