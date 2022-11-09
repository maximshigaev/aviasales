import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Components
import { App } from './components';

// Styles
import './styles/style.scss';

// Store
import { store } from './init/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
