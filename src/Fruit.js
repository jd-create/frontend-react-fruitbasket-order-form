function Fruit(props) {
    console.log("What are props", props)
    function changeScore () {
        console.log("55")
    }
    return (
        <div className="aardbeien">
            <p>{props.fruit}</p>
            <button onClick={() => changeScore()}>-</button>
            <p className="counter">0 </p>
            <button>+</button>
        </div>

    )
}

export default Fruit;