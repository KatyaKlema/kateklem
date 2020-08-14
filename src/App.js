import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import { Helmet } from 'react-helmet'
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
            <Helmet>
                <title>{"Kate Klem"}</title>
            </Helmet>
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
