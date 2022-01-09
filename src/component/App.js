import React, { Component } from 'react';
import {
  Routes as Switch,
  Route
} from "react-router-dom";
import Login from './login';
import Signup from './signup';
import StartGame from './startGame';
import Game from './game';
import Result from './result';
import NotFound from './notFound';

import { connect } from 'react-redux';

import './App.scss';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <Switch>
          <Route path='/' element={(!this.props.isLogin) ? <Login /> : <StartGame />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/start' element={<StartGame />} />
          <Route path='/game' element={<Game />} />
          <Route path='/result' element={<Result />} />
          <Route path='*' element={<NotFound />} />
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (store) => {
  return {
    isLogin: store.isLogin
  };
};


export default connect(mapStateToProps)(App);