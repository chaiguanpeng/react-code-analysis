import React from 'react';
class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}
class WordAdder extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // This section is bad style and causes a bug
        const words = this.state.words;
        console.log(words);
        words.push('marklar');
        this.setState({words: words});
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}

export default WordAdder
