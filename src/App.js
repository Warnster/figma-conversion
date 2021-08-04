import './App.css';
import { Header } from './components/header/Header'
import {Hero} from './components/Hero'

function App() {
  return (
    <div className="app-container">
      <div className= "background-image">
<img src="Decore.png" /></div>
      <div className= "header">
      <Header/> 
        </div>
      <div className="hero">
      <Hero/>
      </div>
    </div>
    
  );
}



export default App;
