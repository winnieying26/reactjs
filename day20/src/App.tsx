import { Provider } from "react-redux";
import {store} from "./store/store";
import TodoList from "./components/TodoList";
import "./App.css";
{
  /*
npm install @reduxjs/toolkit react-redux
npm install --save-dev @types/react-redux
 */
}
function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
