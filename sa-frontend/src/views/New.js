import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Polarity from "../components/Polarity";
import axios from "axios";

const style = {
    marginLeft: 12,
};

class New extends Component {
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
        //const text =  this.text1.current.value;
        const res ={stId: this.textField0.getValue(),
            launchTime: this.textField1.getValue(),
            launchVehicle: this.textField2.getValue(),
            orbitAltitude: this.textField3.getValue(),
            inclination: this.textField4.getValue()}
        //console.log(text);
        console.log(JSON.stringify(res));

        //const fetch = require('node-fetch');
        // fetch('http://localhost:8080/newsat', {
        //     //mode: 'no-cors',
        //     method: 'POST',
        //     headers: {'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'},
        //     //body: res
        //     body: JSON.stringify(res)})//{sentence: this.textField.getValue()})
        //     .then(response => response.json())
        //     //.then(json => console.log(json))
        //     //.then(data => this.setState(data))
        //     .catch(err => console.log(err))

        let axios = require('axios');
        axios({
            method: "post",
            url: "http://localhost:8080/newsat",
            data: JSON.stringify(res),
            headers: { "Content-Type": "application/json" ,
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Access-Control-Max-Age": 3600},
            //         }
        })
    }

    onEnterPress = e => {
        if (e.key === 'Enter') {
            this.analyzeSentence();
        }
    };

    //component
    render(){
        const polarityComponent = this.state.polarity !== undefined ?
            <Polarity sentence={this.state.sentence} polarity={this.state.polarity}/> :
            null;

        return (
            <MuiThemeProvider>

                <div className="centerize">
                    <form className="content" noValidate autoComplete="off">
                        <h2>Add New Satellite</h2>
                        <TextField ref={ref => this.textField0 = ref} onKeyUp={this.onEnterPress.bind(this)}
                                   hintText="Type satellite ID."/>
                        <TextField ref={ref => this.textField1 = ref} onKeyUp={this.onEnterPress.bind(this)}
                                   hintText="Type Launch time."/>
                        <TextField ref={ref => this.textField2 = ref} onKeyUp={this.onEnterPress.bind(this)}
                                   hintText="Type Launch vehicle."/>
                        <TextField ref={ref => this.textField3 = ref} onKeyUp={this.onEnterPress.bind(this)}
                                   hintText="Type Orbit altitude."/>
                        <TextField ref={ref => this.textField4 = ref} onKeyUp={this.onEnterPress.bind(this)}
                                   hintText="Type Inclination."/>
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

export default New;