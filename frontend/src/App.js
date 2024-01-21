import FormContainer from './component/form-container';
import MyComponent from './component/mycomponent'; // Import the custom component
import Navbar from './component/navbar'; // Import the custom component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//import Home from './Home';
//import Form from './Form';
import ResultPage from './component/resultpage';

// success: true,
//         message: "Valid data",
//         data: { age: 50 },

function App() {
  return (
    <div className="App">
      <Router>
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
        
          <Routes>
            {/* <Route path="/" exact component={Home} /> */}
            {/* <Route path="/form" component={Form} /> */}
            <Route path="/result" element={ <ResultPage/>} />
            <Route path="/" element={<FormContainer />} />
          </Routes>
      </header>
      </Router>
    </div>
  );
}
export default App;
