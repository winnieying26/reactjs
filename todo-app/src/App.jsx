
import {Provider} from "redux"
import store from "./state/store"
function App() {
 

  return (
   <Provider store={store}>
    <AddTodo/>
   </Provider>
  )
}

export default App
