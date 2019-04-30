import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Project/Projects';
import Contact from './components/Contact'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: '',
    }
    this.ToTop = this.ToTop.bind(this);
    this.ToAbout = this.ToAbout.bind(this);
    this.ToProjects  = this.ToProjects.bind(this);
    this.ToContact = this.ToContact.bind(this);
  }
  ToTop(){
    document.getElementById('Home').scrollIntoView({behavior: "smooth"});
  }

  ToAbout(){
    document.getElementById('About').scrollIntoView({behavior: "smooth"});
  }

  ToProjects(){
    document.getElementById('Projects').scrollIntoView({behavior: "smooth"});
  }

  ToContact(){
    document.getElementById('Contact').scrollIntoView({behavior: "smooth"});
  }

  // WhichView(){
  //  const { currentView } = this.state;

  //  switch(currentView){
  //    default:
  //    return(
  //      < Home/>
  //    )
  //  }


  // }

  render() {
    return (
      <div className="App">
        <div className="background">
          < NavBar 
            ToTop = {this.ToTop}
            ToAbout  = {this.ToAbout}
            ToProjects = {this.ToProjects}
            ToContact = {this.ToContact}
          />
          <div id="Home">
            < Home />
          </div>
          <div id="About">
            < About />
          </div>
          <div id="Projects">
            < Projects />
          </div>
          <div id="Contact">
            < Contact/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
