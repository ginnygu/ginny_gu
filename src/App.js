import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Project/Projects';
import Contact from './components/Contact';
import anime  from  'animejs'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: "",
      prevScrollpos: window.pageYOffset,
      menuClick: false,
      homeMessage: "Hello, I'm Ginny",
    }
    this.ToOpen = this.ToOpen.bind(this);
  }

  componentDidMount() {
    // add event listener for clicks
    document.addEventListener('click', this.handleClick);
    window.addEventListener('scroll', this.handleScroll);
    this.anime();

  }
  componentWillUnmount() {
    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate() {
    this.anime();
  }

  anime() {
    let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    tl.add({
        targets: '.message',
        top: '10%',
        opacity: 1,
        duration: 3000,
        fill: 'rbg(255, 255, 255)',
        easing: 'linear'
    }, '-=2000')
    tl.add({
      targets: '.message2',
      top: '20%',
      opacity: 1,
      duration: 2000,
      fill: 'rbg(255, 255, 255)',
      easing: 'linear'
    }, '-=500')
    tl.add({
      targets: '.message3',
      top:'50%',
      opacity: 1,
      duration: 1000,
      easing: 'linear'
    }, '-=200')
}



  handleScroll = () => {
    const { prevScrollpos } = this.state
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".nav").style.top = "0";
      document.querySelector(".nav").classList.add('sticky')
    } else {
      // document.querySelector(".nav").style.top = "-60px";
      document.querySelector(".nav").classList.add('sticky')
    }
    this.setState({ prevScrollpos: currentScrollPos })
  }


  ToOpen() {
    const { menuClick } = this.state;
    const ham = document.querySelector('.selection-box')
    ham.style.transition = "0.5s";
    if (menuClick === true) {
      document.querySelector('.selection-box').classList.remove('show-box');
      this.setState({
        menuClick: false
      })
    } else {
      ham.classList.add('show-box');
      this.setState({
        menuClick: true
      })
    }
  }

  ToArea = (area) => {
    document.getElementById(area).scrollIntoView({ behavior: "smooth" });
    document.querySelector('.selection-box').classList.remove('show-box');
    this.setState({
      menuClick: false
    })
  }


  render() {
    return (
      <div className="App">
        <div className="background">
          <div id="Top">
          < NavBar
            ToOpen={this.ToOpen}
            ToArea = {this.ToArea}
            menuClick={this.state.menuClick}
          />
          </div>
          <div id="Home">
            < Home 
            homeMessage = {this.state.homeMessage}
            />
          </div>
          <div id="About">
            < About />
          </div>
          <div id="Projects">
            < Projects />
          </div>
          <div id="Contact">
            < Contact />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
