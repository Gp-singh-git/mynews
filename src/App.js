
import './App.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nbar from './Components/Nbar';
import Show from './Components/Show';


function App() {
  return (
    <div>
      <Nbar/>
      <Show/>
      
    </div>
  );
}

export default App;
