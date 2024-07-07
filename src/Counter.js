import { Component, useState } from "react";

class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increment}>Increment+</button>
            </>
        );
    }
}

export default Counter;



// functional component using state with 'useState' hook
/*
const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState = prevState + 1);

        console.log(count);
    }

    return (
        <>
            <div>Result: {count}</div>
            <button onClick={increment}>Increment +</button>
        </>
    );
}
*/