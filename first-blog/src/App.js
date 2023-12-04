import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blog/:id" element={<BlogDetails/>} />
            <Route path="*" element={<NotFound/>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
