import { Provider } from 'react-redux'
import './App.css'
import PostsList from './components/PostList'
import store from './store/store'

function App() {
 

  return (
   <Provider store={store}>
    <PostsList />
   </Provider>
  )
}

export default App
