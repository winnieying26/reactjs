import Heading from "./components/Heading"
import {Section} from "./components/Section"
import Counter from "./components/counter"

import { useState } from "react"


function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
    <Heading title = {"Hello"}/>
    <Section title={"Different Title"}>This is my subheading</Section>
    <Counter setCount={setCount}>Count is {count}</Counter>
    </>
   
  )
}

export default App
