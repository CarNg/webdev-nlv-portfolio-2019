import React from 'react';
//CSS
import '../../index.css';
import style from './App.module.css';
//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className={style.homeWrapper}>
    	<Header/>
		<div className={style.centerText}>
    		<hr className={style.line}/>
    		<p className={style.title}>STAY TUNED</p>
    		<hr className={style.line}/>
    		<p className={style.subtitle}>New and improved website coming soon</p>
    	</div>
    	<Footer/>
    </div>
  );
}

export default App;
