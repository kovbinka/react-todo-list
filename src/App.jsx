import Header from './components/Header'
import TaskApp from './components/TaskApp'
import './index.css'
import './components/Header.css'
import './components/UserInput.css'
import './components/ListPanel.css'

function App() {

  return (
    <>
    <Header title={"React ToDo List"}/>
    <TaskApp/>
    </>
  )
}

export default App
