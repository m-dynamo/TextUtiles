import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showalert("Dark mode enabled successfully",'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode enabled successfully",'success')
    }
  }
  return (
    <>
  <Router>
    <div className="App">
      <Navbar title='TextUtils' mode ={Mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showalert={showalert} heading='Enter the text to analyze below'mode = {Mode}/>
          </Route>
      </Switch>
      </div>
    </div>
  </Router>
  </>
  );
}

export default App;
