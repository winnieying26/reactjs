import { Provider } from 'react-redux'
import './App.css'
//import PostsList from './components/PostList'  <PostsList />
import {store} from "./state/index"
import { Bank } from './components/Bank'

function App() {
 

  return (
   <Provider store={store}>
   <Bank />
   </Provider>
  )
}

export default App
