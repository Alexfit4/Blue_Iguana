import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import '@material-tailwind/react/tailwind.css';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Events from './Components/Events/Events';
function App() {
  return (
		
			<Router>
				<div>
					<Navbar />
				</div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/Menu' component={Menu} />
					<Route path='/About' component={About} />
					<Route path='/Contact' component={Contact} />
					<Route path='/Events' component={Events} />
				</Switch>
				<div>
					<Footer />
				</div>
			</Router>
		
	);
}

export default App;
