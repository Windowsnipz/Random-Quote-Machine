import { Component } from "react"

class Quote extends Component {

    state = {
        quote: '',
        author: ''
    }



    render() {
        return (
            <div className="section">
                <h1>Quote text here :)</h1>
                <div id="input-wrapper">
                    <button id="quote-btn">New Quote</button>
                </div>
            </div>
        );
    }
}


export default Quote;