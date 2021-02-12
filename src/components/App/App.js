import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
//CSS
import '../../index.css';
import style from '../App/App.module.css'
//Components
import Header from '../Header/Header';
import Home from '../../routes/Home';
import About from '../../routes/About';
import Projects from '../../routes/Projects';
import Contact from '../../routes/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
	<Router>
		<div className={style.wrapper}>
			<Header/>
			
			{/*Wrap a Route around all the components to be shown at the "/" path*/}
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/projects" component={Projects}/>
			<Route path="/contact" component={Contact}/>
			
			<Footer/>
		</div>
	</Router>
  );
}

export default App;
