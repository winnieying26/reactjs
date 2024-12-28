import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/reducers/counterReducer";
import { RootState, AppDispatch } from "../store/store";

const Counter: React.FC = () => {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      Count: {value}
      <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
