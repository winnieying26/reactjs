import "./App.css"
import { User } from "./User"

function App() {

  return (
    <>
   <User name = {"Jane"} age = {34} isStudent = {false}/> 
   <User name = {"Joe"} age = {14} isStudent = {true}/> 
   <User name = {"Ava"} age = {24} isStudent = {false}/> 
    </>
  )
}

export default App
