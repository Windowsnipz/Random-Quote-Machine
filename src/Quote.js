import { Component } from "react"

class Quote extends Component {

    state = {
        quote: 'Quote text here :)',
        author: 'Noah Strickland'
    }



    render() {
        return (
            <div className="quote-box">
                <h1 id="text">{this.state.quote}</h1>
                <h5 id="author">- {this.state.author}</h5>
                <div id="input-wrapper">
                    <button id="new-quote">New Quote</button>
                </div>
            </div>
        );
    }
}


export default Quote;