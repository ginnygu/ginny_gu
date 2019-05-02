import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Project/Projects';
import Contact from './components/Contact';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: '',
    }
  }

  componentWillMount() {
    // add event listener for clicks
    document.addEventListener('click', this.handleClick, false);
  }

  

  handleClick = e => {
    // this is the key part - ReactDOM.findDOMNode(this) gives you a reference
    // to your CalendarPopup component;
    // e.target is the element which was clicked upon.
    // check whether the element clicked upon is in your component - if not,
    // then call the close logic
    if(ReactDOM.findDOMNode(this).contains(e.target)) {
      document.querySelector('.selection-box').classList.remove('show-box')
    }else{
      this.ToOpen();
    }
  }


  ToOpen(){
    const ham = document.querySelector('.selection-box')
    ham.style.transition = "0.5s";
    ham.classList.add('show-box');
  }
  ToTop(){
    document.getElementById('Top').scrollIntoView({behavior: "smooth"});
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
        <div id="Top"></div>
          < NavBar 
            ToTop = {this.ToTop}
            ToAbout  = {this.ToAbout}
            ToProjects = {this.ToProjects}
            ToContact = {this.ToContact}
            ToOpen = {this.ToOpen}
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
