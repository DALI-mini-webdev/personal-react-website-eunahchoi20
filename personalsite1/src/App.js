import React from 'react';
import food from './food.jpg'
import yellow from './MyGif.gif'
import red from './bird.jpg'
import dog from './dog.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
        <html> 
      <head>
        <title> Eunah's Website </title> 
      </head>
      <body> 
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
                    Olympia, Washington </h2>
       </div>
        <div>
                  <h3>
                    Here is some of my art: (Check it out!)
                  </h3>
                  <a href= "https://www.instagram.com/eunabstract/">
            <h4> 
              Click Here to see my instagram account 
            </h4>
          </a>
        </div>
        <div></div>
         <img src ={food} height="500px" width="500px" />
         <img src= {yellow} alt="image" height="500px" width="500px" />
        </div>
        <div>
          <img src={red} height="500px" width="500px" />
          <img src={dog} height="500px" width="500px"/>
        </div>
      </body>
    </html>
      
    </div>
  );
}

export default App;
