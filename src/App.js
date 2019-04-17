import React, { Component } from 'react';
import './App.css';
// import bg from  
import Home from './components/Home';
import NavBar from './components/NavBar'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: '',
    }
  }

  WhichView(){
   const { currentView } = this.state;

   switch(currentView){
     default:
     return(
       < Home/>
     )
   }


  }

  render() {
    return (
      <div className="App">
        <div className="background">
        < NavBar/>
        {this.WhichView()}
        </div>
      </div>
    );
  }
}

export default App;
