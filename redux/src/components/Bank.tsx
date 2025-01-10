import { useDispatch, useSelector} from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

export const Bank =()=>{
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney, bankcrupt} = bindActionCreators(actionCreators, dispatch)
     const amount = useSelector((state: State)=> state.bank)
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={()=>depositMoney(1000)}>Deposit</button>
            <button onClick={()=>withdrawMoney(1000)}>Withdraw</button>
            <button onClick={()=>bankcrupt()}>Bankrupt</button>
        </div>
    )

}