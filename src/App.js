import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Router_R from './Router_R'

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.state = {
      username: "",
      password: ""
    }
  }


  login = async () => {
    const response = await axios.post("http://localhost:5000/login", { username: this.state.username, password: this.state.password }, {});
    if (response.data.message === "Login Success") {
      window.location = 'http://localhost:3000/success'
    } else {
      alert("Password Incorrect");
    }

  }

  validate = () => {

  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }





  render() { // main function 

    return (

      // <div className="App">

      //   <h1>Login</h1>
      //   <input name="username" onChange={this.handleInput} value={this.state.username} placeholder="Enter Username" /><br />
      //   <input type="password" onChange={this.handleInput} value={this.state.password} name="password" placeholder="Enter Password" /><br />
      //   <button onClick={this.login}>Login</button>

      // </div>
      <Router_R/>

    );
  }
}



// const RouterC = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Login} />
//         <Route path="/success" exact component={() => {
//           return (
//             <div className="App">
//               <h1>Login Success</h1>

//             </div>
//           )
//         }} />
//       </Switch>
//     </Router>
//   )
// }


// const App = () => {
//   return (
//           <div className="App">
//             <form>
//               <h1>Login</h1>
//               <input name="username"  placeholder="Enter Username" /><br />
//               <input type="password"  name="password" placeholder="Enter Password" /><br />
//               <button>Login</button>
//             </form>
//           </div>
//         );
// }

export default App;
