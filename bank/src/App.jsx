import {Provider} from "react-redux"
import store from "./state/store"
import Bank from "./components/Bank"
function App() {
  

  return (
  <Provider store={store}>
   <Bank/>
  </Provider>
  )
}

export default App
