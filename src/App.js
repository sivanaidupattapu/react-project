import logo from './logo.svg';
import './App.css';
import Login from './features/login/login';
import Homepage from './features/home/home';
import { useSelector } from 'react-redux';

function App() {
 var {isLoggedIn}= useSelector(store=>store.loginReducer)
 console.log(isLoggedIn )
  return (
    <div>
      {
        isLoggedIn ? <Homepage></Homepage> : <Login></Login>
      }
    </div>
  );
}

export default App;
