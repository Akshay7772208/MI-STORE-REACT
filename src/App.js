import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Slider from './components/Slider.js';
import data from './data/data.json'
import Offers from './components/Offers.js';
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAccesoriesMenu from './components/HotAccesoriesMenu.js';
import HotAccesories from './components/HotAccesories.js';
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOptios from './components/NavOptios.js';

function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} accessories={data.accessories} audio={data.audio}/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESORIES"/>
      <HotAccesoriesMenu/>
      <Routes>
         <Route exact path='/music' element={<HotAccesories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
         <Route exact path="/smartDevice"
           element={<HotAccesories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
         }/>
         <Route exact path="/home"
           element={<HotAccesories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
         }/>
         <Route exact path="/lifestyle"
           element={<HotAccesories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}  />
         }/>
         
         <Route exact path="/mobileAccessories"
           element={<HotAccesories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
         }/>    

        
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>

      <Heading text='IN THE PRESS'/>
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
