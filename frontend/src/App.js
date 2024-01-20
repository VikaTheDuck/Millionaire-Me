import MyComponent from './component/mycomponent'; // Import the custom component
import Navbar from './component/navbar'; // Import the custom component

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
      </header>
    </div>
  );
}
export default App;
