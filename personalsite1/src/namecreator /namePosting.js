import React, { Component } from 'react';

class namePosting extends Component {
    constructor(props) {
        super(props);
        this.state = {editing: false, newTitle: ''};
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
        //console.log("deleted")
    }

    editName = () => {
        this.setState({editing: true})
    }

    changeNewTitle =(event) => {
        this.setState({newTitle: event.target.value})
    }

    submit = () => {
        var newName = {
            title: this.state.newName
        }
        this.props.save(this.props.id, newName);

        this.setState({editing: false});
    }

    render() {
    var editBoxOrEditButton = null;

    if(this.state.editing){
        editBoxOrEditButton = (
            <div>
                <input value={this.state.newTitle} onChange={this.changeNewTitle} placeholder= "New Icecream"> </input>
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
      return (
        <div>
            <p> {this.props.name}, {this.props.flavor}</p>
            <button onClick={this.deletePosting}>Delete</button>  
            {editBoxOrEditButton}   
         </div>
    );
  }
}

export default namePosting; 