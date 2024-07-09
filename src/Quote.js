import { Component } from "react"

class Quote extends Component {

    state = {
        quote: 'Quote text here :)',
        author: 'Noah Strickland'
    }

    getQuote() {

    }



    render() {
        return (
            <div className="quote-box">
                <h1 id="text">{this.state.quote}</h1>
                <h5 id="author">- {this.state.author}</h5>
                <div id="input-wrapper">
                    <button id="new-quote" className="btn" onClick={this.getQuote}>New Quote</button>
                    <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote"><button className="btn">Tweet!</button></a>
                </div>
            </div>
        );
    }
}


export default Quote;