import './App.css';
import {Component, useState} from "react";
import {Logo} from './components/logo/Logo'
import {Timer} from './components/Timer/Timer'
import Banner from './components/Banner/Banner'
import Login from './components/Login/Login'
import Dashboard from "./components/Dashboard/Dashboard";
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

  const [loginStatus,setLoginStatus]=useState(false);

  function handleLoginStatus(value){
      setLoginStatus(value);
  }

  return (
   <div>
     <header className="App-header">
        <Logo/>
         <h1 className="multicolortext">Chit Application </h1>
        <Timer/>
     </header>
       {
           (!loginStatus)?
     <section className="Section-header">
         <Banner/>
         <Login LoginState={handleLoginStatus}/>
     </section>
          :
    <section>
        <Dashboard/>
    </section>
       }
    </div>
  );
}
//export default App;
