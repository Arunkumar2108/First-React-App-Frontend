import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Master from './components/master';
import About from './pages/about';
import AddEdit from './pages/addEdit';
import Home from './pages/home';
import View from './pages/view';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Master />
        <ToastContainer position='top-center' />
        <Switch>
          <Route exact path = "/"  component = {Home} />
          <Route  path = "/add"  component = {AddEdit} />
          <Route  path = "/update/:id"  component = {AddEdit} />
          <Route  path = "/about"  component = {About} />
          <Route  path = "/view/:id"  component = {View} />
         
        </Switch>
        </div>
    </BrowserRouter>

  );
}

export default App;
