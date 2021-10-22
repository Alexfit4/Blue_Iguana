import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import '@material-tailwind/react/tailwind.css';
function App() {
  return (
	  
		<Router>
			<div>
				<Navbar />
			</div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route  path='/Menu' component={Menu} />
			</Switch>
		</Router>
	);
}

export default App;
