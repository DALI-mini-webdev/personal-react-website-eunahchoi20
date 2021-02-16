import React, { Component } from 'react';
import Firebase from '../Firebase/index';
import '../styles.css';

class ToDoPost extends Component {
    constructor(props) {
        super(props);
            this.state = {

            }
        }
        
        deletePost = () => {

        } 

        render() {
            return(
                <div className= '.todoPostStyle'> 
                <p> {this.props.title}</p>
                <p>{this.props.task}</p>
                <button onClick={this.deletePost}> delete</button>
               </div>
            )
        }
    }

    export default ToDoPost;