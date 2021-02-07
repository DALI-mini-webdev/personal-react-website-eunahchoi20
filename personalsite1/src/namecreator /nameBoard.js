import React, {Component} from 'react';
import {Map} from 'immutable';
import namePosting from './namePosting';

class nameBoard extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      name: Map(),
      nameid: 0,
      nameName: '',
      secondName: '',
    }
  }

  delete = (id) => {
    this.setState({ name: this.state.name.delete(id)})
  }

  save = (id, field) => {
    this.setState({name: this.state.name.update(id, (n) => { return Object.assign({}, n, field);})})
  }

  newnameNameFunction = (event) => {
    console.log(event.target.value)
    this.setState({
      newnameName: event.target.value
    });
  }

  newsecondNameFunction = (event) => {
    this.setState({
      newsecondName: event.target.value
    });
  }

  saveNAMEInfo = () => {
    let NameData= {
      name: this.state.newnameName,
      secondName: this.state.newsecondName,
    }
    this.setState ({
      name: this.state.name.set(this.state.nameID, nameData),
      nameID: this.state.nameID + 1
    });
  }   

  render() {
    const Allname = this.state.name.entrySeq().map(
      ([id, name]) => {
        return(
          <namePosting
            save={this.save}
            delete = {this.delete}
            name = {name.name}
            secondName = {name.secondName}
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
        <input type="text" value={this.state.newnameName} 
        onChange={this.newnameFunction} />
        <h4> enter your second name:</h4>
        <input type="text" value={this.state.newsecondName} 
        onChange={this.newsecondNameFunction} />
      </div>
    );
  }
}

export default nameBoard;


