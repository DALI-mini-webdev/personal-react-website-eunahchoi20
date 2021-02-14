import React, {Component} from 'react';
import {Map} from 'immutable';
import IceCreamPosting from './IceCreamPosting';

class IceCreamBoard extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      IceCream: Map(),
      IceCreamid: 0,
      newIceCreamName: '',
      newIceCreamFlavor: '',
      newIceCreamImage: '',
    }
  }

  delete = (id) => {
    this.setState({ IceCream: this.state.IceCream.delete(id)})
  }

  update = (id, field) => {
    console.log("update")
    this.setState({IceCream: this.state.IceCream.update(id, (n) => { return Object.assign({}, n, field);})})
  }

  newIceCreamNameFunction = (event) => {
    console.log(event.target.value)
    this.setState({
      newIceCreamName: event.target.value
    });
  }

  newIceCreamFlavorFunction = (event) => {
    this.setState({
      newIceCreamFlavor: event.target.value
    });
  }

  newIceCreamImageFunction = (event) => {
    this.setState({
      newIceCreamImage: event.target.value
    });
  }


  saveIceCreamInfo = () => {
    let IceCreamData= {
      name: this.state.newIceCreamName,
      flavor: this.state.newIceCreamFlavor,
      image: this.state.newIceCreamImage,
    }
    this.setState ({
      IceCream: this.state.IceCream.set(this.state.IceCreamID, IceCreamData),
      IceCreamID: this.state.IceCreamID + 1
    });
    console.log("here");
  }   

  render() {
    const AllIceCream = this.state.IceCream.entrySeq().map(
      ([id, IceCream]) => {
        return(
          <IceCreamPosting
            update={this.update}
            delete = {this.delete}
            name = {IceCream.name}
            flavor = {IceCream.flavor}
            IceCreamURL= {IceCream.image}
            key={id}
          />
        );
      }
    );
    return (
      <div>
        <h1> this is the ice cream board </h1>
        {AllIceCream}
        <h3> Make Your own ice cream!</h3>
        <h4> Enter a name:</h4>
        <input type="text" value={this.state.newIceCreamName} 
        onChange={this.newIceCreamNameFunction} />
        <h4> enter a flavor:</h4>
        <input type="text" value={this.state.newIceCreamFlavor} 
        onChange={this.newIceCreamFlavorFunction} />
        <h4> enter an Image URL:</h4>
        <input type="text" value={this.state.newIceCreamImage} 
        onChange={this.newIceCreamImageFunction} />
        <button onClick={this.saveIceCreamInfo}>Save!</button>
      </div>
    );
  }
}

export default IceCreamBoard;




     
      