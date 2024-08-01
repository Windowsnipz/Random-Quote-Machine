import React, { Component } from 'react';

class Quote extends Component {

    state = {
        quote: '',
        author: ''
    }

    getQuote = () => {
        
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                const randomIndex = Math.floor(Math.random() * data.length); // get random index in the quote data
                const chosenQuote = data[randomIndex].text;
                let chosenAuthor = data[randomIndex].author;
                if (chosenAuthor === 'type.fit') {
                    chosenAuthor = 'unknown';
                } else if (chosenAuthor) {
                    chosenAuthor = chosenAuthor.replace(', type.fit', ''); // replaces the wonky API string
                }

                this.setState({
                    quote: chosenQuote,
                    author: chosenAuthor
                })

            })
            .catch(error => console.log('Error: ' + error));
    }

    componentDidMount() {
        this.getQuote();
    }

    render() {
        return (
            <div id="quote-box">
                <h1 id="text">"{this.state.quote}"</h1>
                <h5 id="author">- {this.state.author}</h5>
                <div id="input-wrapper">
                    <button id="new-quote" className="btn" onClick={this.getQuote}>New Quote</button>
                    <a href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.state.quote)} target="_blank" id="tweet-quote">
                        <button className="btn">Tweet!</button>
                    </a>
                </div>
            </div>
        );
    }
}


export default Quote;