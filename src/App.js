import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import CoinSearch from './components/CoinSearch';
import CoinList from './components/CoinList';
import CoinDetails from './components/CoinDetails';
import store from './Redux/ConfigStore';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="main-content flex">
      <Router>
        <CoinSearch />
        <Routes>
          <Route path="/" element={<CoinList />} />
          <Route path="/coindetails/:id" element={<CoinDetails />} />
        </Routes>
      </Router>
    </div>
  </Provider>
);

export default App;
