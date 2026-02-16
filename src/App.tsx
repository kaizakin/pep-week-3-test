import UserDirectory from './features/problem1/UserDirectory'
import LiveCharacterCounter from './features/problem2/LiveCharacterCounter'
import TemperatureConverter from './features/problem3/TemperatureConverter'
import FocusTracker from './features/problem4/FocusTracker'
import './App.css'

function App() {
  return (
    <main className="app">
      <div className="container">
        <h1>React Hooks Practice</h1>
        <UserDirectory />
        <LiveCharacterCounter />
        <TemperatureConverter />
        <FocusTracker />
      </div>
    </main>
  )
}

export default App
