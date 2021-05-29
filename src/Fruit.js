import {useState} from "react";


function Fruit(props) {
    console.log("What are props", props)
    const [count, setCount] = useState(0);
    function changeCount (number) {
        setCount(count+number);
    }
    return (
        <div className="aardbeien">
            <p>{props.fruit}</p>
            <button onClick={() => changeCount(-1)}>-</button>
            <p className="counter">{count}</p>
            <button onClick={() => changeCount(+1)}>+</button>
        </div>

    )

}
export default Fruit;