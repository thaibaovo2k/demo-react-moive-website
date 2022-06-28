// import 'swiper/swiper.min.css';
// import './assets/boxicons-2.0.7/css/boxicons.min.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';
import HeroSlide from './components/hero-slide/HeroSlide';

function App() {
  return (
    <BrowserRouter>
      <Route render={props =>(
        <>
          <Header {...props}/>
          <Routes/>
          <HeroSlide/>
          <Footer/>
        </>
      )}/>
    </BrowserRouter>
  );
}

export default App;
