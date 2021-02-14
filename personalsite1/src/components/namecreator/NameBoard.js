import React, {Component} from 'react';
import {Map} from 'immutable';
import NamePosting from './NamePosting';

class NameBoard extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      name: Map(),
      nameid: 0,
      firstName: '',
      lastName: '',
    }
  }

  delete = (id) => {
    this.setState({ name: this.state.name.delete(id)})
  }

  save = (id, field) => {
    this.setState({name: this.state.name.update(id, (n) => { return Object.assign({}, n, field);})})
  }

  newfirstNameFunction = (event) => {
    console.log(event.target.value)
    this.setState({
      newfirstName: event.target.value
    });
  }

  newlastNameFunction = (event) => {
    this.setState({
      newlastName: event.target.value
    });
  }

  saveNAMEInfo = () => {
    let NameData= {
      name: this.state.newfirstName,
      lastName: this.state.newlastName,
    }
    this.setState ({
      name: this.state.name.set(this.state.nameID, NameData),
      nameID: this.state.nameID + 1
    });
  }   

  render() {
    const Allname = this.state.name.entrySeq().map(
      ([id, Name]) => {
        return(
          <NamePosting
            save={this.save}
            delete = {this.delete}
            firstName = {Name.firstName}
            lastName = {Name.lastName}
            key={id}
          />
        );
      }
    );
    return (
      <div>
        <h1> this is the Name Generator </h1>
        {Allname}
        <h3> create your name</h3>
        <h4> Enter a name:</h4>
        <input type="text" value={this.state.newNameName} 
        onChange={this.newNameFunction} />
        <h4> enter your second name:</h4>
        <input type="text" value={this.state.newlastName} 
        onChange={this.newlastNameFunction} />
      </div>
    );
  }
}

export default NameBoard;


