import FormContainer from './component/form-container';
import Header from './component/header'; // Import the custom component
import Navbar from './component/navbar'; // Import the custom component
import InfoPage from './component/info-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ResultPage from './component/resultpage';

// success: true,
//         message: "Valid data",
//         data: { age: 50 },

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>
        <Header name="Unlock Your Million-Dollar Potential with Millionaire Me!" />
          <Routes>
            {/* <Route path="/" exact component={Home} /> */}
            {/* <Route path="/form" component={Form} /> */}
            <Route path="/result" element={ <ResultPage/>} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/" element={<FormContainer />} />
          </Routes>

      </Router>
    </div>
  );
}
export default App;
