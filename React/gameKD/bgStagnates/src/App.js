import React, { Component } from 'react';
import './App.css';
import SelState from './component/SelState';
import Header from './component/Header';
import RatingList from './component/RatingList';
import ViewGraph from './component/ViewGraph';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*Header*/}
        <Header/>
        <section className="inner">
          {/*상태 선택*/}
          <SelState/>
          {/*전적 리스트*/}
          <RatingList/>
        </section>
        <section className="inner">
            <ViewGraph/>
        </section>
        <p className="App-intro">ⓒ Mobssie Corp.</p>
      </div>
    );
  }
}

export default App;
