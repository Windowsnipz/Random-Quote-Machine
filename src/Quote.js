import { Component } from "react"

class Quote extends Component {

    state = {
        quote: 'Quote text here :)',
        author: 'Noah Strickland'
    }



    render() {
        return (
            <div className="quote-box">
                <h1>{this.state.quote}</h1>
                <h5>- {this.state.author}</h5>
                <div id="input-wrapper">
                    <button id="quote-btn">New Quote</button>
                </div>
            </div>
        );
    }
}


export default Quote;