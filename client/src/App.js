import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UploadScreen from './Screens/UploadScreen';

function App() {
  return (
    <div className="App">
      <Router>
      <header><Header/></header>
      <main>
      <Switch>
          <Route exact path='/' component={() => <Banner />} />
          <Route exact path='/upload' component={() => <UploadScreen />} />
        </Switch>
      </main>
      <footer><Footer/></footer>
      </Router>
    </div>
  );
}

export default App;
