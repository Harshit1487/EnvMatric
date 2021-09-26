import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UploadScreen from './Screens/UploadScreen';
import WallScreen from './Screens/WallScreen';
import ImageScreen from './Screens/ImageScreen';
import GrowPlantScreen from './Screens/GrowPlantScreen/GrowPlantScreen';
import ForestScreen from './Screens/ForestScreen/ForestScreen';
import AddPostScreen from './Screens/AddPostScreen';
import BlogScreen from './Screens/BlogScreen/BlogScreen';
import MotivateFriendScreen from './Screens/MotivateFriendScreen/MotivateFriendScreen';

function App() {

  return (
    <div className="App">
      <Router>
      <header><Header/></header>
      <main>
      <Switch>
          <Route exact path='/' component={() => <Banner />} />
          <Route exact path='/growplant' component={() => <GrowPlantScreen />} />
          <Route exact path='/upload' component={() => <UploadScreen />} />:
            

          <Route exact path='/wall' component={() => <WallScreen />} />
          <Route exact path='/motivate' component={() => <MotivateFriendScreen />} />
          
          <Route exact path='/forest' component={() => <ForestScreen />} />
          <Route exact path='/addpost' component={() => <AddPostScreen />} />
          <Route exact path='/blog' component={() => <BlogScreen />} />
          <Route exact path='/images/:id' component={() => <ImageScreen />} />

        </Switch>
      </main>
      <footer><Footer/></footer>
      </Router>
    </div>
  );
}

export default App;
