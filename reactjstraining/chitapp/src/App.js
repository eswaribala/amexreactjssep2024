import './App.css';
import {Component} from "react";
import {Logo} from './components/logo/Logo'
import {Timer} from './components/Timer/Timer'
import Banner from './components/Banner/Banner'
import Login from './components/Login/Login'
/*
class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div>
            <h1>Chit App</h1>
        </div>);
    }
}
*/
export function App() {
  return (
   <div>
     <header className="App-header">
        <Logo/>
         <h1 className="multicolortext">Chit Application </h1>
        <Timer/>
     </header>
     <section className="Section-header">
         <Banner/>
         <Login/>
     </section>
    </div>
  );
}
//export default App;
