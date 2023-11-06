import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';
import CardBook from './CardBook';
import Gildong from './Gildong';
import Openfile from './Openfile';
import Wallet2 from './Wallet2';



function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/CardBook" element={<CardBook />} />
          <Route path="/Gildong" element={<Gildong />} />
          <Route path="/Wallet2" element={<Wallet2 />} />
          <Route path="/Openfile" element={<Openfile />} />
        </Routes>
      </Router>
    );
}

export default App;
