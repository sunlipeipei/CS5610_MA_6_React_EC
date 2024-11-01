import './App.css'
import BoxGroup from './BoxGroup'
import { BoxGroupProvider } from './BoxGroupContext'


function App() {
  return (
    <BoxGroupProvider>
      <BoxGroup></BoxGroup>
    </BoxGroupProvider>
  )
}

export default App
