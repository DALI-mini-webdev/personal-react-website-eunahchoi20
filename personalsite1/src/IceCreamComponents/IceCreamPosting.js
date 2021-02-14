import React, { Component } from 'react';

class IceCreamPosting extends Component {
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
        this.props.update(this.props.key, this.state.newName);

        this.setState({editing: false});
    }

    render() {
    const editBoxOrEditButton = () => {
        if (this.state.editing) {
            return ( 
                <div>
                    <input value={this.state.newTitle} onChange={this.changeNewTitle} placeholder= "New Icecream"/> 
                    <button onClick={this.submit}>submit</button>
                </div>
            )
        }
        else {
            return (
                <button onClick={this.editName}> edit </button>
            )
        }
    }

      return (
        <div>
            <p> {this.props.name}, {this.props.flavor}</p>
            <img src= { this.props.IceCreamURL } alt= 'Image' />
            <button onClick={this.deletePosting}>Delete</button>  
            {editBoxOrEditButton()}   
         </div>
    );
  }
}

export default IceCreamPosting; 
