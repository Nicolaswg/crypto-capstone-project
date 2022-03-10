import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/ConfigStore';
import CoinSearch from '../components/CoinSearch';

it('testing homepage rendering components', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <CoinSearch />
      </Router>
    </Provider>,
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
