import logo from './logo.svg';
import './App.css';
import {useState, Fragment} from "react";


function Temp(){

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

function App() {

  return (
      <div className="App">

      <Temp/>
      </div>);

}

export default App;
