import { useEffect } from 'react';
import './App.scss';
import BottomFooter from './component/bottom-footer/BottomFooter';
import DesignThinks from './component/design/DesignThinks';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar'
import Services from './component/services/Services';
import Testimonial from './component/testimonial/Testimonial'
import OurTeamwork from './component/teamwork/OurTeamwork';
import Company from './component/company/Company';
import Subscrible from './component/subsctible/Subscrible';

function App() {

  const onScroll = (e) => {
    if (e.target.documentElement.scrollTop > 50) {
      document.getElementsByTagName("nav")[0].classList.add("f_top");
    } else {
      document.getElementsByTagName("nav")[0].classList.remove("f_top");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app" style={{ paddingTop: "100px" }}>
      <Navbar />
      <Header />
      <Services />
      <DesignThinks />
      <OurTeamwork />
      <Testimonial />
      <Company />
      <Subscrible />

      <Footer />
      <BottomFooter />
      <div className="bg_top">
        <svg width="798" height="791" viewBox="0 0 798 791" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M469.19 155.934C234.789 138.179 72.7296 -21.42 21 -99L903 -98.4002V676C869.925 669.762 804.534 620.214 775.973 596.221C729.836 557.831 684.193 431 697.48 353.883C714 258 678.705 212.52 657.334 194.324C623.78 154.015 528.5 157.5 469.19 155.934Z" fill="#FFECF2" fillOpacity="0.61" />
          <path d="M545.48 192.728C319.416 128.273 192.7 -60.6138 157.6 -147L1021.52 30.6704L866.04 789.302C834.891 776.55 780.78 714.883 757.617 685.643C720.127 638.772 699.98 519 729.378 432.481C762.5 335 739.368 290.226 722.085 268.111C697.307 221.885 610.5 211.267 545.48 192.728Z" stroke="#FFD0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default App;
