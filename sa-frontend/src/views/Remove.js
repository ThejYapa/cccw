import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Polarity from "../components/Polarity";

const style = {
    marginLeft: 12,
};

class Remove extends Component {
    //state
    constructor(props) {
        super(props);
        this.text1 = React.createRef();
        this.state = {
            sentence: '',


            polarity: undefined
        };
    };
    //api req
    analyzeSentence() {
        const id =this.textField0.getValue()
        console.log(id);
        fetch('http://localhost:8080/delete/{id}', { //'+id+'
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(res)
        })
            .then(response => response.json())
            .then(data => this.setState(data))
            .catch(err => {
                console.log(err)})
        ;
    }

    onEnterPress = e => {
        if (e.key === 'Enter') {
            this.analyzeSentence();
        }
    };

    //component
    render() {
        const polarityComponent = this.state.polarity !== undefined ?
            <Polarity sentence={this.state.sentence} polarity={this.state.polarity}/> :
            null;

        return (
            <MuiThemeProvider>

                <div className="centerize">
                    <form className="content" noValidate autoComplete="off">
                        <h2>Remove Satellite</h2>
                        <TextField ref={ref => this.textField0 = ref} onKeyUp={this.onEnterPress.bind(this)}
                                   hintText="Type satellite ID to remove."/>
                        {/*<TextField ref={this.text1} onKeyUp={this.onEnterPress.bind(this)}*/}
                        {/*           hintText="Type your sentence."/>*/}
                        <br />
                        <RaisedButton  label="Send" style={style} onClick={this.analyzeSentence.bind(this)}/>
                        {polarityComponent}
                    </form>

                    {/*<Paper zDepth={1} className="content">*/}
                    {/*    <h2>Sentiment Analyser</h2>*/}
                    {/*    <TextField ref={ref => this.textField = ref} onKeyUp={this.onEnterPress.bind(this)}*/}
                    {/*               hintText="Type your sentence."/>*/}
                    {/*    <input type='text' ref={this.text1} />*/}
                    {/*    /!*<TextField ref={this.text1} onKeyUp={this.onEnterPress.bind(this)}*!/*/}
                    {/*    /!*           hintText="Type your sentence."/>*!/*/}
                    {/*    <RaisedButton  label="Send" style={style} onClick={this.analyzeSentence.bind(this)}/>*/}
                    {/*    {polarityComponent}*/}
                    {/*</Paper>*/}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Remove;