/**
 * Root Component
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Article from './components/article'
import Kakao from './components/Kakao'
import kakaopay from './lib/kakaopay'
import Login from './login/login'
import Butt from './components/button.svg'
import Back from './components/back.svg'
import Broadcast from './components/Broadcast'
import { Router, browserHistory } from 'react-router';
// import './App.css';
// Import Routes
// import routes from './routes';

// Base stylesheet
require('./App.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  changeauth(){
    this.setState({
      auth: !this.state.auth
    });
  }



  render() {
    return (
      <Provider store={this.props.store}>
      <div>
      { this.state.auth && 
        <div className="App">
        <header>
        <div className="App-header">
        <button>Broadcast</button>
        <button>Room</button>
        </div>
        </header>
        {<Article />}
        <Broadcast></Broadcast>
        <div>
        <Kakao kakaopay={kakaopay} />
        </div>
        </div> 
      }
      { !this.state.auth && <Login auth={this.changeauth.bind(this)}/> }
      
      </div>
      </Provider>
    );
  }
}


export default App;


// export default function App(props) {
//   return (
//     <Provider store={props.store}>
//       <IntlWrapper>
//         <Router history={browserHistory}>
//           {routes}
//         </Router>
//       </IntlWrapper>
//     </Provider>
//   );
// }

// App.propTypes = {
//   store: React.PropTypes.object.isRequired,
// };
