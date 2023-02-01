import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      {localStorage.getItem('token') ? <Sidebar /> : <Login />}
    </>
  );
}

export default App;
