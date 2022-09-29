import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>

      {/* Blog section */}
      <Blog></Blog>
    </div>
  );
}

export default App;
