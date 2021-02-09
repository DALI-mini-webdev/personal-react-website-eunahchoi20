import React from 'react';
import food from './food.jpg'
import yellow from './MyGif.gif'
import red from './bird.jpg'
import dog from './dog.jpg'
import Navbar from './components/Navbar/Navbar';
import Button from './myButton.js';
import IceCreamBoard from './IceCreamComponents/IceCreamBoard';
import NameBoard from './namecreator/NameBoard';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Instagram from './components/pages/Instagram';
import Art from './components/pages/Art';
import IceCreamCreator from './components/pages/IceCreamCreator';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Instagram' exact component={Instagram} />
          <Route path='/Art' exact component={Art} />
          <Route path='/IceCreamCreator' exact component={IceCreamCreator} />
          <Route path='/SignUp' exact component={SignUp} />
        </Switch>
      </Router>
        <div className="top">
          <h1> Welcome to My Website!</h1>
        </div>
       <div>
         <div className= "intro"> 
         <h2> Eunah Choi</h2>
       </div>
         <div className= "header">
          <h2> Economics major ||
                    Bates College '23 ||
                    Olympia, Washington 
          </h2>
       </div>
        <div>
          <h1>
            Here is some of my art: (Check it out!)
          </h1>
          <a href= "https://www.instagram.com/eunabstract/">
          <Button href= "https://www.instagram.com/eunabstract/"/>
          <h4> 
            Click Here to see my instagram account 
          </h4>
          </a>
        </div>
        <div>
          <IceCreamBoard />
        </div>
        <div>
          <NameBoard />
        </div>
         <img src ={food} height="500px" width="500px" />
         <img src= {yellow} alt="image" height="500px" width="500px" />
        </div>
        <div>
          <img src={red} height="500px" width="500px" />
          <img src={dog} height="500px" width="500px"/>
        </div>
    </div>
  );
}

export default App;


