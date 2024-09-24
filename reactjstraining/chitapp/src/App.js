import './App.css';
import {Component} from "react";
import {Logo} from './components/logo/logo'
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
     </header>
    </div>
  );
}
//export default App;
