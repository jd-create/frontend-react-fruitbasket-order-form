function Fruit(props) {
    console.log("What are props", props)
    return (
        <div className="aardbeien">
            <p>{props.fruit}</p>
            <button>-</button>
            <p className="counter">0 </p>
            <button>+</button>
        </div>

    )
}

export default Fruit;