import { Component } from "react"

class Quote extends Component {

    state = {
        quote: '',
        author: ''
    }



    render() {
        return (
            <div className="section">
                <h1>Generate a random quote from Kanye West!</h1>
                <div id="input-wrapper">
                    <button id="quote-btn">What's up Kanye?</button>
                </div>
            </div>
        );
    }
}


export default Quote;