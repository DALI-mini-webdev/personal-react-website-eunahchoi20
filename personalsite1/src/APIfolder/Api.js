import { Component } from "react";
import axios from 'axios';

class App extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            data:null
        }
    }
     
    fetchData= () => {
        axios.get("http://jservice.io/api/random")
            .then((response) => {
                this.setState({
                    data: response.data[0]
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    renderTrivia = () => {
        if (this.state.data) {
            return(
                <div> 
                    <div> title: {this.state.data.title} </div> 
                    <div> 
                        {
                            this.state.data.lines.map((line) =>
                            { 
                                return( <div> {line} </div>);
                            })
                        }
                    </div>
                </div>

            )

        } else{ 
            return(<div>no questions avaiable </div>)
        }
    }
    render() {
        console.log(this.state.data);
        return (
            <div> 
                <div>{this.state.data}</div>
                <div> Click below for trivia questions </div>
                <button onClick = {this.fetchData}> click me! </button>
                {this.renderTrivia}
            </div>
        );
    }

}

export default App;