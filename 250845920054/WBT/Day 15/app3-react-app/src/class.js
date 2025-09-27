const { Component } = require("react");

class TextCaseConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            convertedText: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleUpperCase = () => {
      //  console.log(this.state.text.toUpperCase);
        this.setState({
            convertedText: this.state.text.toUpperCase()
        });
    }

    handleLowerCase = () => {
       // console.log(this.state.text.toUpperCase);
        this.setState({
            convertedText: this.state.text.toLowerCase()
        });
    }

    render() {
        return (
            <>
                <div>
                    <input
                        type="text"
                        placeholder="Enter text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleUpperCase}>To Upper Case</button>
                    <button onClick={this.handleLowerCase}>To Lower Case</button>
                    <p>Converted Text: {this.state.convertedText}</p>
                </div>
            </>
        );
    }
}

export default TextCaseConverter;
