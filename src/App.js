import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import SectionOne from './components/SectionOne';
import Sectiontwo from './components/Sectiontwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      < NavBar />
      < Banner />
      < SectionOne />
      < Sectiontwo /> 
      < SectionThree/> 
      < SectionFour/> 
      < Footer/> 

    </div>
  );
}

export default App;
