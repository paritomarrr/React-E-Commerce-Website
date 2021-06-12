import Banner from './Banner/Banner'
import './App.css';
import NavigationBar from './Navbar/NavigationBar'
import Cover from './Cover/Cover'
import Category from './Categories/Category';
import Latest from './Latest/Latest';
import Promo from './Promo/Promo';
import Shop from './Shop/Shop';
import Text from './Text/Text';
import Photo from './Photos/Photo';
import Link from './Links/Link';


function App() {
  return (
    <div className="App">
     <Banner />
     <NavigationBar/>
     <Cover />
     <Category />
     <Latest />
     <Promo />
     <Shop />
     <Text />
     <Photo />
     <Link />
    </div>
  );
}

export default App;
