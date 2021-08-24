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
    </div>
  );
}

export default App;
