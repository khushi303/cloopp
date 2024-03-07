import './App.css';
import Header from './components/Header';
import GreenerWorld from './components/GreenerWorld';
import Recycle from './components/Recycle'
import Frequently from './components/Frequently';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import TopBtn from './assets/images/webp/topbtn.webp';
import Loader from './assets/images/png/logo.png'

function App() {
  // -------aos--------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-linear',
      }
    );
    Aos.refresh()
  });
  // ------------Back-to-Top----------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // --------preloader--------//
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  return (

    <div className='overflow-hidden'>
      {
        screenLoading ? (
          <>
            <div
              className="min-vh-100 w-100 bg_blue position-fixed start-0 top-0 d-flex align-items-center justify-content-center z_index_11 duration_300">
              <img src={Loader} alt="Loader" className='mw_md_146 w-100 mw_120 animation' />
            </div>

          </>

        ) : (
          <div className="overflow-hidden">
            <div className='bg_header'>
              <Header />
            </div>
            <GreenerWorld />
            <Recycle />
            <Frequently />
            <Newsletter />
            <Footer />
            <div className={`${backToTop ? '' : 'd-none'} BackToTop justify-content-center align-items-center`} onClick={() => top()}>
              <img src={TopBtn} alt="TopBtn" className='mw_30 w-100' />
            </div>
          </div>
        )
      }</div>
  );
}

export default App;