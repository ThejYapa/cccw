import React, {Component} from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import {MuiThemeProvider} from "@material-ui/core";
// import axios from 'axios';

// const style = {
//     marginLeft: 12,
// };

class Health extends Component {
    //state
    constructor(props) {
        super(props);

        this.state = {
            ContData: [],
        };


    };


    //api req
    async componentDidMount() {

        // fetch('http://localhost:8080/health', {
        //     method: 'GET'
        // }).then((res) => {return res.json() })
        //     //.then((jsonData) => {console.log(jsonData);})
        //     .then((jsonData) => {this.state(jsonData);})
        //     .catch((err) => {console.error(err);});
        try {
            const response = await fetch('http://localhost:8080/health', {method: 'GET'})
            const doc = await response.json();
            // console.log(doc)
            this.setState(
                this.state.ContData =  doc
            )

            //break
        } catch (e) {
            console.log(e)
        }
            //console.log(this.state.ContData)
            // const jo = [{key1: '11', key2: '12', key3: '13'}, {key1: '21', key2: '22', key3: '23'}, {
            //     key1: '31',
            //     key2: '32',
            //     key3: '33'
            // }];
            //this.setState(this.state.ContData= jo);
            //this.setState(this.state.ContData = jo);
            //console.log(this.state.ContData)
        }
        // axios.get('http://localhost:51760/Api/Emp/employee')
        //     .then(response => {
        //         console.log(response.data);
        //         //.then(response => response.json())
        //         //.then(data => this.setState(data))
        //         this.setState({ProductData:response.data})
        //             .catch(err => {
        //                 console.log(err)
        //             })
        //     });


        //component
        render()
        {
                // console.log(this.state.ProductData);


                return (

                    <div>

                        <div className="center">
                            {!this.state.ContData ? <p>loading...</p> :
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Satellite&nbsp;ID</TableCell>
                                                <TableCell align="right">last&nbsp;Updated</TableCell>
                                                <TableCell align="right">state</TableCell>
                                                {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
                                                {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {/*LOOP FOR THE TABLE CONETNT*/}
                                            {this.state.ContData.map((row,index) => (
                                                // <TableRow key={row.key1}>
                                                //     <TableCell component="th" scope="row">
                                                //         {row.key1}
                                                //     </TableCell>
                                                //     <TableCell align="right">{row.key2}</TableCell>
                                                //     <TableCell align="right">{row.key3}</TableCell>
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">
                                                        {row.stId}
                                                    </TableCell>
                                                    <TableCell align="right">{row.lastdate}</TableCell>
                                                    <TableCell align="right">{row.state}</TableCell>
                                                    {/*<TableCell align="right">{row.carbs}</TableCell>*/}
                                                    {/*<TableCell align="right">{row.protein}</TableCell>*/}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            }


                        </div>
                    </div>
                );
            }
}
export default Health;
