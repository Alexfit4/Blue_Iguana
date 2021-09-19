import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
		<Router>
			<div>
				<Navbar />
			</div>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
		</Router>
	);
}

export default App;
