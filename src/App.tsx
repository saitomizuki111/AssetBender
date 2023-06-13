import './App.css';
import Router from './router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
