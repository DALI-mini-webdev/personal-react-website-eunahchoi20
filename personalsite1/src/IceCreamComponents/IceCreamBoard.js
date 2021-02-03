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

  NewIceCreamNameFunction = (event) => {
    this.setState({
      newIceCreamName: event.target.value
    });
  }

  NewIceCreamFlavorFunction = (event) => {
    this.setState({
      newIceCreamFlavor: event.target.value
    });
  }

  NewIceCreamImageFunction = (event) => {
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
  }   

  render() {
    const AllIceCream = this.state.IceCream.entrySeq().map(
      ([id, IceCream]) => {
        return(
          <IceCreamPosting
            Name = {IceCream.name}
            Flavor = {IceCream.flavor}
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
        <input type="text" value ={this.state.newIceCreamFlavor} 
        onChange={this.newIceCreamFlavorFunction} />
        <h4> enter an Image URL:</h4>
        <input type="text" value={this.state.newIceCreamImage} 
        onChange={this.newIceCreamImageFunction} />
        <button onClick={this.saveIceCreaminfo}>Save!</button>
      </div>
    );
  }
}

export default IceCreamBoard;




     
      