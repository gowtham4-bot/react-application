import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement ,reset} from "./store";
const Todo= () => {
const count = useSelector((state) => state.counter.count);
const dispatch = useDispatch();
return (
<div
style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",

}}><div
style={{
fontSize: "30px",
border: "1px solid black",
padding: "10%",
maxWidth: "300px",
backgroundColor: "gray",
display: "flex",
justifyContent: "center",
alignItems: "center",
margin : "0 auto",
}}
>
<div>Count:{count}</div><br/>

<button onClick={() => dispatch(increment)}>Increment</button><br/><br/>
<button onClick={() => dispatch(decrement)}>Decrement</button><br/><br/>
<button onClick={() => dispatch(reset)}>Reset</button><br/><br/>

</div>
</div>
);
};

export default Todo;