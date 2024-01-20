import MyComponent from './component/mycomponent'; // Import the custom component
import Navbar from './component/navbar'; // Import the custom component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Home from './Home';
//import Form from './Form';
import ResultPage from './component/resultpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar/>
        <MyComponent name="Alex" /> {/* Use the custom component here */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Router>
          <Routes>
            {/* <Route path="/" exact component={Home} /> */}
            {/* <Route path="/form" component={Form} /> */}
            <Route path="/result" element={ <ResultPage/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}
export default App;
