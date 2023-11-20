import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
