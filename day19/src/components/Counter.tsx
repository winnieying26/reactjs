import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount, reset } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(incrementByAmount(10))}>Increment by 10</button>
        <button onClick={()=> dispatch(incrementAsync(10))}>Increment 10 by Async</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;